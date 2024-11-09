import { WrapperStyled } from "@/styles/StyledComponent/WrapperStyled";
import React from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Head from "next/head";

interface wrapperProps {
  children: React.ReactNode;
}

const Wrapper = ({ children }: wrapperProps) => {
  return (
    <WrapperStyled>
      <Head>
        <title>Online Shopping</title>
        <link rel="shortcut icon" href="online.ico" type="image/x-icon" />
      </Head>
      <Header />
      {children}
      <Footer />
    </WrapperStyled>
  );
};

export default Wrapper;
