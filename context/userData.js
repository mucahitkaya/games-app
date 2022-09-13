import { createContext, useState } from "react";

const UserDatas = createContext({});

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

  const [users, setUsers] = useState({
    userName: "",
    password: "",
    time: `${getTime()}`,
  });
  const values = {
    users,
    setUsers,
  };

  return <UserDatas.Provider value={values}>{children}</UserDatas.Provider>;
}
export { UserDatasProvider, UserDatas };
