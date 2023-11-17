import { Link } from "react-router-dom";
import styled from "styled-components";

export const NavigationContainer = styled.div`
  height: 70px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 25px;
`;

export const LogoContainer = styled(Link)`
  height: 100%;
  padding: 25px;
  width: 70px;
`;

export const NavLinks = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

export const Navlink = styled(Link)`
  padding: 10px 15px;
  cursor: pointer;
`;

export const Userlink = styled.span`
  display: "inline-block";
  width: "30px";
  height: "30px";
  border-radius: "50%";
  background-color: "#007bff"; // You can customize the background color
  color: "#fff"; // You can customize the text color
  text-align: "center";
  line-height: "30px";
  margin-right: "10px"; // Adjust the spacing as needed
  padding: 10px 15px;
  cursor: pointer;
`;
