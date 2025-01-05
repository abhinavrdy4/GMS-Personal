import React from 'react';
import { Star } from 'lucide-react';
import type { Review } from '../../types/events';

interface ReviewsProps {
  reviews: Review[];
}

export const Reviews: React.FC<ReviewsProps> = ({ reviews }) => {
  const averageRating = reviews.reduce((acc, review) => acc + review.rating, 0) / reviews.length;

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-4">
        <div className="flex items-center gap-1">
          {[1, 2, 3, 4, 5].map((star) => (
            <Star
              key={star}
              className={`w-5 h-5 ${
                star <= averageRating
                  ? 'text-yellow-400 fill-current'
                  : 'text-gray-300'
              }`}
            />
          ))}
        </div>
        <span className="text-lg font-medium">
          {averageRating.toFixed(1)} out of 5
        </span>
        <span className="text-gray-600">
          ({reviews.length} {reviews.length === 1 ? 'review' : 'reviews'})
        </span>
      </div>

      <div className="space-y-6">
        {reviews.map((review) => (
          <div key={review.id} className="glass-card rounded-xl p-6">
            <div className="flex items-center gap-4 mb-4">
              {review.userImage ? (
                <img
                  src={review.userImage}
                  alt={review.userName}
                  className="w-12 h-12 rounded-full object-cover"
                />
              ) : (
                <div className="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center">
                  <span className="text-lg font-medium text-purple-700">
                    {review.userName[0]}
                  </span>
                </div>
              )}
              <div>
                <h4 className="font-medium">{review.userName}</h4>
                <div className="flex items-center gap-2">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-4 h-4 ${
                          i < review.rating
                            ? 'text-yellow-400 fill-current'
                            : 'text-gray-300'
                        }`}
                      />
                    ))}
                  </div>
                  <span className="text-sm text-gray-600">
                    {new Date(review.date).toLocaleDateString()}
                  </span>
                </div>
              </div>
            </div>
            <p className="text-gray-700">{review.comment}</p>
          </div>
        ))}
      </div>
    </div>
  );
};