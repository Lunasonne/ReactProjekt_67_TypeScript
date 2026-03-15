// Шаги для использования Formik:
// 1. ИМПОРТИРУЕМ useFormik:
 import { useFormik  } from "formik"; // импорт по дефолту, так как не нужна вся библиотека. а только одна функция
 import * as Yup from "yup";
 
import Button from "components/Button/Button";
import Input from "components/Input/Input";
import { LoginFormContainer, InputsContainer, Title } from "./styles";
import {LOGIN_FORM_VALUES } from "./types.ts"

// валидаци с помощью yap (то есть проверка на соответствие требованиям)
const validationSchema = Yup.object().shape({ [LOGIN_FORM_VALUES.EMAIL]: Yup.string()
.required("Email field is required")
.email("This field should be in email format"),
 [LOGIN_FORM_VALUES.PASSWORD]: Yup.string()
    .required("Password field is required")
    .min(5, "Password field should contain min 5 characters")
    .max(20, "Password field should contain max 20 characters"),
});
function LoginForm() {
  // ШАГ2: СОЗДАЕМ СТЕЙТ ДЛЯ НАШЕГО ИНПУТА, чтобы его контролировать и иметь доступ к введенным пользователем данным
  // const [inputValue, setInputValue] = useState<string>("");

  // // ШАГ 3: СОЗДАЕМ ФУНКЦИЮ, которая будет выполнять на событие onChange
  // const onChangeInputValue = (event: ChangeEvent<HTMLInputElement>) => {
  //   setInputValue(event.target.value);
  // };
  // console.log(inputValue)


  // Это старый код, который мы написали без использования Formik и Yup:
  // const [email, setEmail] = useState<string>("");
  // const [password, setPassword] = useState<string>("");

  // const changeEmail = (event: ChangeEvent<HTMLInputElement>) => {
  //   setEmail(event.target.value);
  // };

  // const changePassword = (event: ChangeEvent<HTMLInputElement>) => {
  //   setPassword(event.target.value);
  // };

  // console.log(email, password);

  // const login = (event: any) => {
  //   event.preventDefault();
  //   console.log("Email", email);
  //   console.log("Password", password);
  // };

/////////////////////////////////////////////////////////// 
//  шаг 2 - создаем обьект formik
// useFormik - функция xук, которая возвращает обьект, в котором прописаны необходимые данные о форме и вспомогательные функции
// useFormik принимает в качестве аргумента обьект, этот аргумент является обязательным и нужен
//   для настройки обьекта, который возвращает хук useFormik
// обьект, который мы передаем useFormik имеет 2 обязательных ключа:
  // 1. initialValues - значения элементов формы по умолчанию, принимает в качетсве значения обьект:
  //       - в качестве ключа у нас выступает значение атрибута name в элементах формы
  //       - в качестве значения ключа, мы прописываем значения по умолчанию, которые должны быть у элементов формы
  // 2. onSubmit - эта функция, которая вызывается на событие submit (при клике на кнопку с типом submit)

const formik = useFormik( {  // можно посмотреть в консоле что это за обьект Formik_ если сделать console.log (formik)
    initialValues: {        // принимает аргумент- один объект конфигурации, который позволяет создать настройки, которые подходят конкретно под нашу форму и возвращает обьект
   [LOGIN_FORM_VALUES.EMAIL]: "", // у этого обьекта обязательные ключи: initialValues (требует в качестве значения обьект по количеству элементов формы-по колич инпутов в которые что то вводит пользователь) и второй ключ onSubmit, требующий функцию обратного вызова
   [LOGIN_FORM_VALUES.PASSWORD]: "",
    },                               // в этих ключах значения по умолчанию и не путать с тем, что в атрибуте значения в инпуте это то что введет пользователь
    validationSchema: validationSchema,
    validateOnChange: false,
 onSubmit: (values, helpers)=>{console.log("Formik submit event works!"); // вызывается при нажатии на кнопку
  console.log(values)
  console.log(helpers) 
  helpers.resetForm()
}      // helpers- обьект со вспомогательными функциями, которую мы можем использовать во время события submit,
 } );  // например,  helpers.resetForm() очищает форму от значений 
       // эта функция вызывается когда нажимаем на кнопку

 console.log(formik);
  return (
    // Formik.handlSubmit мы прписываем для того, чтобы когда мы нажали на кнопку с type="submit", у нас вызывалась функция
    // которую мы прописали в onSubmit
    <LoginFormContainer onSubmit={formik.handleSubmit}>
      <Title>Login form</Title>
      <InputsContainer>
        <Input
          id="email-id"
          name={LOGIN_FORM_VALUES.EMAIL}
      //  type="email" - здесь стандартная браузерная валидация, если ее добавить то она будет показывать сообщение                     
          placeholder="Enter your email"
          label="Email"
          // formik.values.email мы прописываем, чтобы элемент формы получил значение, которое пользователь вводит с клавиатуры
          value={formik.values[LOGIN_FORM_VALUES.EMAIL]}
           onChange={formik.handleChange}      
           error={formik.errors[LOGIN_FORM_VALUES.EMAIL]}                          
          />
        <Input
          id="password-id"
          name= {LOGIN_FORM_VALUES.PASSWORD}
       // type="password"
          placeholder="Enter your password"
          label="Password"
          value={formik.values[LOGIN_FORM_VALUES.PASSWORD]}
          onChange={formik.handleChange }
          error={formik.errors[LOGIN_FORM_VALUES.PASSWORD]} 
        />
        {/* <input          в Formik такой контроль элементов уже не нужен, а formik.handleChange нужен 
          placeholder="Enter something"
          onChange={onChangeInputValue}
          value={inputValue} /> */}
       
      </InputsContainer>
      <Button name="Login" type="submit" />
    </LoginFormContainer>
  );
}
export default LoginForm;
