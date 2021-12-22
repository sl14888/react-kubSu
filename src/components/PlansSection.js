import React, { useState } from 'react';
import '../App.scss';
import { Button } from './Button';
import './PlansSection.scss';

import { Link } from 'react-router-dom';
import Form from './Form';
import Modal from './Modal';

function PlansSection() {
  const [modalActive, setModalActive] = useState(false);
  return (
    <div className="PlansSection" id="rates">
      <div className="PlansSection__contianer">
        <div className="PlansSection__title">Тарифы</div>
        <div className="PlansSection__items">
          <div className="PlansSection__item-box">
            <div className="PlansSection__price">
              <div className="PlansSection__price-plan">Стандартый</div>
              <div className="PlansSection__price-cost">2000</div>
              <div className="PlansSection__price-time">в час</div>
            </div>
            <ul className="PlansSection__benefits">
              <li className="PlansSection__benefits-item">
                Предоплата от 2 часов
              </li>
              <li className="PlansSection__benefits-item">
                Консультации и работы по SEO
              </li>
              <li className="PlansSection__benefits-item">Услуги дизайнера</li>
              <li className="PlansSection__benefits-item">
                Стандартное время реакции
              </li>
              <li className="PlansSection__benefits-item">
                Неиспользованные оплаченные часы переносятся на следующий месяц
              </li>
            </ul>
            <Link to="/modal">
              <Button
                onClick={() => setModalActive(true)}
                buttonStyle="btn--primary"
                buttonSize="btn--large"
              >
                Оставить заявку!
              </Button>
            </Link>
          </div>
          <div className="PlansSection__item-box">
            <div className="PlansSection__price">
              <div className="PlansSection__price-plan">Бизнес</div>
              <div className="PlansSection__price-cost">2000</div>
              <div className="PlansSection__price-time">в час</div>
            </div>
            <ul className="PlansSection__benefits">
              <li className="PlansSection__benefits-item">
                Предоплата от 10 часов
              </li>
              <li className="PlansSection__benefits-item">
                Консультации и работы по SEO
              </li>
              <li className="PlansSection__benefits-item">Услуги дизайнера</li>
              <li className="PlansSection__benefits-item">
                Высокое время реакции – до 2 рабочих дней
              </li>
              <li className="PlansSection__benefits-item">
                Неиспользованные часы не переносятся
              </li>
            </ul>
            <Link to="/modal">
              <Button
                onClick={() => setModalActive(true)}
                buttonStyle="btn--solid"
                buttonSize="btn--large"
              >
                Оставить заявку!
              </Button>
            </Link>
          </div>
          <div className="PlansSection__item-box">
            <div className="PlansSection__price">
              <div className="PlansSection__price-plan">Стандартый</div>
              <div className="PlansSection__price-cost">1800</div>
              <div className="PlansSection__price-time">в час</div>
            </div>
            <ul className="PlansSection__benefits">
              <li className="PlansSection__benefits-item">
                Предоплата от 100 часов
              </li>
              <li className="PlansSection__benefits-item">
                Консультации и работы по SEO
              </li>
              <li className="PlansSection__benefits-item">Услуги дизайнера</li>
              <li className="PlansSection__benefits-item">
                Максимальное время реакции – в день обращения
              </li>
              <li className="PlansSection__benefits-item">
                Неиспользованные часы не переносятся
              </li>
            </ul>

            <Link to="/modal">
              <Button
                onClick={() => setModalActive(true)}
                buttonStyle="btn--primary"
                buttonSize="btn--large"
              >
                Оставить заявку!
              </Button>
            </Link>
          </div>
        </div>
        <div className="PlansSection__conditions">
          Вам не подходят наши тарифы? Оставьте заявку и мы предложим вам
          индивидуальные условия!
        </div>
        <div className="PlansSection__conditions-indiv">
          Получить индивидуальный тариф
        </div>
      </div>
      <Modal active={modalActive} setActive={setModalActive}>
        <Form />
      </Modal>
    </div>
  );
}

export default PlansSection;
