import {
  Footer,
  FooterLink,
  FooterNavigation,
  getActiveStyles,
  Header,
  HeaderLink,
  LayoutWrapper,
  Logo,
  LogoImg,
  Main,
  NavigationContainer,
} from "./styles.ts";
import terraform from "assets/icons/Terraform-Icon--Streamline-Svg-Logos.svg";
import { useState } from "react";
import { MainContext } from "./context.ts";
import { type EmployeeData, type LayoutProps } from "./types.ts";

export default function Layout({ children }: LayoutProps) {
  const [employeeData, setEmployeeData] = useState<EmployeeData[]>([]);
  return (
    <MainContext.Provider
      value={{ employeeData, fetchEmployeeData: setEmployeeData }}
    >
      <LayoutWrapper>
        <Header>
          <Logo onClick={() => {}}>
            <LogoImg src={terraform} alt="Logo" />
          </Logo>
          <NavigationContainer>
            <HeaderLink style={getActiveStyles} to="/employee">
              Create Employee
            </HeaderLink>
            <HeaderLink style={getActiveStyles} to="/employees">
              Employees
            </HeaderLink>
          </NavigationContainer>
        </Header>
        <Main>{children}</Main>
        <Footer>
          <FooterNavigation>
            <FooterLink to="/employee">Create Employee</FooterLink>
            <FooterLink to="/employees">Employees</FooterLink>
          </FooterNavigation>
        </Footer>
      </LayoutWrapper>
    </MainContext.Provider>
  );
}
