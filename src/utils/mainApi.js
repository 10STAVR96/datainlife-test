import axios from "axios";

export const addToBasket = async (goods) => {
  try {
    const formData = new FormData();
    for (let key in goods) {
      formData.append(`${key}`, goods[key]);
    }
    const res = await axios.post('https://datainlife.ru/junior_task/add_basket.php', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
    console.log(res.data);
  } catch (e) {
    console.log(e);
  }
}