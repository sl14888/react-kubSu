import React from 'react';
import '../App.scss';
import { Link } from 'react-scroll';
import { Button } from './Button';
import { TopItems } from './TopItems';

import './TopSection.scss';

function TopSection() {
  return (
    <section className="top">
      <video src="/video/video.mp4" autoPlay loop muted></video>
      <div className="bg" />
      <div className="top__container">
        <div className="top__content">
          <div className="top__content-right">
            <h1 className="top__title">Поддержка сайтов на Drupal</h1>
            <h2 className="top__subtitle">
              Сопровождение и поддержка сайтов <br /> на CMS Drupal любых версий
              и запущенности
            </h2>
            <Link to="rates">
              <Button buttonStyle="btn--primary" buttonSize="btn--medium">
                Тарифы
              </Button>
            </Link>
          </div>
          <div className="top__content-left">
            <div className="top__items">
              <div className="top__items-num">#1</div>
              <img src="images/cup.png" alt="cup" className="top__items-img" />
              <div className="top__items-text">
                Drupal-разработчик в России по версии Рейтинга Рунета
              </div>
            </div>
            {TopItems.map((item, index) => {
              return (
                <div className="top__items" key={index}>
                  <div className="top__items-nums">{item.num}</div>
                  <div className="top__items-text">{item.text}</div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

export default TopSection;
