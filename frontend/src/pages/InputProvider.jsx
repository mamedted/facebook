import { createContext, useState } from "react";

export const inputContext = createContext();

export default function UserProvider({ children }) {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [birthday, setBirthday] = useState("2000-01-01");
  const [gender, setGender] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [code, setCode] = useState("");
  return (
    <inputContext.Provider
      value={{
        firstname,
        setFirstname,
        lastname,
        setLastname,
        birthday,
        setBirthday,
        gender,
        setGender,
        email,
        setEmail,
        password,
        setPassword,
        code,
        setCode
      }}
    >
      {children}
    </inputContext.Provider>
  );
}
