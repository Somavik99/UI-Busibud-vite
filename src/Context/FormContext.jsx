import React, { createContext, useState, useEffect } from "react";

export const FormProvider = createContext({});

const FormContext = ({ children }) => {
    
  const [PageNo, setPageNo] = useState(0);
  const [FormInputVal, setFormInputVal] = useState({
    user: "",
    email: "",
    Pass: "",
    PhN: "",
    cPass: "",
    Count: "",
    stat: "",
    cit: "",
    street: "",
  });
  return <FormProvider.Provider value={{}}>{children}</FormProvider.Provider>;
};

export default FormContext;
