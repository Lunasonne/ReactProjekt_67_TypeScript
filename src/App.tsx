import GlobalStyles from "styles/GlobalStyles";
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
import Homework_12 from "homeworks/Homework_12/Homework_12";
 
function App() {
   
    return (
    <> 
    <GlobalStyles/>   
         {/* Homeworks */}
                    {/* <Homework_06/> */}
                    {/* <Homework_07/> */}
                    <Homework_12  />  
                       
         {/* Lessons  */}
                  {/* <Lesson_06/> */}
                  {/* <Lesson_07/> */}
                   {/* <Lesson_08/>  */}
                  {/* <Lesson_11/>   
                    <Lesson_11_GroupProject/>*/}
                     {/* <Lesson_12/>  */}
    </>
    );
}

export default App
