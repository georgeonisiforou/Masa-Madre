import React from "react";
import Image from "next/image";
import styled from "styled-components";
import { FaArrowDown } from "react-icons/fa";
import { motion } from "framer-motion";

const Container = styled.div`
  display: flex;
  height: 100vh;
  position: relative;
  justify-content: center;
  align-items: center;
`;

const ImageContainer = styled.div`
  width: 100%;
  height: 100%;
  background-image: url("/images/heroBg.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  filter: grayscale(100%);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1;
`;

const ScrollDownContainer = styled.div`
  width: 60px;
  height: 80px;
  position: absolute;
  bottom: 200px;
  margin: 0 auto;
  z-index: 4;
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: 0;

  @media (max-width: 768px) {
    width: 40px;
    height: 60px;
  }
`;

const ScrollDown = styled(FaArrowDown)`
  width: 100%;
  height: 100%;
`;

const TextContent = styled.div`
  text-transform: uppercase;
  background-color: rgba(255, 211, 105, 0.2);
  font-size: clamp(16px, 3vw, 56px);
  max-width: 500px;
  text-align: center;
  color: var(--text-color);
  z-index: 2;
  position: absolute;
  text-shadow: var(--accent-color) 1px 0 5px;

  border-radius: 5px;
  padding: 16px;
  font-weight: 600;
`;

const FadeBottom = styled.div`
  width: 100%;
  height: 250px;
  background-image: linear-gradient(
    180deg,
    transparent,
    rgba(34, 40, 49, 0.61),
    var(--bg-color)
  );

  z-index: 2;
  position: absolute;
  left: 0;
  bottom: 0;
`;

const Hero = () => {
  return (
    <>
      <Container>
        <ScrollDownContainer
          as={motion.div}
          animate={{ y: 100, opacity: 1 }}
          transition={{
            delay: 2,
            repeat: Infinity,
            duration: 2,
            repeatType: "loop",
            repeatDelay: 1,
            type: "spring",
            bounce: 0.75,
          }}
        >
          <ScrollDown />
        </ScrollDownContainer>
        <FadeBottom />
        <ImageContainer></ImageContainer>
        <TextContent>Authentic Sourdough Pizza</TextContent>
      </Container>
    </>
  );
};

export default Hero;
