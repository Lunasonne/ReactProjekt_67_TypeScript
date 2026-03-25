import { useState, createContext} from "react"; // ШАГ 1: импорт функции createContext из библиотеки React
import Button from "components/Button/Button";
import Section from "lessons/Lesson_14/components/Section/Section";
import { MainTitle, MainWrapper } from "./styles";
import { type UserData , type UserDataContext} from "./types";


// ШАГ 2: создаем контекст- глобальное хранилище данных, которое мы хотим передать вниз по дереву, 
// то есть все то, что находится в return компонента Main

export const MainContext = createContext<UserDataContext>({
  userData: undefined, // так как изначально по умолчанию обьект undefined
  setUserData: ()=> {}
});
 
 function Main() {
  const [userData, setUserData] = useState<undefined | UserData>(undefined);

  const getUserData = () => {
  // Предположим, что вы получили данные пользователя в константе userResponse, используя GET запрос по сети
    const userResponse: UserData = {
      fullName: "John Johnson",
      age: 30,
      jobPosition: "QA",
    };
    setUserData(userResponse);
  };

  return (
    // ШАГ 3: Обернуть все, что у нас в return, с помощью MainContext.Provider и передать в пропсу value,
    //  то что мы хотим передать компоненту Content
   <MainContext.Provider value = {{userData: userData, setUserData: setUserData }} >  
      <MainWrapper>
      <MainTitle>Main Component</MainTitle>
      <Button name="Get User Data" onClick={getUserData} />
      <Section  />
    </MainWrapper>
    </MainContext.Provider>
  );
}

export default Main;
