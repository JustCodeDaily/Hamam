import Header from './components/Header';
import Hero from './components/Hero';
import Footer from './components/Footer';

function App() {
  return (
    <div className="bg-hamam-cream font-body min-h-screen">
      <Header />
      <main className="pt-20">
        <Hero />
      </main>
      <Footer />
    </div>
  );
}

export default App;
