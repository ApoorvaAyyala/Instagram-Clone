import React, { createContext, useState } from 'react'

export const AppContext = createContext()

function CustomContext({children}) {
  const [userId,setUserId] = useState("");
  const [userName,setName] = useState("");
  
  
  return (
        <AppContext.Provider value={{userId,setUserId,userName,setName}}>
                {children}
        </AppContext.Provider>
  )
}

export default CustomContext;
