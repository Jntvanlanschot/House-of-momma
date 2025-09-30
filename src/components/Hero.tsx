'use client';

export default function Hero() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="/hero.jpg"
          alt="Sportieve Fitcations op exotische locaties"
          className="w-full h-full object-cover"
        />
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-black/60" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        {/* Subbrand Badge */}
        <div className="mb-6">
          <span className="inline-block bg-white/20 backdrop-blur-sm text-sm font-medium px-4 py-2 rounded-full border border-white/30">
            in collaboration with Primal
          </span>
        </div>

        {/* Main Headline */}
        <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight mb-6">
          Sportieve Fitcations op{' '}
          <span className="text-primary">exotische locaties</span>
        </h1>

        {/* Subtitle */}
        <p className="text-xl sm:text-2xl lg:text-3xl font-light mb-12 text-white/90">
          House of Momma × Primal
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button
            onClick={() => scrollToSection('trips')}
            className="bg-primary hover:bg-primary/90 text-white font-semibold px-8 py-4 rounded-full transition-all duration-300 transform hover:scale-105 focus-ring text-lg min-w-[200px]"
          >
            Bekijk onze reizen
          </button>
          <button
            onClick={() => scrollToSection('contact')}
            className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-secondary font-semibold px-8 py-4 rounded-full transition-all duration-300 transform hover:scale-105 focus-ring text-lg min-w-[200px]"
          >
            Plan jouw trip
          </button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <div className="animate-bounce">
          <svg
            className="w-6 h-6 text-white/70"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </div>
      </div>
    </section>
  );
}
