import React from 'react';
import { Check } from 'lucide-react';
import type { SubscriptionPlan } from '../../types/events';

interface SubscriptionPlansProps {
  plans: SubscriptionPlan[];
  onSelectPlan: (planId: string) => void;
}

export const SubscriptionPlans: React.FC<SubscriptionPlansProps> = ({
  plans,
  onSelectPlan,
}) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {plans.map((plan) => (
        <div
          key={plan.id}
          className={`relative rounded-xl transition-all duration-300 ${
            plan.popular
              ? 'glass-card ring-2 ring-purple-500 scale-105'
              : 'glass-card hover:-translate-y-1'
          }`}
        >
          {plan.popular && (
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-purple-600 text-white 
                          px-4 py-1 rounded-full text-sm font-medium shadow-lg">
              Most Popular
            </div>
          )}

          <div className="p-6">
            <h3 className="text-xl font-bold text-gray-900">{plan.name}</h3>
            <p className="text-gray-600 mt-2">{plan.description}</p>

            <div className="mt-4">
              <span className="text-4xl font-bold text-purple-600">${plan.price}</span>
              <span className="text-gray-600">/{plan.interval}</span>
            </div>

            <ul className="mt-6 space-y-4">
              {plan.features.map((feature, index) => (
                <li key={index} className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">{feature}</span>
                </li>
              ))}
            </ul>

            <button
              onClick={() => onSelectPlan(plan.id)}
              className={`w-full mt-8 btn ${
                plan.popular ? 'btn-primary' : 'bg-white hover:bg-gray-50 text-gray-900 border border-gray-200'
              }`}
            >
              Choose {plan.name}
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};