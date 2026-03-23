export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-hamam-dark-footer text-hamam-dark-muted py-12 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <h3 className="text-hamam-cream font-bold text-lg mb-4">
              Hamam Braunschweig
            </h3>
            <p className="text-hamam-dark-muted">
              Traditional Turkish steam bath in the heart of Braunschweig.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-hamam-cream font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-hamam-gold transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-hamam-gold transition-colors">
                  Services
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-hamam-gold transition-colors">
                  Vouchers
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-hamam-gold transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-hamam-cream font-bold mb-4">Contact</h4>
            <p className="text-hamam-dark-muted mb-2">Email: info@hamam-bs.de</p>
            <p className="text-hamam-dark-muted">Phone: +49 (0) 531 123456</p>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-hamam-dark-border pt-8">
          <p className="text-center text-hamam-dark-muted">
            © {currentYear} Hamam Braunschweig. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
