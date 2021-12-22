import React from 'react';
import '../App.scss';
import './SupportSection.scss';

const SupportItems = [
  {
    num: '01',
    title: 'Постановка задачи по Email',
    text: 'Удобная и привычная модель постановки задач, при которой задачи фиксируются и никогда не теряются.',
    img: 'images/svg/support1.svg',
    alt: 'supp1',
  },
  {
    num: '02',
    title: 'Система Helpdesk – отчетность, прозрачность',
    text: 'Возможность посмотреть все заявки в работе и отработанные часы в личном кабинете через браузер.',
    img: 'images/svg/support2.svg',
    alt: 'supp2',
  },
  {
    num: '03',
    title: 'Расширенная техническая поддержка',
    text: 'Возможность организации расширенной техподдержки с 6:00 до 22:00 без выходных.',
    img: 'images/svg/support3.svg',
    alt: 'supp3',
  },
  {
    num: '04',
    title: 'Персональный менеджер проекта',
    text: 'Ваш менеджер проекта всегда в курсе текущего состояния проекта и в любой момент готов ответить на любые вопросы.',
    img: 'images/svg/support4.svg',
    alt: 'supp4',
  },
  {
    num: '05',
    title: 'Удобные способы оплаты',
    text: 'Безналичный расчет по договору или электронные деньги: WebMoney, Яндекс.Деньги, Paypal.',
    img: 'images/svg/support5.svg',
    alt: 'supp5',
  },
  {
    num: '06',
    title: 'Работаем с SLA и NDA',
    text: 'Работа в рамках соглашений о конфиденциальности и об уровне качетсва работ.',
    img: 'images/svg/support6.svg',
    alt: 'supp6',
  },
  {
    num: '07',
    title: 'Штатные специалисты',
    text: 'Надежные штатные специалисты, никаких фрилансеров.',
    img: 'images/svg/support7.svg',
    alt: 'supp7',
  },
  {
    num: '08',
    title: 'Удобные каналы связи',
    text: 'Консультации по телефону, скайпу, в месенджерах.',
    img: 'images/svg/support8.svg',
    alt: 'supp8',
  },
];

function SupportSection() {
  return (
    <div className="SupportSection" id="support">
      <div className="SupportSection__container">
        <h2 className="SupportSection__title">Поддержка от Drupal-coder</h2>
        <div className="SupportSection__items">
          {SupportItems.map((item, index) => {
            return (
              <div className="SupportSection__item-box" key={index}>
                <div className="SupportSection__item-num">{item.num}</div>
                <div className="SupportSection__item-title">{item.title}</div>
                <div className="SupportSection__item-text">{item.text}</div>
                <img
                  className="SupportSection__item-img"
                  src={item.img}
                  alt={item.alt}
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default SupportSection;
