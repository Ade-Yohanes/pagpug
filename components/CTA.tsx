import { ArrowRight, CheckCircle } from 'lucide-react';

export default function CTA() {
  return (
    <section className="py-12 sm:py-16 md:py-20 px-3 sm:px-4 md:px-6 lg:px-8 bg-linear-to-r from-blue-600 to-purple-600">
      <div className="max-w-4xl mx-auto text-center text-white space-y-6 sm:space-y-8">
        <div className="space-y-3 sm:space-y-4">
          <h2 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
            Ready to Transform Your Ideas?
          </h2>
          <p className="text-sm xs:text-base sm:text-lg md:text-xl text-white/90 max-w-2xl mx-auto px-4">
            Join thousands of creators and developers building amazing things with our platform today.
          </p>
        </div>
        
        <div className="flex flex-col xs:flex-row gap-3 sm:gap-4 justify-center pt-4 px-4">
          <button className="px-6 sm:px-8 py-3 sm:py-4 bg-white text-blue-600 text-sm sm:text-base rounded-lg font-bold hover:bg-gray-100 transition-all duration-300 w-full xs:w-auto inline-flex items-center justify-center gap-2">
            Start Free Trial
            <ArrowRight size={18} />
          </button>
          <button className="px-6 sm:px-8 py-3 sm:py-4 border-2 border-white text-white text-sm sm:text-base rounded-lg font-bold hover:bg-white/10 transition-all duration-300 w-full xs:w-auto">
            Schedule Demo
          </button>
        </div>

        <div className="grid grid-cols-1 xs:grid-cols-3 gap-4 pt-6 max-w-md mx-auto">
          <div className="flex items-center justify-center gap-2">
            <CheckCircle size={18} />
            <span className="text-xs sm:text-sm">No credit card</span>
          </div>
          <div className="flex items-center justify-center gap-2">
            <CheckCircle size={18} />
            <span className="text-xs sm:text-sm">14-day trial</span>
          </div>
          <div className="flex items-center justify-center gap-2">
            <CheckCircle size={18} />
            <span className="text-xs sm:text-sm">Cancel anytime</span>
          </div>
        </div>
      </div>
    </section>
  );
}
