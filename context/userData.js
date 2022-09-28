import { createContext, useState } from "react";

export const UserDatas = createContext({
  token: "",
  isAuthenticated: false,
  authenticate: (token) => {},
  logout: () => {},
  newWord: "",
});

function UserDatasProvider({ children }) {
  function getTime() {
    //There is a better code version of this but i wanted to see like this
    //date
    const date = new Date();
    const day = date.getDate();
    const month = date.getMonth() + 1;
    //   const year = date.getFullYear();
    //time
    const hour = date.getHours();
    const minute = date.getMinutes();
    //   const second = date.getSeconds();
    const nowDateandTime = `${day}-${month}/${hour}-${minute}`;
    return nowDateandTime;
  }

  const [authToken, setAuthToken] = useState();
  const [wordsList, setWordsList] = useState([]);
  function authenticate(token) {
    setAuthToken(token);
  }

  function logout() {
    setAuthToken(null);
  }

  const [users, setUsers] = useState({
    userName: "",
    password: "",
    time: `${getTime()}`,
  });

  const values = {
    users,
    setUsers,
    token: authToken,
    isAuthenticated: !!authToken,
    authenticate: authenticate,
    logout: logout,
    wordsList: wordsList,
    getTime: getTime,
  };

  return <UserDatas.Provider value={values}>{children}</UserDatas.Provider>;
}
export default UserDatasProvider;
