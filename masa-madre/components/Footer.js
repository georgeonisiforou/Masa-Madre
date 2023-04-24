import React from "react";
import styled from "styled-components";
import { AiOutlineInstagram } from "react-icons/ai";
import Link from "next/link";

const Container = styled.div`
  width: 100%;
  height: 300px;
  display: flex;
  justify-content: center;

  background-color: var(--comp-color);
  padding: 32px;
`;

const ContainerInner = styled.div`
  display: flex;
  max-width: 1140px;
  width: 800px;
  justify-content: space-between;
  align-items: center;
`;

const SocialContainer = styled(Link)`
  display: flex;
  transition: all 0.2s linear;

  &:hover {
    color: var(--accent-color);
  }
`;

const InstaIcon = styled(AiOutlineInstagram)`
  width: 40px;
  height: 40px;
`;

const CopyrightSection = styled.div``;

const MainSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
`;

const Footer = () => {
  const currentDate = new Date().getFullYear();
  return (
    <>
      <Container>
        <ContainerInner>
          <MainSection>
            dfgfdgfddhdhdhf
            <CopyrightSection>{`Copyright © ${currentDate}`}</CopyrightSection>
          </MainSection>
          <SocialContainer href="/">
            <InstaIcon />
          </SocialContainer>
        </ContainerInner>
      </Container>
    </>
  );
};

export default Footer;
