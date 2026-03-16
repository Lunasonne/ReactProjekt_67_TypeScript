import Button from "components/Button/Button";
 import { PageWrapper, ButtonControl, InfoWrapper } from "./styles";
import { useGoBack } from "components/hooks/useGoBack";


export default function GroveCollaborative() {
    const goBack = useGoBack();

  return (
     
       <PageWrapper>Information about the company Grove Collaborative:
      <InfoWrapper>  Grove Collaborative is a benefit corporation headquartered in San Francisco,
         with an additional office in Portland, Maine. The company produces and sells environmentally 
         friendly home and personal care products under the Grove Co. brand, as well as products from 
         other companies. It recycles as much plastic from the ocean as it produces, participates in 
         reforestation initiatives, and works to reduce its overall carbon footprint.
          The company also uses bamboo paper, a fast-growing resource that can be quickly replenished.
      </InfoWrapper>
      <ButtonControl>
        <Button onClick={goBack} name="Go back" />
      </ButtonControl>
          </PageWrapper>
        
  );
}