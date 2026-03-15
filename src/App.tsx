import {BrowserRouter, Route, Routes} from "react-router-dom" 
import Layout from "components/Layout/Layout";
import GlobalStyles from "styles/GlobalStyles";
import Home from "pages/EmployeeApp/Home/Home";
import About from "pages/EmployeeApp/About/About";
import LogIn from "pages/EmployeeApp/LogIn/LogIn";
import ContactUs from "pages/EmployeeApp/ContactUs/ContactUs";

import Lesson_06 from "./lessons/Lesson_06/Lesson_06";
import Lesson_07 from "./lessons/Lesson_07/Lesson_07";
import Lesson_08 from "./lessons/Lesson_08/Lesson_08";
import Lesson_10 from "./lessons/Lesson_10/Lesson_10";
import Lesson_11 from "./lessons/Lesson_11/Lesson_11";
import Lesson_11_GroupProject from "lessons/Lesson_11/Lesson_11/Lesson_11_GroupProject";
import Lesson_12 from "./lessons/Lesson_12/Lesson_12";

import Homework_06 from "./homeworks/Homework_06/Homework_06";
import Homework_07 from "./homeworks/Homework_07/Homework_07";
import Homework_08 from "./homeworks/Homework_08/Homework_08";

 
function App() {    // BrowserRouter хранит state с актуальным путем и подписан на изменения URL, он слушает события и когда URL меняется он предоставляет его дочерним Routes
                    // потом Routes получает новый location, так как он подписан на BrowserRouter, сравнивает path и решает, какой Route показывать и выбирает элемент  
    return (
       <BrowserRouter>                
    <GlobalStyles/>   
    <Layout> 
        <Routes >
            <Route path= "/"  element={<Home/>} />   {/* "/" корневой URL сайта (root path). */}
            <Route path = "/about" element={<About />}/> 
            <Route path = "/login" element ={<LogIn/>}/>
            <Route path = "/contactUs" element ={<ContactUs/>}/>
            <Route path = "*" element ={"Page Not Found"}/>
        </Routes>
    </Layout>
                    {/* <Homework_08/>  */}
                    {/* <Lesson_11_GroupProject/>*/}
                    {/* <Lesson_12/>  */}
    </BrowserRouter>
    );
}

export default App
