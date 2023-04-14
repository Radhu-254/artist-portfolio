import { useState } from 'react';


import GalleryImg1 from '../img/test/1.jpg';
import GalleryImg2 from '../img/test/2.jpg';
import GalleryImg3 from '../img/test/3.jpg';
import GalleryImg4 from '../img/test/4.jpg';
import GalleryImg5 from '../img/test/5.jpg';
import GalleryImg6 from '../img/test/6.jpg';
import GalleryImg7 from '../img/test/7.jpg';
import GalleryImg8 from '../img/test/8.jpg';


const Test = () => {
  const [hoveredIndex, setHoveredIndex] = useState(-1);
  const images = [
    { src: GalleryImg1, alt: 'Image 1', desc: 'Spring Landscape', desc1:'20"X 28", Oil on canvas, framed' },
    { src: GalleryImg2, alt: 'Image 2', desc: 'Cornwall Coast', desc1:'44"X 40", Oil and pigment on board, unframed'},
    { src: GalleryImg3, alt: 'Image 3', desc: 'Cornwall Abstract', desc1:'28"X 20", Oil and pigment on board, framed' },
    { src: GalleryImg4, alt: 'Image 4', desc: 'Portrait Overtime', desc1:'10"X 19", Oil on board, framed'},
    { src: GalleryImg5, alt: 'Image 5', desc: "Ley's Garden", desc1:'20"X 28", Oil on canvas, framed' },
    { src: GalleryImg6, alt: 'Image 6', desc: 'Still life', desc1:'46"X 56", Oil on canvas, framed' },
    { src: GalleryImg7, alt: 'Image 7', desc: 'Abstracted Landscape', desc1:'13"X 13", Oil and pigment on board, framed' },
    { src: GalleryImg8, alt: 'Image 8', desc: 'France market', desc1:'13"X 13", Gouache on paper, framed' },
  ];

  const handleMouseEnter = (index) => {
    setHoveredIndex(index);
  };

  const handleMouseLeave = () => {
    setHoveredIndex(-1);
  };

  return (
    <div className="flex flex-wrap justify-center" id="limited-edition">
         <div className='container mx-auto'>
        <h2 className='h2 max-w-[370px] lg:mb-20 mt-12'>
          Limited Edition Prints:
        </h2>
      </div>
      {images.map((image, index) => (
        <div
          key={index}
          className="relative w-64 h-64 md:w-60 md:h-60 lg:w-80 lg:h-80 overflow-hidden m-4"
          onMouseEnter={() => handleMouseEnter(index)}
          onMouseLeave={() => handleMouseLeave()}
        >
          <img
            src={image.src}
            alt={image.alt}
            className={`w-full h-full transition-all duration-300 ${
              hoveredIndex === index ? 'scale-110' : ''
            }`}
          />
          {hoveredIndex === index && (
            <div className="absolute bottom-0 left-0 p-4 bg-white bg-opacity-70">
              <b><p>{image.desc}</p></b>
              <p>{image.desc1}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Test;
