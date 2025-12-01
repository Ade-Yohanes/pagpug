export default function Hero() {
  return (
    <section className="pt-20 sm:pt-24 md:pt-32 pb-12 sm:pb-16 md:pb-20 px-3 sm:px-4 md:px-6 lg:px-8 bg-linear-to-br from-blue-50 via-white to-purple-50">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6 sm:space-y-8">
            <div className="space-y-3 sm:space-y-4">
              <div className="inline-block px-3 sm:px-4 py-1.5 sm:py-2 bg-blue-100 text-blue-700 rounded-full text-xs sm:text-sm font-semibold">
                ✨ Welcome to PAGPUG
              </div>
              <h1 className="text-3xl xs:text-4xl sm:text-5xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Build Amazing{" "}
                <span className="bg-linear-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  Digital Experiences
                </span>
              </h1>
              <p className="text-base sm:text-lg md:text-xl text-gray-600 leading-relaxed max-w-xl">
                Unleash the power of modern web development with our cutting-edge platform. Create, design, and deploy your dreams.
              </p>
            </div>

            <div className="flex flex-col xs:flex-row gap-3 sm:gap-4 w-full xs:w-auto">
              <button className="px-6 sm:px-8 py-3 sm:py-4 bg-linear-to-r from-blue-600 to-purple-600 text-white text-sm sm:text-base rounded-lg font-semibold hover:shadow-2xl transition-all duration-300 transform hover:scale-105 w-full xs:w-auto">
                Start Building
              </button>
              <button className="px-6 sm:px-8 py-3 sm:py-4 border-2 border-gray-300 text-gray-900 text-sm sm:text-base rounded-lg font-semibold hover:border-gray-400 transition-all duration-300 w-full xs:w-auto">
                Watch Demo
              </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 sm:gap-6 md:gap-8 pt-6 sm:pt-8">
              <div>
                <div className="text-2xl xs:text-2xl sm:text-3xl font-bold text-gray-900">10K+</div>
                <p className="text-xs xs:text-sm sm:text-base text-gray-600">Active Users</p>
              </div>
              <div>
                <div className="text-2xl xs:text-2xl sm:text-3xl font-bold text-gray-900">500+</div>
                <p className="text-xs xs:text-sm sm:text-base text-gray-600">Projects Built</p>
              </div>
              <div>
                <div className="text-2xl xs:text-2xl sm:text-3xl font-bold text-gray-900">99%</div>
                <p className="text-xs xs:text-sm sm:text-base text-gray-600">Uptime</p>
              </div>
            </div>
          </div>

          {/* Right Visual */}
          <div className="relative h-64 xs:h-72 sm:h-80 md:h-96 lg:h-full">
            <div className="absolute inset-0 bg-linear-to-r from-blue-400 to-purple-400 rounded-2xl sm:rounded-3xl transform -rotate-3 opacity-20"></div>
            <div className="absolute inset-0 bg-linear-to-r from-purple-400 to-pink-400 rounded-2xl sm:rounded-3xl transform rotate-3 opacity-20"></div>
            <div className="relative h-full bg-linear-to-br from-blue-600 to-purple-600 rounded-2xl sm:rounded-3xl flex items-center justify-center text-white text-center p-6 sm:p-8">
              <div className="space-y-3 sm:space-y-4">
                <div className="text-5xl sm:text-6xl">🚀</div>
                <p className="text-lg sm:text-xl md:text-2xl font-bold">Your Project<br className="sm:hidden" /> Starts Here</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
