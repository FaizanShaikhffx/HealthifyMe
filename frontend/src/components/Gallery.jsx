import React from 'react';

const Gallery = () => {
  const gallery = ['/img1.jpg', '/img2.jpg', '/img3.jpg', '/img4.jpg', '/img5.jpg', '/img6.jpg', '/img7.jpg', '/img8.jpg'];
  return (
    <section className="bg-gray-100 p-5">
      <h1 className="text-3xl font-bold text-center mb-6">BETTER BEATS BEST</h1>
      <div className="images grid grid-cols-3 gap-4">
        {gallery.map((element, index) => (
          <img key={index} src={element} alt="galleryImage" className="w-full h-auto shadow rounded-lg"/>
        ))}
      </div>
    </section>
  );
}

export default Gallery;
