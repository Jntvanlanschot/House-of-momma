export default function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-thin text-secondary mb-12 tracking-tight">
            Over House of Momma
          </h2>
          
          <div className="prose prose-lg mx-auto text-gray-600 leading-relaxed">
            <p className="text-xl mb-8 font-light">
              House of Momma biedt Fitcations: sportieve vakanties waar performance, 
              herstel en beleving samenkomen.
            </p>
            
            <p className="text-lg font-light">
              In samenwerking met Primal organiseren we exclusieve trips op unieke locaties, 
              met professionele begeleiding en een community-gevoel. 
              <span className="font-medium text-secondary"> Klein in groepen, groot in kwaliteit.</span>
            </p>
          </div>

          {/* Features */}
          <div className="grid md:grid-cols-3 gap-8 mt-16">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-lg font-light text-secondary mb-3 tracking-wide">Performance</h3>
              <p className="text-gray-600 font-light">Professionele coaching en training op maat</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-light text-secondary mb-3 tracking-wide">Herstel</h3>
              <p className="text-gray-600 font-light">Mobility, yoga en ontspanning in prachtige omgeving</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-light text-secondary mb-3 tracking-wide">Community</h3>
              <p className="text-gray-600 font-light">Kleine groepen voor persoonlijke aandacht</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
