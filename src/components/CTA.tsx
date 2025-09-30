'use client';

export default function CTA() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="py-20 bg-gradient-to-r from-primary to-primary/80">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-thin mb-8 tracking-tight">
            Klaar voor je volgende Fitcation?
          </h2>
          
          <p className="text-xl mb-12 text-white/90 font-light leading-relaxed">
            Vertel ons jouw plannen en wij nemen contact op met een voorstel op maat.
          </p>

          <button
            onClick={() => scrollToSection('contact')}
            className="bg-white/10 backdrop-blur-md border border-white/30 text-white hover:bg-white/20 font-light px-10 py-4 rounded-full transition-all duration-500 transform hover:scale-105 focus-ring text-base tracking-wider"
          >
            Start aanvraag
          </button>
        </div>
      </div>
    </section>
  );
}
