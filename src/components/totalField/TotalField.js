import React from 'react';
import { useSelector } from 'react-redux';
import './totalField.scss';
import { addToBasket } from '../../utils/mainApi';

const TotalField = () => {
  const totalAmount = useSelector(state => state.totalAmount);
  const totalCost = useSelector(state => state.totalCost);
  const selectedGoods = useSelector(state => state.selectedGoods);
  const isSubmitActive = Object.keys(selectedGoods).length > 0;

  const submitHandler = (e) => {
    e.preventDefault();
    addToBasket(selectedGoods);
  }

  return (
    <form onSubmit={submitHandler} className='field'>
      <span>Выбранно товаров: {totalAmount} на сумму: {totalCost}</span>
      <button
        className={`field__submit ${isSubmitActive ? '' : 'field__submit_disabled'}`}
        type="submit"
        disabled={isSubmitActive ? false : true}
      >В корзину</button>
    </form>
  );
}

export default TotalField;