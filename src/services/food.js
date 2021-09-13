import axios from 'axios';
const baseUrl = 'https://foodish-api.herokuapp.com/api';

export default {
  async getFood(category) {
    const { data } = await axios.get(`${baseUrl}/images/${category}`);
    return data;
  }
};
