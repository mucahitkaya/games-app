import axios from "axios";

//buraya urli değişken olarak koy push atmadan önce kaldır
const BACKEND_URL = "asdsd";

export function storeUserData(userData) {
  axios.post(`${BACKEND_URL}/users.json`, userData);
}

// export async function fetchUsers() {
//   const response = await axios.get(BACKEND_URL + "/users");

//   const users = [];
//   for (const key in response.data) {
//     const userObj = {
//       id: key,
//       userName: response.data[key].userName,
//       password: response.data[key].password,
//       time: response.data[key].time,
//     };
//   }
// }
