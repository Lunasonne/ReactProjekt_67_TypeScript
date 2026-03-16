import {  ClientsWrapper, CompanyPage, CompaniesGrid,CompanyCard,CompanyLogo,CompanyName} from "./styles";
import  {HeaderLink, getActiveStyles}  from "components/Layout/styles";
 

function Clients() {
  return <ClientsWrapper>
      <CompanyPage> Clients page  </CompanyPage>   

 <CompaniesGrid>
        <CompanyCard>
        
          <HeaderLink style={getActiveStyles} to="/clients/ecosia">
            <CompanyLogo
              src="ecossia.png"
              alt="Ecosia Logo"
            />
            <CompanyName>Ecosia</CompanyName>
          </HeaderLink>
         
        </CompanyCard>

        <CompanyCard>
          <HeaderLink style={getActiveStyles} to="/clients/grove-collaborative">
            <CompanyLogo
              src="GroveFoto.png"
              alt="Grove Logo"
            />
            <CompanyName>Grove Collaborative</CompanyName>
          </HeaderLink>
        </CompanyCard>

        <CompanyCard>
          <HeaderLink style={getActiveStyles} to="/clients/nationalgeographic">
            <CompanyLogo
              src="NG.webp"
              alt="National Geographic Logo"
            />
            <CompanyName>National Geographic</CompanyName>
          </HeaderLink>
        </CompanyCard>
      </CompaniesGrid>

  </ClientsWrapper>;
}

export default Clients;
