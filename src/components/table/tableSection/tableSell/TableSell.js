import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setTotalAmount, setTotalCost, setSelectedGoods } from '../../../../reducers/goodsReducer';

const TableSell = ({ good }) => {
  const { gprice, gid, gname } = good;
  const [sum, setSum] = useState(0);
  const [curAmount, setCurAmount] = useState(0);
  const dispatch = useDispatch();
  const totalAmount = useSelector(state => state.totalAmount);
  const totalCost = useSelector(state => state.totalCost);
  const selectedGoods = useSelector(state => state.selectedGoods);

  const setSelectedGoodsStack = (value) => {
    const result = selectedGoods;
    result[gid] = value;

    if (+value === 0) {
      delete result[gid];
    }
    dispatch(setSelectedGoods(result));
  }

  const setTotalValues = (value, newSum) => {
    const oldSum = curAmount * gprice;
    let newTotalAmount = 0;
    let newTotalCost = 0;

    if(value < curAmount) {
      newTotalAmount = totalAmount - (curAmount - value);
      newTotalCost = totalCost - (oldSum - newSum);
    }
    if (value > curAmount) {
      newTotalAmount = totalAmount + (value - curAmount);
      newTotalCost = totalCost + (newSum - oldSum);
    }

    dispatch(setTotalAmount(newTotalAmount));
    dispatch(setTotalCost(newTotalCost));
  }

  const changeSumHandler = (e) => {
    const value = e.target.value;
    const newSum = value * gprice;

    setTotalValues(value, newSum);
    setSelectedGoodsStack(value);
    setSum(newSum);
    setCurAmount(value);
  };

  return (
    <tr>
      <td className='table__item-cell'>Id: {gid}</td>
      <td className='table__item-cell'>
        Название товара:
        <p>{gname}</p>
      </td>
      <td className='table__item-cell'>Цена: {gprice} руб.</td>
      <td className='table__item-cell'>
        Количество:
        <input
          onChange={changeSumHandler}
          className='table__amount'
          type='number'
          min='0'
          max='99'
          defaultValue='0'
          onKeyPress={(e) => e.preventDefault()} // manual entry prohibition
        ></input>
      </td>
      <td className='table__item-cell'>Сумма: {sum}</td>
    </tr>
  );
}

export default TableSell;