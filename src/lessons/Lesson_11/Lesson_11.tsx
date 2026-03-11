import axios from "axios";
import Button from "components/Button/Button";
import {useState} from "react";
import { type University} from "./data.ts";
 import {
  PageWrapper,
  Label,
  Card,
  ErrorText,
  EmptyText,
  Input,
  Title,
  Link,
  UniversityCard,
  CardsContainer,
  CountryText
} from "./styles";


function Lesson_11() {
 
const UNIVERSITIES_URL =  "http://universities.hipolabs.com/search?country=";
const [country, setCountry] = useState<string>("");
const [universities, setUniversities] = useState<University[]>([]);
const [error, setError] = useState<string | undefined>(undefined);
const [isLoading, setIsLoading] = useState<boolean>(false);

const onCountry = (event: React.ChangeEvent<HTMLInputElement>) =>
            setCountry(event.target.value)

 const getUniversities = async () => {
    // setUniversities([])
    setError(undefined);
    setIsLoading(true);

    try {
      const response = await axios.get(`${UNIVERSITIES_URL}${country}`);
      const data = response.data.slice(0, 15);  

      const result: University[] = data.map((u: any) => ({
        name: u.name,
        country: u.country,
        webPages: u.web_pages,
      }));
      setUniversities(result);

    } catch (error) {
      setError("Some Network Error");
    } finally {
      setIsLoading(false);
    }
  };

  
// пробегаем столько раз сколько кусочкв в массиве. если первые 15м равны тому, что ищем, то производим поиск
// после того как сравниили последний то если в ретерн не попали и нет совпадений то вернем первый кусочек
   return (
    <PageWrapper>
      <Card>
            <Label> Country
        <Input
          placeholder= "Enter Country for searching uneversities"
          value= {country}
          onChange= {onCountry}
        />
</Label>
        <Button
          onClick= {getUniversities}
          disabled= {isLoading || !country}
          name= "Get Universities"
           />   
    
        {!!error && <ErrorText>{error}</ErrorText>}

          {!error && universities.length === 0 && country && (
          <EmptyText>No Universities by your request</EmptyText>
        )}

         <CardsContainer>
          {universities.map((uni) => (
            <UniversityCard key={uni.name}>
              <Title>{uni.name}</Title>
              <CountryText>{uni.country} </CountryText>
              <Link   href={uni.webPages[0]} target="_blank">
                      {uni.webPages[0]}
              </Link>
            </UniversityCard>
          ))}
        </CardsContainer>
      </Card>
    </PageWrapper>
  );
}
export default Lesson_11;

