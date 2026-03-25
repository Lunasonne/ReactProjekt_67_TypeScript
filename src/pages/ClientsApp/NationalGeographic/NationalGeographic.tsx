import { PageWrapper, ButtonControl,  InfoWrapper, CompanyLink  } from "./styles";
import Button from "components/Button/Button";
import { useGoBack } from "components/hooks/useGoBack";
 

export default function NationalGeographic() {
    const goBack = useGoBack();

  return (
       <PageWrapper>Information about the company National Geographiс:
       <InfoWrapper> It is a world-renowned organization that conducts scientific research, promotes 
        science, and develops educational projects and media. It combines science, education, and media 
        to showcase the beauty of nature and the cultural diversity of the planet. 
        It publishes the National Geographic magazine, famous for its photographs and articles about 
        nature and travel. It produces documentary films, TV programs, and educational content.
        It supports scientific expeditions and research around the world.
     </InfoWrapper>
<CompanyLink  href="https://www.nationalgeographic.com/"  target="_blank" >
   National Geographiс website
      </CompanyLink>

      <ButtonControl>
        <Button onClick={goBack} name="Go back" />
      </ButtonControl>
          </PageWrapper>
        
  );
}