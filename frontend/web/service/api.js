import Cookie from 'js-cookie';
import axios from 'axios';

{/*
async function getAppToken() {
  console.log(process.env.BASE_URL)
  const currentToken = Cookie.get('APP_TOKEN');
  if (!currentToken) {
    const getToken = await axios.post(
      `${process.env.BASE_URL}/oauth/token`,
      {
        client_id: process.env.CLIENT_ID,
        client_secret: process.env.CLIENT_SECRET,
        grant_type: process.env.GRANT_TYPE
      },
      {
        headers: {
          'Content-Type': 'application/json'
        }
      }
    );
    const { access_token } = await getToken.data;
    if (access_token) {
      Cookie.set('APP_TOKEN', access_token, { expires: 364 });
      return access_token;
    }
  } else {
    return currentToken;
  }
}
*/ }
const api = axios.create({
  baseURL: `${process.env.BASE_URL}`,
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json'
  }
});

{/*api.interceptors.request.use(
  async function(config) {
    const appToken = await getAppToken();
    if (config.clientToken) {
      config.headers['X-Client-Token'] = config.clientToken;
    }
    if (appToken) {
      config.headers['Authorization'] = `Bearer ${appToken}`;
    }

    return config;
  },
  function(error) {
    return Promise.reject(error);
  }
);
*/ }
export default api;
