import {BrowserRouter, Route, Routes} from "react-router-dom" 
import GlobalStyles from "styles/GlobalStyles";
 import Home from "pages/EmployeeApp/Home/Home";
import About from "pages/EmployeeApp/About/About";
import LogIn from "pages/EmployeeApp/LogIn/LogIn";
import ContactUs from "pages/EmployeeApp/ContactUs/ContactUs";
import Clients from "pages/ClientsApp/Clients/Clients";
import Layout from "lessons/Lesson_15/components/Layout/Layout";
import Employee from "lessons/Lesson_15/components/CreateEmployee/Employee";
import Employees from "lessons/Lesson_15/components/Employees/Employees";

import Lesson_06 from "./lessons/Lesson_06/Lesson_06";
import Lesson_07 from "./lessons/Lesson_07/Lesson_07";
import Lesson_08 from "./lessons/Lesson_08/Lesson_08";
import Lesson_10 from "./lessons/Lesson_10/Lesson_10";
import Lesson_11 from "./lessons/Lesson_11/Lesson_11";
import Lesson_11_GroupProject from "lessons/Lesson_11/Lesson_11/Lesson_11_GroupProject";
import Lesson_12 from "./lessons/Lesson_12/Lesson_12";
import Lesson_14 from "./lessons/Lesson_14/Lesson_14";
import Lesson_15 from "./lessons/Lesson_15/components/Employees/Employees"
import Homework_06 from "./homeworks/Homework_06/Homework_06";
import Homework_07 from "./homeworks/Homework_07/Homework_07";
import Homework_08 from "./homeworks/Homework_08/Homework_08";
import Ecosia from "pages/ClientsApp/Ecosia/Ecosia";
import NationalGeographic from "pages/ClientsApp/NationalGeographic/NationalGeographic";
import GroveCollaborative from "pages/ClientsApp/GroveCollaborative/GroveCollaborative";

 
function App() {    
    return (
       <BrowserRouter>                
    <GlobalStyles/>   
    {/* <Layout> 
        <Routes >
            <Route path= "/"  element={<Home/>} />  
            <Route path = "/about" element={<About />}/> 
            <Route path = "/login" element ={<LogIn/>}/>
            <Route path = "/contactUs" element ={<ContactUs/>}/>
            <Route path = "/clients" element ={<Clients/>}/>

            <Route path="/clients" element={<Clients />} />
            <Route path="/clients/grove-collaborative" element={<GroveCollaborative/>} />
            <Route path="/clients/ecosia" element={<Ecosia/>} />
            <Route path="/clients/nationalgeographic" element={<NationalGeographic />} />
             <Route path = "*" element ={"Page Not Found"}/>
           </Routes>
    </Layout> */}
                    {/* <Homework_08/>  */}
                    {/* <Lesson_11_GroupProject/>*/}
                   {/* <Lesson_14/>    */}
 
         <Layout>
        <Routes>
           <Route path="/employees" element={<Employees />} />
          <Route path="/employee" element={<Employee />} />
        </Routes>
      </Layout>
    </BrowserRouter>
    );
}

export default App
