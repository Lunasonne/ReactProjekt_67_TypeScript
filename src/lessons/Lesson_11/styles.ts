import styled from "@emotion/styled";
 
export const PageWrapper = styled.div`
  min-height: 100vh;
  display: flex;
  justify-content: center;
  padding: 40px;
  background-color: #f2f2f2;
  
`;
 export const Label = styled.label`
  font-weight: 600;
`;
export const Card = styled.div`
  width: 600px;
  max-width: 90%;
  background-color: #ffffff;
  padding: 30px;
  border-radius: 12px;
`;
export const EmptyText = styled.p`
  color: gray;
`;
 export const Title = styled.h3`
  margin: 0 0 5px 0;
`;
export const Input = styled.input<{ label?: string }>`
  width: 100%;
  padding: 10px 14px;
  margin-bottom: 20px;
  border-radius: 8px;
  border: 1px solid #ccc;
  font-size: 16px;
  box-sizing: border-box;

  &:focus {
    outline: none;
    border-color: #0077ff;
    box-shadow: 0 0 5px rgba(0, 119, 255, 0.3);
  }
`;

 export const CardsContainer = styled.div`
  display: grid;
  gap: 10px;
  margin-top: 20px;
`;
export const Text = styled.div`
  font-size: 16px;
  margin-bottom: 6px;
  word-break: break-word;

  a {
    color: #0077ff;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }
`;

export const ErrorText = styled.div`
  color: #ff4d4f;
  font-weight: 600;
  margin-top: 20px;
`;

export const CountryText = styled.p`
  margin: 0 0 5px 0;
`;
export const UniversitiesContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-top: 20px;
`;

 
export const UniversityCard = styled.div`
  padding: 15px 20px;
  border-radius: 10px;
  background-color: #f9f9f9;
  border: 1px solid #e0e0e0;
  transition: box-shadow 0.2s;

  &:hover {
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  }
`;
export const Link = styled.a`
  color: blue;
`;