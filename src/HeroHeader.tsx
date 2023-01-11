import React from 'react';

const HeroHeader = () => {
  return (
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
  );
}

export default HeroHeader;