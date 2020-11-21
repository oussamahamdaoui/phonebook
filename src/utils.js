const COLORS = [
  '#1abc9c',
  '#3498db',
  '#e74c3c',
  '#8e44ad',
  '#70a1ff',
  '#ff6b81',
  '#ffa502',
];

const API_URL = 'http://localhost:3001/api/';


const getRandomColor = () => COLORS[Math.floor(Math.random() * COLORS.length)];

const basePost = (baseUrl) => async (url, data) => {
  try {
    const resp = await fetch(new URL(url, baseUrl).href, {
      method: 'post',
      headers:{
          'Content-Type': 'application/json',
        },
      body: JSON.stringify(data),
    });
    return resp.json();
  } catch (e) {
    return {
      error: true,
      message: e,
    };
  }
};

const baseGet = (baseUrl) => async (url, token) => {
  try {
    const resp = await fetch(new URL(url, baseUrl).href, {
      method: 'GET',
    });
    return resp.json();
  } catch (e) {
    return {
      error: true,
      message: e,
    };
  }
};

const get = baseGet(API_URL);
const post = basePost(API_URL);

const PHONE_REGEX = /^\+[0-9]{2} [0-9]{2} [0-9]{6,}$/;

const isFormValid = (firstName='', lastName='', phoneNumber='') => {
  return !(firstName !== '' && lastName !== '' && phoneNumber.match(PHONE_REGEX));
};

export {
  getRandomColor,
  get,
  post,
  PHONE_REGEX,
  isFormValid
};