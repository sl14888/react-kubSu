import React, { useState } from 'react';
import '../App.scss';

import { useForm } from 'react-hook-form';

function Form() {
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm({
    mode: 'onBlur',
    criteriaMode: 'firstError',
  });

  const onSubmit = (data) => {
  return (
    <form onSubmit={handleSubmit(onSubmit)} className="FormSection__form">
      <input
        {...register('firstName', { required: true, maxLength: 15 })}
        placeholder="Ваше имя"
        type="text"
        className="FormSection__form-name"
      />
      {errors.firstName?.type === 'required' && (
        <div className="FormSection__form-error">
          Имя должно быть заполенным
        </div>
      )}
      {errors.firstName?.type === 'maxLength' && (
        <div className="FormSection__form-error">Максимальная длинна 15</div>
      )}
      <input
        {...register('Phone', {
          required: true,
          pattern:
            /(\+7|8)[- _]*\(?[- _]*(\d{3}[- _]*\)?([- _]*\d){7}|\d\d[- _]*\d\d[- _]*\)?([- _]*\d){6})/g,
        })}
        placeholder="Телефон"
        type="text"
        className="FormSection__form-phone"
      />
      {errors.Phone?.type === 'required' && (
        <div className="FormSection__form-error">
          Телефон должен быть заполенным
        </div>
      )}
      {errors.Phone?.type === 'pattern' && (
        <div className="FormSection__form-error">
          Телефон введен неправильно
        </div>
      )}
      {errors.Phone?.type === 'valueAsNumber' && <div>неправильно</div>}
      <input
        {...register('Email', {
          required: true,
          pattern:
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
        })}
        placeholder="E-mail"
        type="email"
        className="FormSection__form-mail"
      />
      {errors.Email?.type === 'required' && (
        <div className="FormSection__form-error">
          Почта должна быть заполенным
        </div>
      )}
      {errors.Email?.type === 'pattern' && (
        <div className="FormSection__form-error">Почта введена неправильно</div>
      )}
      <textarea
        {...register('textArea', {
          minLength: 10,
          maxLength: 300,
        })}
        placeholder="Ваш комментарий"
        className="FormSection__form-textarea"
      ></textarea>
      {errors.textArea?.type === 'minLength' && (
        <div className="FormSection__form-error">
          Минимальное кол-во символов 10
        </div>
      )}
      {errors.checkBox?.type === 'required' && (
        <div className="FormSection__form-error">
          Для отправки требуется согласие
        </div>
      )}
      <label className="custom-checkbox">
        <input
          {...register('checkBox', { required: true })}
          className="hidden-checkbox"
          type="checkbox"
        />
        <div className="checkbox">
          <svg
            className="checkmark"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path
              fill="#ffffff"
              d="M20.285 2l-11.285 11.567-5.286-5.011-3.714 3.716 9 8.728 15-15.285z"
            />
          </svg>
        </div>
        <p>
          Отправляя заявку, я даю согласие на обработку своих персональных
          данных
        </p>
      </label>
    </form>
  );
}

export default Form;
