import styled from "@emotion/styled";


export const CompanyPage = styled.div`
  font-size: 40px;
  font-weight: bold;
  color: #0a0909;
`;

export const ClientsWrapper = styled.div`
  padding: 40px;
 display: flex;
  flex-direction: column;
  align-items: center;
`;

export const CompaniesGrid = styled.div`
  display: flex;
  gap: 80px;
  flex-wrap: wrap;
   margin-top: 60px;
`;

export const CompanyCard = styled.div`
  display: flex;
  text-align: center;
  flex-direction: column;
   align-items: center; 
   width: 200px;
   margin-bottom: 30px;

      
  transition: transform 0.2s;
  &:hover {
    transform: scale(1.2);
  }
`;

export const CompanyLogo = styled.img`
  width: 100px;
  margin-bottom: 30px;
`;

export const CompanyName = styled.span`
  font-size: 20px;
  color: #333;
      
   white-space: nowrap; 
  width: 100%;  
`;

export const EcosiaName = styled(CompanyName)`
    display: block;  
  margin-top:8px;
`;