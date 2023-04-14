import { useState } from 'react';

import GalleryImg1 from '../img/types/1.webp';
import GalleryImg2 from '../img/types/2.jpg';
import GalleryImg3 from '../img/types/3.jpg';
import GalleryImg4 from '../img/types/4.JPG';
import GalleryImg5 from '../img/types/5.jpg';


const Types = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const images = [
    { src: GalleryImg2, alt: 'Painting', desc: 'When painting, I work within a variety of genres including Still Life, Landscape and the Figure. Painting is also a vehicle for me to explore more abstract qualities although I would say there is an unescapable thread back to realism however abstracted a work becomes. I use a range of painting mediums including oil, acrylic, watercolour, gouache, ink, collage and mixed media.' },
    { src: GalleryImg4, alt: 'Commision a work of art', desc: 'Clarity of communication between client and Artist is essential to this interesting collaboration. Finding a site, view or subject is of course the collaborative part. I try and work out the best option possible for the space the work is to be placed; in terms of size, colour and medium. Prices are based on size, location, medium and past experience. I can work from photographs and sketches if the commission is for a very large work.'},
    { src: GalleryImg1, alt: 'Fine Art Photography', desc: 'I am often exploring the same qualities in a photograph as I would with a painting. Chance, light, movement and colour are all words that come to mind. Finding something remarkable in the everyday or overlooked is an ongoing project. I have recently been using photoshop to layer photographs in order to evoke ambiguous qualities.I have recently been experimenting with the ephemeral character of sunlight, condensation  and brush marks. It has been a revelation to be using ‘Genesis Imaging’ in London who are printing editions for my recent work.'},
    { src: GalleryImg3, alt: 'Sculpture', desc: 'Through my time spent teaching, an interest in ‘the object in Art’ developed because I made and encouraged students to build a range of Still Life set ups. Eventually the more traditional set ups made that transition into ‘installations’ that could be interpreted as sculpture or works of Art in their own right. I began to question the idea of setting something up and then making a photograph or a painting of it. What could it add? Had the group of objects actually begun to occupy the realms of sculpture? It is an area I continue to admire and explore.' },
    { src: GalleryImg5, alt: 'Printmaking', desc: 'Since secondary School I have worked with lithography as well as traditional etching techniques such as drypoint, aquatint and using acid to bite the mark into the metal plate. However whilst working in the Art Department at Stowe School we introduced a safer and more technological approach to printmaking that involves etching into a Solar Plate (photopolmer) using natural sunlight or an ultra violet lightbox. A brilliant course directed by Susie Turner reignited my interest in ‘photo-etching’ and I am about to set up my own print space in the studio.' },
  ];

  const handlePrevClick = () => {
    setActiveIndex((activeIndex + images.length - 1) % images.length);
  };

  const handleNextClick = () => {
    setActiveIndex((activeIndex + 1) % images.length);
  };

  return (

    <div className="relative w-full h-screen overflow-hidden mt-20">
      <div className='container mx-auto'>
      </div>
      <div className="absolute top-0 left-0 w-full h-full">
        {images.map((image, index) => (
          <img
            key={index}
            src={image.src}
            alt={image.alt}
            className={`w-full h-full absolute transition-all duration-300 ${
              activeIndex === index ? 'opacity-100' : 'opacity-0'
            }`}
          />
        ))}
      </div>
      <div className="absolute top-0 right-0 lg:right-24 lg:w-1/3 w-[80%] h-full bg-black bg-opacity-70 text-white p-4">
        <h2 className="lg:text-2xl font-bold mb-4 md:text-xl">{images[activeIndex].alt}</h2>
        <p className="lg:text-lg sm:text-base md:text-base mb-6">{images[activeIndex].desc}</p>
      </div>
      <button
        className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-black bg-opacity-50 text-white px-4 py-2 rounded-full"
        onClick={handlePrevClick}
      >
        &lt;
      </button>
      <button
        className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-black bg-opacity-50 text-white px-4 py-2 rounded-full"
        onClick={handleNextClick}
      >
        &gt;
      </button>
    </div>
  );
};

export default Types;
