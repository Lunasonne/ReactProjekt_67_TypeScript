import Button from "components/Button/Button";
import { PageWrapper, ButtonControl, InfoWrapper } from "./styles";
import { useGoBack } from "components/hooks/useGoBack";

export default function Ecosia() {
   
  const goBack = useGoBack();

  return (
     
       <PageWrapper>Information about the company Ecosia: 
        <InfoWrapper> Ecosia is an environmentally focused tech company and search engine founded in
           Germany. Its main goal is to use revenue from internet searches to support environmental 
           protection and tree planting.Ecosia provides a search engine similar to Google.
            When users search online, the company earns revenue from ads and
             affiliate links, part of which is used to fund environmental projects. About 80% of
              profits go directly to tree planting. The company also publishes transparent financial reports showing how funds are spent.
Search results are partly provided by Google and Bing, and Ecosia invests in forest restoration projects 
worldwide. Its servers run on renewable energy, and the company aims to reduce CO₂ emissions while 
supporting environmental initiatives. </InfoWrapper>  
      <ButtonControl>
        <Button onClick={goBack} name="Go back" />
      </ButtonControl>
          </PageWrapper>
        
  );
}