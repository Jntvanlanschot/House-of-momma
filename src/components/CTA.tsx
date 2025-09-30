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
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Klaar voor je volgende Fitcation?
          </h2>
          
          <p className="text-xl mb-8 text-white/90">
            Vertel ons jouw plannen en wij nemen contact op met een voorstel op maat.
          </p>

          <button
            onClick={() => scrollToSection('contact')}
            className="bg-white text-primary hover:bg-gray-100 font-semibold px-8 py-4 rounded-full transition-all duration-300 transform hover:scale-105 focus-ring text-lg"
          >
            Start aanvraag
          </button>
        </div>
      </div>
    </section>
  );
}
