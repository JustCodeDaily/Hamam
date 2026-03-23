export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-hamam-dark-bg via-hamam-dark-nav to-hamam-dark-bg">
      <div className="text-center">
        <h1 className="text-6xl md:text-7xl font-bold text-hamam-cream mb-6 font-heading">
          Coming Soon
        </h1>
        <p className="text-xl md:text-2xl text-hamam-dark-muted mb-8 font-body">
          Hamam Braunschweig is preparing something special for you.
        </p>
        <div className="w-32 h-1 bg-hamam-gold mx-auto"></div>
      </div>
    </section>
  );
}
