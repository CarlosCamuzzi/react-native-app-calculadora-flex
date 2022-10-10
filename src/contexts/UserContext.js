import React, { createContext, useState } from "react";

export const UserContext = createContext();

const UserProvider = ({ children }) => {

  const [signed, setSigned] = useState(false);
  const [name, setName] = useState(false);
  return (
    <UserContext.Provider>
      value={{
        signed,
        setSigned,
        name, 
        setName
      }}
      {children}  
    </UserContext.Provider>
  );
}

export default UserProvider;