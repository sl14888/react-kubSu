import React from 'react';
import '../App.scss';
import './FooterSection.scss';

function FooterSection() {
  return (
    <footer className="FooterSection">
      <div className="FooterSection__line"></div>
      <div className="FooterSection__container">
        <div className="FooterSection__content">
          <div className="FooterSection__text">
            Проект ООО «Инитлаб», Краснодар, Россия. <br /> Drupal является
            зарегистрированной торговой маркой Dries Buytaert.
          </div>
        </div>
      </div>
    </footer>
  );
}

export default FooterSection;
