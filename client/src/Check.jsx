import React, { useContext } from 'react'
import CustomContext, { AppContext } from './CustomContext';


function Check() {
    const a = useContext(AppContext);

  return (
     <CustomContext>
     <button onClick={()=>{
        console.log(a);
     }}>click here</button>
     </CustomContext>
  )
}

export default Check