import React from 'react';
import '../App.scss';
import './FormSection.scss';
import FooterSection from './FooterSection';

import Form from './Form';
function FormSection() {
  return (
    <div className="FormSection" id="contacs">
      <div className="FormSection__wrapper">
        <div className="FormSection__container">
          <div className="FormSection__content">
            <div className="FormSection__left">
              <div className="FormSection__inner">
                <h2 className="FormSection__title">
                  Оставить заявку на поддержку сайта
                </h2>
                <div className="FormSection__subtitle">
                  Срочно нужна поддержка сайта? Ваша команда не успевает
                  справиться самостоятельно или предыдущий подрядчик не
                  справился с работой? Тогда вам точно к нам! Просто оставьте
                  заявку и наш менеджер с вами свяжется!
                </div>

                <a href="tel:+78002222673" className="FormSection__tel">
                  8 800 222-26-73
                </a>
                <a
                  href="mail:info@drupal-coder.ru"
                  className="FormSection__mail"
                >
                  info@drupal-coder.ru
                </a>
              </div>
            </div>
            <Form />
          </div>
        </div>
        <FooterSection />
        <div id="output" className="container"></div>
      </div>
    </div>
  );
}

export default FormSection;
