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
          src="/hero.webp"
          alt="Sportieve Fitcations op exotische locaties"
          className="w-full h-full object-cover"
        />
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-black/50 via-black/30 to-black/60" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        {/* Subbrand Badge */}
        <div className="mb-8">
          <span className="inline-block bg-white/10 backdrop-blur-md text-xs font-light px-6 py-3 rounded-full border border-white/20 tracking-wider uppercase">
            in collaboration with Primal
          </span>
        </div>

        {/* Main Headline */}
        <h1 className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-thin leading-[0.9] mb-8 tracking-tight">
          <span className="block text-white/95">House of Momma</span>
          <span className="block text-white/90 text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-extralight mt-4">
            Boek jouw Fitcation!
          </span>
        </h1>


        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <button
            onClick={() => scrollToSection('trips')}
            className="bg-white/10 backdrop-blur-md border border-white/30 text-white hover:bg-white/20 font-light px-10 py-4 rounded-full transition-all duration-500 transform hover:scale-105 focus-ring text-base tracking-wider min-w-[220px]"
          >
            Bekijk onze reizen
          </button>
          <button
            onClick={() => scrollToSection('contact')}
            className="bg-transparent border border-white/40 text-white hover:bg-white/10 font-light px-10 py-4 rounded-full transition-all duration-500 transform hover:scale-105 focus-ring text-base tracking-wider min-w-[220px]"
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
