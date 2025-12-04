import { Check } from 'lucide-react';

const plans = [
  {
    name: "Starter",
    price: "$29",
    description: "Perfect for getting started",
    features: [
      "Up to 10 projects",
      "5GB storage",
      "Basic support",
      "Community access",
    ],
    popular: false,
  },
  {
    name: "Professional",
    price: "$79",
    description: "For growing teams",
    features: [
      "Unlimited projects",
      "500GB storage",
      "Priority support",
      "Team collaboration",
      "Advanced analytics",
      "Custom domain",
    ],
    popular: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    description: "For large organizations",
    features: [
      "Everything in Professional",
      "Unlimited storage",
      "24/7 dedicated support",
      "Custom integrations",
      "SLA guarantee",
      "White label options",
    ],
    popular: false,
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="py-12 sm:py-16 md:py-20 px-3 sm:px-4 md:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center space-y-3 sm:space-y-4 mb-10 sm:mb-12 md:mb-16">
          <h2 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900">
            Simple, Transparent Pricing
          </h2>
          <p className="text-sm xs:text-base sm:text-lg md:text-xl text-gray-600 max-w-2xl mx-auto px-4">
            Choose the perfect plan for your needs. Always flexible to scale.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7 md:gap-8">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`rounded-xl sm:rounded-2xl p-6 sm:p-7 md:p-8 transition-all duration-300 ${
                plan.popular
                  ? "bg-linear-to-br from-blue-600 to-purple-600 text-white shadow-2xl transform sm:scale-105 lg:scale-105"
                  : "bg-white border border-gray-200 hover:border-gray-300"
              }`}
            >
              {plan.popular && (
                <div className="mb-4 inline-flex items-center gap-1 px-3 sm:px-4 py-1 bg-white/20 rounded-full text-xs sm:text-sm font-semibold">
                  ⭐ Most Popular
                </div>
              )}
              <h3 className={`text-xl sm:text-2xl font-bold mb-2 ${plan.popular ? "text-white" : "text-gray-900"}`}>
                {plan.name}
              </h3>
              <p className={`mb-6 text-sm sm:text-base ${plan.popular ? "text-white/80" : "text-gray-600"}`}>
                {plan.description}
              </p>

              <div className="mb-6">
                <span className={`text-3xl sm:text-4xl font-bold ${plan.popular ? "text-white" : "text-gray-900"}`}>
                  {plan.price}
                </span>
                {plan.price !== "Custom" && (
                  <span className={`text-sm sm:text-base ${plan.popular ? "text-white/80" : "text-gray-600"}`}>
                    {" "}/month
                  </span>
                )}
              </div>

              <button
                className={`w-full py-2 sm:py-3 rounded-lg font-semibold mb-8 text-sm sm:text-base transition-all duration-300 ${
                  plan.popular
                    ? "bg-white text-blue-600 hover:bg-gray-100"
                    : "bg-linear-to-r from-blue-600 to-purple-600 text-white hover:shadow-lg"
                }`}
              >
                Get Started
              </button>

              <ul className="space-y-3 sm:space-y-4">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start gap-3">
                    <Check size={20} className={`shrink-0 mt-0.5 ${plan.popular ? "text-white" : "text-blue-600"}`} />
                    <span className={`text-sm sm:text-base ${plan.popular ? "text-white/90" : "text-gray-700"}`}>
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
