import React from "react";
import styled from "styled-components";
import { AiOutlineInstagram, AiOutlineFacebook } from "react-icons/ai";
import Link from "next/link";
import { BsFillTelephoneFill } from "react-icons/bs";
import { IoTimeSharp } from "react-icons/io5";

const Container = styled.div`
  width: 100%;
  height: 300px;
  display: flex;
  justify-content: space-around;
  flex-direction: column;
  align-items: center;
  background-color: var(--bg-color);
  padding: 32px;
`;

const ContainerInner = styled.div`
  display: flex;
  max-width: 1140px;
  width: 800px;
  justify-content: space-between;
  align-items: center;
`;

const SocialContainer = styled.div`
  display: flex;
  gap: 10px;
`;

const InstaIcon = styled(AiOutlineInstagram)`
  color: #000;
  width: 25px;
  height: 25px;
  transition: all 0.3s ease;
`;

const FbIcon = styled(AiOutlineFacebook)`
  color: #000;
  width: 25px;
  height: 25px;
  transition: all 0.3s ease;
`;

const CopyrightSection = styled.div``;

const MainSection = styled.div`
  display: flex;
  gap: 16px;
`;

const OpeningTimes = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const ConnectSection = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 16px;
`;

const ContactDetails = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const PhoneIcon = styled(BsFillTelephoneFill)`
  color: black;
`;

const TimeIcon = styled(IoTimeSharp)`
  color: black;
  width: 25px;
  height: 25px;
`;

const IconContainer = styled.div`
  width: 40px;
  height: 40px;
  background-color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
`;

const InstaContainer = styled.div`
  width: 40px;
  height: 40px;
  background-color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;

  &:hover ${InstaIcon} {
    color: #f2003c;
  }
`;

const FbContainer = styled.div`
  width: 40px;
  height: 40px;
  background-color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;

  &:hover ${FbIcon} {
    color: #3b5998;
  }
`;

const CustomLink = styled(Link)`
  color: greenyellow;
  position: relative;

  &:hover {
    &::after {
      transform: scale(1);
    }
  }

  &::after {
    position: absolute;
    content: "";
    bottom: -5px;
    left: 0;
    height: 1px;
    background-color: greenyellow;
    width: 100%;
    transform: scale(0);
    transform-origin: center;
    transition: all 0.3s ease;
  }
`;

const Footer = () => {
  const currentDate = new Date().getFullYear();
  return (
    <>
      <Container>
        <ContainerInner>
          <MainSection>
            <IconContainer>
              <TimeIcon />
            </IconContainer>
            <OpeningTimes>
              <p>Mon-Sat: 12 PM – 10 PM</p>
              <p>Sun: Closed</p>
            </OpeningTimes>
          </MainSection>
          <ConnectSection>
            <IconContainer>
              <PhoneIcon />
            </IconContainer>
            <ContactDetails>
              <p>00357 99921580</p>
              <p>info@masamadre.com</p>
            </ContactDetails>
          </ConnectSection>
          <SocialContainer href="/">
            <Link href="/">
              <InstaContainer>
                <InstaIcon />
              </InstaContainer>
            </Link>
            <Link href="/">
              <FbContainer>
                <FbIcon />
              </FbContainer>
            </Link>
          </SocialContainer>
        </ContainerInner>
        <CopyrightSection>{`Copyright © ${currentDate}`}</CopyrightSection>
        <div>
          Designed & Developed by{" "}
          <CustomLink href="www.georgeonisiforou.com">
            George Onisiforou
          </CustomLink>
        </div>
      </Container>
    </>
  );
};

export default Footer;
