import axios from "axios";

//buraya urli değişken olarak koy push atmadan önce kaldır
const BACKEND_URL = "31";

export function storeWordsList(newWords) {
  axios.post(`${BACKEND_URL}/newWords.json`, newWords);
}

export async function fetchWords() {
  const response = await axios.get(`${BACKEND_URL}/newWords.json`);

  console.log(response.data);
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
