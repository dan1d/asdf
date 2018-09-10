import React, { Component } from 'react';
import Gallery from 'react-photo-gallery';
import MetallicaLarge from '../../assets/images/metallica_large.jpg';
import Metallica from '../../assets/images/metallica.jpg';
import TourHero from '../../assets/images/tour-hero.jpg';
class Photos extends Component {
  render() {
    return (
        <Gallery photos={PHOTO_SET} />
    );
  }
}

export default Photos;

const PHOTO_SET = [
  {
    src: MetallicaLarge,
    width: 3,
    height: 2
  },
  {
    src: Metallica,
    width: 2,
    height: 1
  },
  {
    src: TourHero,
    width: 4,
    height: 2
  },
  {
    src: MetallicaLarge,
    width: 3,
    height: 2
  },
  {
    src: Metallica,
    width: 2,
    height: 1
  },
  {
    src: TourHero,
    width: 4,
    height: 2
  },
  {
    src: MetallicaLarge,
    width: 3,
    height: 2
  },
  {
    src: Metallica,
    width: 2,
    height: 1
  },
  // {
  //   src: TourHero,
  //   width: 4,
  //   height: 2
  // },
  // {
  //   src: MetallicaLarge,
  //   width: 3,
  //   height: 2
  // },
];
