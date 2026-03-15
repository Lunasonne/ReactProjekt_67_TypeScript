import styled from "@emotion/styled";
import { NavLink, type NavLinkRenderProps, Link } from "react-router-dom";

export const LayoutWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`;

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 100px;
  border-bottom: 1px solid black;
  background-color: rgba(1, 10, 65, 0.9);
  padding: 20px 40px;
  color: white;
`;

export const Logo = styled.div`
  height: 100%;
  width: 80px;
  cursor: pointer;
`;

export const LogoImg = styled.img`
  width: 100%;
  height: 100%;
`;

export const NavigationContainer = styled.nav`
  display: flex;
  gap: 30px;
  height: 100%;
  align-items: center;
`;

export const HeaderLink = styled(NavLink)` // берется компонент NavLink из React Router, добавляется к нему css и создается новый компонент HeaderLink
  font-size: 20px;
  font-weight: normal;
  text-decoration: none;
  color: white;
`;

export const Main = styled.main`
  display: flex;
  flex: 1;
  padding: 40px;
`;

export const Footer = styled.footer`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 150px;
  border-top: 1px solid black;
  background-color: rgba(0, 10, 66, 0.9);
  padding: 20px 40px;
  color: white;
`;

export const FooterLogo = styled.div`
  height: 80px;
  width: 80px;
  cursor: pointer;
`;

export const FooterNavigation = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const FooterLink = styled(Link)`
  color: white;
  font-size: 14px;
  font-weight: bold;
`;
 export const getActiveStyles = ({ isActive }: NavLinkRenderProps) => ({
  fontWeight: isActive ? "bold" : "normal",
  textDecoration: isActive ? "underline" : "none",
}); 
// NavLink — это расширенная версия Link. Он дает isActive из библиотеки React Router.
// NavLink проверяет, совпадает ли текущий URL с to. Если совпадает → ссылка активная.
// Эта информация передаётся в функцию style или className через объект: { isActive: boolean}
//  NavLink внутри использует Link, просто добавляет логику проверки isActive.
// Link → просто ссылка, NavLink → ссылка + определяет активную страницу