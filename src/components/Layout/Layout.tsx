import { useNavigate } from "react-router-dom";
import {
  LayoutWrapper,
  Header,
  Main,
  Footer,
  Logo,
  LogoImg,
  HeaderLink,
  NavigationContainer,
  FooterLogo,
  FooterLink,
  FooterNavigation,
   getActiveStyles
} from "./styles";
import { type LayoutProps } from "./types";

const navigate = useNavigate() // Хук useNavigate() из React Router нужен для программного перехода между страницами.
                                // То есть переход происходит не по клику на ссылку, а из кода. Вв нашем случае по клику на картинку
const goToHomePage = ()=>{navigate("/")};

function Layout({ children }: LayoutProps) {


  return (
    <LayoutWrapper>
      <Header>
         <Logo onClick={goToHomePage}>
          <LogoImg
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxOGDYH2tzlcwZSDpjg0qRGgEHAxVhsKHFUg&s"
            alt="Logo"
          />
        </Logo>
        <NavigationContainer>    
          <HeaderLink style={getActiveStyles}  to = "/">Home </HeaderLink>
          <HeaderLink style={getActiveStyles} to = "/сontactUs"> Contact Us </HeaderLink>
          <HeaderLink style={getActiveStyles} to = "/about"> About </HeaderLink>
          <HeaderLink style={getActiveStyles} to = "/login"> Login</HeaderLink>
        </NavigationContainer>
      </Header>
{/* HeaderLink = styled(NavLink) 
 NavLink ловит событие onClick, отменяет обычный переход браузера (preventDefault()) и отправляет новый путь в Router  */}
     
      <Main>{children}</Main>

      <Footer>
        <FooterLogo onClick={goToHomePage}>
          <LogoImg
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxOGDYH2tzlcwZSDpjg0qRGgEHAxVhsKHFUg&s"
            alt="Logo"
          />
        </FooterLogo >
        <FooterNavigation>
           <FooterLink to = "/">Home </FooterLink>
          < FooterLink to = "/ContactUs"> Contact Us </FooterLink>
          <FooterLink to = "/about"> About </FooterLink>
          <FooterLink to = "/login"> Login</FooterLink>
        </FooterNavigation>
      </Footer>
    </LayoutWrapper>
  );
}

export default Layout;
