import React from 'react';

const Page = () => {
  return (
    <div className="container mx-auto px-4 py-8 flex flex-col items-center">
      <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-6 lg:mb-8">Explore Nexus 3D Classroom</h1>
      <p className="text-base md:text-lg lg:text-xl text-gray-800 text-center mb-6 lg:mb-8">Experience immersive learning with Mozilla Hubs integrated into Nexus LMS.</p>
      <div className="w-full flex justify-center mb-6 lg:mb-8">
        {/* Replace this with an illustration or placeholder image for the 3D classroom */}
        <img className="w-3/4 md:w-2/3 lg:w-1/2 rounded-lg" src="Educate.jpg" alt="Illustration of Nexus 3D Classroom" />
      </div>
      <a className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-full shadow-md transition duration-300 ease-in-out" 
      href="https://hubs.mozilla.com/yU54qq2/excellent-lighthearted-get-together/" target="_blank" rel="noopener noreferrer">Explore Nexus 3D Classroom</a>
    </div>
  );
}

export default Page;
