// import images
import Logo from '../src/img/header/logo.jpeg';
import GalleryImg1 from '../src/img/gallery/1.jpg';
import GalleryImg2 from '../src/img/gallery/2.jpg';
import GalleryImg3 from '../src/img/gallery/3.jpg';
import GalleryImg4 from '../src/img/gallery/4.jpg';
import GalleryImg5 from '../src/img/gallery/5.jpg';
import GalleryImg6 from '../src/img/gallery/6.jpg';
import GalleryImg7 from '../src/img/gallery/7.jpg';
import GalleryImg8 from '../src/img/gallery/8.jpg';
import GalleryImg9 from '../src/img/gallery/9.jpg';
import GalleryImg10 from '../src/img/gallery/10.jpg';
import GalleryImg11 from '../src/img/gallery/11.jpg';
import GalleryImg12 from '../src/img/gallery/12.jpg';
import QuoteImg from '../src/img/testimonial/quote.svg';
// import icons
import { IoMdArrowForward } from 'react-icons/io';
import { FaPlay, FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';


export const headerData = {
  logo: Logo,
};

export const navData = {
  items: [
    { href: '#home', name: 'Home' },
    { href: '#about', name: 'About' },
    { href: '#gallery-section', name: 'Gallery' },
    { href: '#skills', name: 'My work' },
    { href: '#test', name: 'Testimonials'},
    { href: '#contact', name: 'Contact' },
  ],
};

export const heroData = {
  title: 'George Peterson.',
  subtitle:
    'Contemporary British Artist',
  btnText: 'My Story',
  btnIcon: <IoMdArrowForward />,
};

export const aboutData = {
  title: "Artist's Statement :",
  subtitle1:
    'I am motivated to create environments that are complex, lucid, alive and fugitive as the landscapes I experience. For me these works are a celebration of, and a summary of, time spent chasing the most uplifting moments in nature. Like a surfer chasing the ultimate wave it becomes addictive watching these sublime events in the landscape.',
  subtitle2:
    'With weather systems and the seasons themselves being under threat I feel strongly that Artists working in the landscape or in the studio bringing the landscape inside is a worthy pursuit.',
  btnText: 'View Gallery',
  btnIcon: <IoMdArrowForward />,
};

export const galleryData = {
  title: 'gallery:',
  btnText: 'view Limited Edition Prints',
  btnIcon: <IoMdArrowForward />,
  images: [
    {
      src: GalleryImg1,
      original: GalleryImg1,
      width: 465,
      height: 412,
    },
    {
      src: GalleryImg2,
      original: GalleryImg2,
      width: 465,
      height: 540,
    },
    {
      src: GalleryImg3,
      original: GalleryImg3,
      width: 465,
      height: 412,
    },
    {
      src: GalleryImg4,
      original: GalleryImg4,
      width: 465,
      height: 540,
    },
    {
      src: GalleryImg5,
      original: GalleryImg5,
      width: 465,
      height: 540,
    },
    {
      src: GalleryImg6,
      original: GalleryImg6,
      width: 464,
      height: 412,
    },
    {
      src: GalleryImg7,
      original: GalleryImg7,
      width: 465,
      height: 540,
    },
    {
      src: GalleryImg8,
      original: GalleryImg8,
      width: 465,
      height: 412,
    },
    {
      src: GalleryImg9,
      original: GalleryImg9,
      width: 465,
      height: 412,
    },
    {
      src: GalleryImg10,
      original: GalleryImg10,
      width: 464,
      height: 540,
    },
    {
      src: GalleryImg11,
      original: GalleryImg11,
      width: 465,
      height: 412,
    },
    {
      src: GalleryImg12,
      original: GalleryImg12,
      width: 465,
      height: 540,
    },
  ],
};

export const interviewData = {
  title:
    '“Whether you succeed or not is irrelevant, there is no such thing.  Making your unknown known is the important thing.”',
  btnText: 'Watch it now',
  btnIcon: <FaPlay />,
};

export const testimonialData = [
  {
    quoteImg: QuoteImg,
    message:
      "Printmaking at the Curwen Press Cambridge or recently making a bronze sculpture, George seems to take an interdisciplinary approach to his work. Recent experiments with Photoshop and the fusing together of painted, drawn and photographic elements seem like an opening well worth pursuing.",
    name: 'Mark Dickens',
    occupation: 'Contemporary British Artist',
  },
];

export const contactData = {
  title: 'Exhibition:',
  info: [
    {
      title: 'NATURE IN CONTRAST',
      subtitle:
        'Works by Katie Amies and George Peterson ',
      address: {
        icon: <FaMapMarkerAlt />,
        name: 'A-802 Signature, Great Shefford, Hungerford  ',
      },
      phone: {
        icon: <FaPhoneAlt />,
        number: '+91 9925731479',
      },
      email: {
        icon: <FaEnvelope />,
        address: 'yourname@gmail.com',
      },
    },
  ],
  form: {
    name: 'Enter your name',
    email: 'Enter your email',
    message: 'Enter your message',
    btnText: 'Send it',
  },
};


