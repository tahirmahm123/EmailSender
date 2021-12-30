import axios from 'axios';

axios.defaults.baseURL = 'https://email-sender-by-tak.herokuapp.com/';
// axios.defaults.baseURL = 'http://127.0.0.1:1337/';
//process.env.REACT_APP_API_URL;

//   constructor() {
//     // let token = localStorage.getItem("token");
//     // if (token !== null) {
//     //     axios.defaults.headers.common["Authorization"] = "Bearer " + token;
//     // }
//   }
const _get = <T>(url: string) =>
  new Promise<T[]>((resolve, reject) => {
    axios
      .get<T[]>(url)
      .then((res: any) => {
        resolve(res.data);
      })
      .catch((err: any) => {
        reject(err);
      });
  });
const _post = (url: string, data: any) =>
  new Promise((resolve, reject) => {
    axios
      .post(url, data)
      .then((res: any) => {
        resolve(res.data);
      })
      .catch((err: any) => {
        reject(err);
      });
  });
const _delete = (url: string) =>
  new Promise((resolve, reject) => {
    axios
      .delete(url)
      .then((res: any) => {
        resolve(res.data);
      })
      .catch((err: any) => {
        reject(err);
      });
  });
const _put = (url: string, data: any) =>
  new Promise((resolve, reject) => {
    axios
      .put(url, data)
      .then((res: any) => {
        resolve(res.data);
      })
      .catch((err: any) => {
        reject(err);
      });
  });
export { _get, _put, _post, _delete };
