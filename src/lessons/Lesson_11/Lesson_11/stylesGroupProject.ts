import styled from "@emotion/styled";

export const PageWrapper = styled.section`
  display: flex;
  justify-content: center;
  height: 100vh;
  padding-top: 50px;
  //align-items: center;
  //flex: 1;
  background-color: azure;
`;

export const Card = styled.div`
  background-color: white;
  width: 960px;
  height: min-content;
  border-radius: 10px;
  border: 1px solid #000000;
  padding: 30px;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
`;

export const SearchForm = styled.form``;

export const GroupControl = styled.div`
  width: 350px;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const Error = styled.p`
  color: red;
`;

export const Universities = styled.ul`
  display: flex;
  flex-wrap: wrap;
  list-style: none;
  padding: 0;
  gap: 10px;
`;

export const UniversityCard = styled.li`
  flex: 0 0 calc(50% - 10px);
  padding: 10px;
  border-radius: 10px;
  border: 1px solid #000000;
`;

export const Text = styled.p`
 font-size: 18px;
  line-height: 1.2;
`;

export const TextBold = styled.span`
font-weight: bold;
`;