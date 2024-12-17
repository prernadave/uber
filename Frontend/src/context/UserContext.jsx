import React, { createContext, useContext } from 'react'
export const userContext=createContext()


function UserContext({children}) {
    
  return (
    <div>
       {children}
      
        </div>
  )
}

export default UserContext