import React from 'react';
import Image from 'next/image';

const Page = () => {
  return (
    <div className="container mx-auto px-4 py-8 flex flex-col items-center">
      <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-6 lg:mb-8">Introducing Jotion</h1>
      <p className="text-base md:text-lg lg:text-xl text-gray-800 text-center mb-6 lg:mb-8">Elevate your note-taking experience with <span className="font-semibold">Jotion&apos;s seamless integration</span> with Nexus LMS.</p>
      <div className="w-full flex justify-center mb-6 lg:mb-8">
        {/* Replaced <img> with <Image> */}
        <Image className="w-3/4 md:w-2/3 lg:w-1/2 rounded-lg" src="/notes.jpg" alt="Illustration of Jotion" width={800} height={600} />
      </div>
      <a className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-full shadow-md transition duration-300 ease-in-out" 
      href="https://jotion-nexusj.vercel.app/" target="_blank" rel="noopener noreferrer">Explore Jotion</a>
    </div>
  );
}

export default Page;
