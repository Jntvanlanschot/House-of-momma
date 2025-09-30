import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-secondary text-white py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold mb-4">House of Momma</h3>
            <p className="text-gray-300 mb-4">
              Sportieve Fitcations op exotische locaties in samenwerking met Primal.
            </p>
            <div className="text-sm text-gray-400">
              <p>in collaboration with Primal</p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Snelle links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/#trips" className="text-gray-300 hover:text-primary transition-colors duration-200">
                  Onze reizen
                </Link>
              </li>
              <li>
                <Link href="/#about" className="text-gray-300 hover:text-primary transition-colors duration-200">
                  Over ons
                </Link>
              </li>
              <li>
                <Link href="/#contact" className="text-gray-300 hover:text-primary transition-colors duration-200">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <div className="space-y-2 text-gray-300">
              <p>Voor vragen over onze Fitcations</p>
              <p>Neem contact op via het formulier</p>
              <p className="text-sm text-gray-400 mt-4">
                We reageren binnen 2 werkdagen
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2024 House of Momma. Alle rechten voorbehouden.</p>
        </div>
      </div>
    </footer>
  );
}
