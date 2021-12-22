import React, { Component } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import '../App.scss';
import './SliderSection.scss';

import { SliderItems } from './SliderItems';

function SampleNextArrow(props) {
  const { className, onClick } = props;
  return (
    <button className={className} onClick={onClick}>
      <svg
        width="18"
        height="34"
        viewBox="0 0 18 34"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M1 1L17 17L1 33" stroke="#050C33" />
      </svg>
    </button>
  );
}

function SamplePrevArrow(props) {
  const { className, onClick } = props;
  return (
    <button className={className} onClick={onClick}>
      <svg
        width="18"
        height="34"
        viewBox="0 0 18 34"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M17 1L1 17L17 33" stroke="#050C33" />
      </svg>
    </button>
  );
}

export default class SliderSection extends Component {
  render() {
    const settings = {
      dots: true,
      arrows: true,
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />,
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
    };
    return (
      <div className="SliderSection" id="reviews">
        <div className="SliderSection__container">
          <h1 className="SliderSection__title">Отзывы</h1>
          <span />
          <Slider {...settings}>
            {SliderItems.map((item, index) => {
              return (
                <div className="SliderSection__item-box" key={index}>
                  <img
                    src={item.img}
                    className="SliderSection__item-img"
                    alt="winamp"
                  />
                  <div className="SliderSection__item-title">{item.title}</div>
                  <div className="SliderSection__item-text">{item.text}</div>
                </div>
              );
            })}
          </Slider>
        </div>
      </div>
    );
  }
}
