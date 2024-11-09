import { WrapperStyled } from "@/styles/StyledComponent/WrapperStyled";
import React from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

interface wrapperProps {
  children: React.ReactNode;
}

const Wrapper = ({ children }: wrapperProps) => {
  return (
    <WrapperStyled>
      <Header />
      {children}
      <Footer />
    </WrapperStyled>
  );
};

export default Wrapper;
