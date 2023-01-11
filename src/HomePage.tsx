import React from 'react';
import HeroHeader from './HeroHeader'



function HomePage() {
  return (
    
    <div className="bg-black-200">

      
    <div className="bg-cover bg-center h-64" style={{backgroundImage: "url(https://via.placeholder.com/2000x600.png?text=Hero+Image)"}}>
        
        <div className="container mx-auto h-full flex items-center text-center">
          <div className="w-full">
  
            <h1 className="text-6xl font-medium text-white leading-none mb-4">Welcome to My Website</h1>
            <h2 className="text-4xl font-medium text-white leading-none mb-4">
              <span className="text-gradient">Explore</span>
              <span className="text-gradient">Discover</span>
              <span className="text-gradient">Learn</span>
            </h2>
  
          </div>
        </div>
      </div>
        
      <header className="bg-white p-6">
        <h1 className="text-3xl font-bold">In need of a world-class software engineer.</h1>
      </header>

      <section className="bg-white p-12">
        <h2 className="text-2xl font-medium mb-4">About Us</h2>
        <p className="text-gray-700">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor, magna vel bibendum luctus, velit elit bibendum mi, at maximus mi elit a nunc. Nulla facilisi.
        </p>
      </section>
      
      <section className="bg-white p-6">
        <h2 className="text-2xl font-medium mb-4">Our Products</h2>
        <ul>
          <li className="text-gray-700 mb-2">Product 1</li>
          <li className="text-gray-700 mb-2">Product 2</li>
          <li className="text-gray-700 mb-2">Product 3</li>
        </ul>
      </section>

      <footer className="bg-white p-6">
        <p className="text-gray-700">Copyright © 2021 My Landing Page</p>
      </footer>

    </div>
  );
}

export default HomePage;

