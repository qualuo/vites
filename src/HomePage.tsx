import React from 'react';

function HomePage() {
  return (
    
    <div className="container mx-auto font-serif text-center text-gray-900 text-2xl">

      <nav>
        <div className="p-6">
          <p className="text-xl text-gray-700">Home</p>
        </div>
      </nav>

      <header className="p-28">
        <h1 className="text-9xl p-12 text-center text-gray-900">KINGSMAN</h1>
        <h2 className="text-3xl p-2 text-center text-gray-500">World class premium solutions of the highest quality</h2>
      </header>

      <section className="p-12">
        <h2 className="text-4xl font-medium mb-4">About</h2>
        <p className="text-gray-700">Indulge in the exclusivity of our bespoke tailoring service and create a one-of-a-kind wardrobe that is tailored to your unique style.
        </p>
      </section>
      
      <section className="p-6">
        <h2 className="text-3xl font-medium mb-4">Our Products</h2>
        <ul className="text-gray-500">
          <li className="p-12">Step into the world of refinement and elegance with our <br/>curated selection of diamond jewelry, made with only the finest quality gems.</li>
          <li className="p-12">Join the ranks of the world's elite with our collection of luxury watches, featuring exclusive designs and state-of-the-art technology</li>
          <li className="p-12">Elevate your home with our collection of designer furniture, featuring timeless pieces from the most iconic names in the industry</li>
          <li className="p-12">Travel in style with our collection of luxury luggage, made from the finest quality materials and designed to withstand the rigors of the road.</li>
        </ul>
      </section>

      <footer className="bg-white p-6 bg-gradient-to-r from-amber-900 to-orange-100">
        <p className="text-1xl text-gray-700">Amber</p>
      </footer>

    </div>
  );
}

export default HomePage;

