import { ContentInfo, ContentTitle, ContentWrapper } from "./styles";
import Button from "components/Button/Button";
// ШАГ 4: импортируем хук useContext из библиотеки Реакт
import { useContext} from "react";
// ШАГ 5: импортируем, созданный нами в компаненте Main контекст MainContext
import {MainContext} from "lessons/Lesson_14/components/Main/Main";

function Content() {
  // ШАГ 6: получить доступ к данным, хранящимся в контексте:
  const {userData, setUserData } = useContext(MainContext);

   const deleteUser = () => {
    setUserData(undefined);
  };
  
  return (
    <ContentWrapper>
      <ContentTitle>Content Component</ContentTitle>
   {/* Если userData === undefaind, то выраженние userData.fullName выдаст ошибку, т.к в таком случае 
   у нас получается следующая операция  undefined.fullName- а undefined не может содержать в себе что то,
  это не обьект. Поэтому нам нужно сделать проверку, если userData === undefined, то мы скрываем ContentInfo,
  иначе если  userData равен ожидаемому обьекту, то мы ContentInfo показываем
      */}
   {!!userData && (
    <> 
    <ContentInfo> FullName: {userData.fullName}</ContentInfo>
      <ContentInfo>Age: {userData.age}</ContentInfo>
      <ContentInfo>Job: {userData.jobPosition}</ContentInfo>
    </>
   )   }
     
      <Button name="Delete user" onClick={deleteUser} />
    </ContentWrapper>
  );
}
export default Content;
