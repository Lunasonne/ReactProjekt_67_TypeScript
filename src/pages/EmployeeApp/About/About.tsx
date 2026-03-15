import Button from "components/Button/Button";
import { useNavigate } from "react-router-dom";
import { PageWrapper, ButtonControl } from "./styles";
import { useEffect } from "react";
 
function About() {
  const navigate = useNavigate();

  const goToPage = ()=>{navigate("/")};
  const goBack = ()=>{navigate (-1)};
   
  useEffect(() => {
    // Unmounting
    return () => {
      console.log("Page About UNMOUNTING")
    }
  }, [])

  return (
    <PageWrapper>
      Information about company
      <ButtonControl>
        <Button onClick={goBack} name="Go back" />
      </ButtonControl>
      <ButtonControl>
        <Button onClick={goToPage} name="Go to Home page" />
      </ButtonControl>
    </PageWrapper>
  );
}

export default About;
