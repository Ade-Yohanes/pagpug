const features = [
  {
    icon: "⚡",
    title: "Lightning Fast",
    description: "Optimized for speed and performance with sub-millisecond response times.",
  },
  {
    icon: "🔒",
    title: "Secure & Reliable",
    description: "Enterprise-grade security with 256-bit encryption and regular audits.",
  },
  {
    icon: "🎨",
    title: "Beautiful Design",
    description: "Modern, responsive UI that works seamlessly across all devices.",
  },
  {
    icon: "📊",
    title: "Analytics",
    description: "Real-time insights and comprehensive analytics dashboard for your projects.",
  },
  {
    icon: "🔄",
    title: "Easy Integration",
    description: "Seamless integration with your existing tools and workflows.",
  },
  {
    icon: "🌍",
    title: "Global Scale",
    description: "Deploy worldwide with automatic CDN and multi-region support.",
  },
];

export default function Features() {
  return (
    <section id="features" className="py-12 sm:py-16 md:py-20 px-3 sm:px-4 md:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center space-y-3 sm:space-y-4 mb-10 sm:mb-12 md:mb-16">
          <h2 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900">
            Powerful Features
          </h2>
          <p className="text-sm xs:text-base sm:text-lg md:text-xl text-gray-600 max-w-2xl mx-auto px-4">
            Everything you need to build, scale, and grow your projects with ease.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="p-6 sm:p-7 md:p-8 rounded-xl sm:rounded-2xl border border-gray-200 hover:border-blue-300 hover:shadow-xl transition-all duration-300 group"
            >
              <div className="text-3xl sm:text-4xl mb-4 transform group-hover:scale-110 transition-transform duration-300">
                {feature.icon}
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 sm:mb-3">
                {feature.title}
              </h3>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
