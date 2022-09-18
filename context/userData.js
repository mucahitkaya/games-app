import { createContext, useState } from "react";

const UserDatas = createContext({
  token: "",
  isAuthenticated: false,
  authenticate: (token) => {},
  logout: () => {},
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
  };

  return <UserDatas.Provider value={values}>{children}</UserDatas.Provider>;
}
export { UserDatasProvider, UserDatas };
