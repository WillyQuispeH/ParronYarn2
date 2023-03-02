import React, {useState, createContext,useContext } from "react";




const ValorInicial ="-250px"
const ValorCero ="0px"
 const SBContext= React.createContext({});

const SBProvider = ({ children }:any) => {
  
  const [Active, SetActive] = useState( ValorInicial);
  const HanOnclick =()=>{

    if(Active === ValorInicial){
     SetActive(ValorCero)
    }
    else{
      SetActive(ValorInicial)
    }
    }
    
      

  

  return (
    <SBContext.Provider value={{Active,HanOnclick}}>
      {children}
    </SBContext.Provider>
  );
};
export {SBProvider, SBContext }
