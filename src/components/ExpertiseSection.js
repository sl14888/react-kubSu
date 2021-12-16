import React from 'react';
import '../App.scss';
import './ExpertiseSection.scss';

function ExpertiseSection() {
  return (
    <div className="ExpertiseSection" id="ExpertiseSection">
      <div className="ExpertiseSection__wrapper" />
      <div className="ExpertiseSection__contianer">
        <div className="ExpertiseSection__inner">
          <div className="ExpertiseSection__content">
            <h1 className="ExpertiseSection__title">
              Экспертиза в Drupal, опыт 14 лет!
            </h1>
            <div className="ExpertiseSection__group">
              <div className="ExpertiseSection__group-text">
                Только системный подход – контроль версий, резервирование и
                тестирование!
              </div>
              <div className="ExpertiseSection__group-text">
                Только Drupal сайты, не берем на поддержку сайты на других CMS!
              </div>
            </div>
          </div>
        </div>
      </div>
      <img
        className="ExpertiseSection__img"
        src="images/laptop.png"
        alt="bg-druppal"
      />
    </div>
  );
}

export default ExpertiseSection;
