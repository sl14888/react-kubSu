import React from 'react'
import '../App.scss'

import './ServiceSection.scss';
import {ServiceItems} from './ServiceItems';

function ServiceSection() {
    return (
        <div className="ServiceSection">
            <div className="ServiceSection__container">
                <h1 className="ServiceSection__title">
                  13  лет совершенствуем компетенции в Drupal поддержке!
                </h1>
                <div className="ServiceSection__text">Разрабатываем и оптимизируем модули, расширяем функциональность сайтов, обновляем дизайн</div>
            <div className="ServiceSection__items">
                {ServiceItems.map((item, index) => {
              return (
                    <div className="ServiceSection__item-box"  key={index}>
                    <img src={item.img} alt={item.alt} className="ServiceSection__item-img" />
                    <div className="ServiceSection__item-text">{item.text}</div>
                    </div>
              );
                })}
            </div>
        </div>
    </div>
    )
}

export default ServiceSection
