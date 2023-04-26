import React from "react";
import Image from "next/image";
import styled from "styled-components";

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

const TextContent = styled.div`
  text-transform: uppercase;
  background-color: rgba(204, 204, 228, 0.3);
  font-size: clamp(16px, 3vw, 56px);
  max-width: 500px;
  text-align: center;
  /* line-height: 56px; */
  color: var(--comp-color);
  z-index: 2;
  position: absolute;
  border: 5px solid var(--accent-color);
  border-radius: 5px;
  padding: 16px;
  font-weight: 600;
`;

const Hero = () => {
  return (
    <>
      <Container>
        <ImageContainer></ImageContainer>
        <TextContent>Authentic Sourdough Pizza</TextContent>
      </Container>
    </>
  );
};

export default Hero;
