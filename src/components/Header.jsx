export default function Header() {
  const navItems = [
    { label: 'Home', href: '#' },
    { label: 'Anwendungen', href: '#' },
    { label: 'Gutscheine', href: '#' },
    { label: 'Kontakt', href: '#' },
  ];

  return (
    <header className="bg-gray-900 py-4 px-6">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-8">
        {/* Logo */}
        <div className="text-2xl font-bold text-white flex-shrink-0">
          Hamam Braunschweig
        </div>

        {/* Navigation - Centered */}
        <nav className="flex items-center gap-8 flex-1 justify-center">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-gray-300 hover:text-orange-500 transition-colors font-medium"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* CTA Button */}
        <button className="bg-orange-500 text-white px-6 py-2 rounded hover:bg-orange-600 transition-colors font-semibold flex-shrink-0">
          Termin buchen
        </button>
      </div>
    </header>
  );
}
