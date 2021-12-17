import React, { Component } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import '../App.scss';
import './PartnersSection.scss';

export const PartnersItem = [
  {
    img: '/images/slide1.png',
    alt: 'kubsu',
  },
  {
    img: '/images/slide2.png',
    alt: 'kubsu',
  },
  {
    img: '/images/slide3.png',
    alt: 'kubsu',
  },
  {
    img: '/images/slide4.png',
    alt: 'kubsu',
  },
  {
    img: '/images/slide1.png',
    alt: 'kubsu',
  },
  {
    img: '/images/slide2.png',
    alt: 'kubsu',
  },
  {
    img: '/images/slide3.png',
    alt: 'kubsu',
  },
  {
    img: '/images/slide4.png',
    alt: 'kubsu',
  },
];

export default class PartnersSection extends Component {
  render() {
    const settingsOne = {
      className: 'Partners',
      autoplay: true,
      infinite: true,
      centerMode: true,
      arrows: false,
      swipeToSlide: true,
      slidesToShow: 6,
      slidesToScroll: 1,
      rtl: true,
      responsive: [
        {
          breakpoint: 1140,
          settings: {
            slidesToShow: 4,
          },
        },
        {
          breakpoint: 700,
          settings: {
            slidesToShow: 2,
          },
        },
      ],
    };
    const settingsTwo = {
      className: 'Partners',
      infinite: true,
      centerMode: true,
      arrows: false,
      swipeToSlide: true,
      slidesToShow: 5,
      slidesToScroll: 1,
      rtl: true,
      responsive: [
        {
          breakpoint: 1140,
          settings: {
            slidesToShow: 3,
          },
        },
        {
          breakpoint: 700,
          settings: {
            slidesToShow: 1,
          },
        },
      ],
    };
    return (
      <div className="PartnersSection">
        <div className="PartnersSection__container">
          <h2 className="PartnersSection__title">С нами работают</h2>
          <div className="PartnersSection__text">
            Десятки компаний доверяют нам самое ценное, что у них есть в
            интернете – свои сайты. Мы делаем всё, чтобы наше сотрудничество
            было долгим.
          </div>
        </div>
        <Slider {...settingsOne}>
          {PartnersItem.map((item, index) => {
            return (
              <div className="PartnersSection__item-box" key={index}>
                <img
                  src={item.img}
                  className="PartnersSection__item-img"
                  alt={item.alt}
                />
              </div>
            );
          })}
        </Slider>
        <Slider {...settingsTwo}>
          {PartnersItem.map((item, index) => {
            return (
              <div className="PartnersSection__item-box" key={index}>
                <img
                  src={item.img}
                  className="PartnersSection__item-img"
                  alt={item.alt}
                />
              </div>
            );
          })}
        </Slider>
      </div>
    );
  }
}
