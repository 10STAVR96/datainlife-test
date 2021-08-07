import { setGoods } from '../reducers/goodsReducer';
import axios from 'axios';

export const getGoods = () => async dispatch => {
  try {
    const res = await axios.get('https://datainlife.ru/junior_task/get_products.php', {
      headers: {
        'Content-Type': 'application/json',
      }
    });
    dispatch(setGoods(res.data));
  } catch (e) {
    console.log(e);
  }
};