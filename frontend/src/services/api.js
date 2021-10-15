import axios from "axios";
// import { store } from '../store';
// import { refreshToken, signOutRequest } from '../store/modules/auth/actions';

require("dotenv/config");

const api = axios.create({
  baseURL: process.env.REACT_APP_URL_SERVER,
});

// api.interceptors.response.use(
//   response => {
//     return response;
//   },
//   err => {
//     const originalReq = err.config;

//     const storage = JSON.parse(localStorage.getItem('persist:beefSystem'));
//     const auth = JSON.parse(storage.auth);
//     const { signed, tokens, farm_id } = auth;

//     if (signed) {
//       const currentTime = new Date().getTime();

//       if (
//         !tokens ||
//         !tokens.refresh_token ||
//         !err.response ||
//         tokens.expire_at < currentTime
//       ) {
//         store.dispatch(signOutRequest());
//       }

//       if (
//         err.response.status === 401 &&
//         tokens.expire_at >= currentTime &&
//         err.config &&
//         !err.config.__isRetryRequest
//       ) {
//         originalReq._retry = true;

//         const res = fetch(
//           `${process.env.REACT_APP_URL_SERVER}v1/sessions/refresh`,
//           {
//             method: 'POST',
//             mode: 'cors',
//             cache: 'no-cache',
//             credentials: 'same-origin',
//             headers: {
//               'Content-Type': 'application/json',
//               Token: tokens.token,
//               FARM: farm_id,
//             },
//             redirect: 'follow',
//             referrer: 'no-referrer',
//             body: JSON.stringify({
//               refresh_token: tokens.refresh_token,
//             }),
//           }
//         )
//           .then(res => res.json())
//           .then(res => {
//             store.dispatch(refreshToken(res));
//             originalReq.headers.Authorization = `Bearer ${res.token}`;
//             originalReq.headers.FARM = farm_id;
//             api.defaults.headers.Authorization = `Bearer ${res.token}`;
//             api.defaults.headers.FARM = farm_id;

//             return axios(originalReq);
//           });

//         return res;
//       }
//     }

//     return Promise.reject(err);
//   }
// );

export default api;
