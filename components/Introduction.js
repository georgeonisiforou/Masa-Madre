import React from "react";
import styled from "styled-components";
import Image from "next/image";
import { useWindowSize } from "@/util/hooks/useWindowSize";

const Container = styled.div`
  width: 100%;
  /* height: 600px; */
  display: flex;
  flex-wrap: wrap;
  align-items: center;
`;

const LeftSection = styled.div`
  font-size: clamp(16px, 2vw, 32px);
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 300px;

  @media (max-width: 768px) {
    margin: 32px 0;
  }
`;

const TextContent = styled.div`
  max-width: 30ch;
`;

const ImageContainer = styled.div`
  position: relative;
  flex: 1;
  height: 100%;
  min-width: 300px;
  width: 100%;
  height: 100vh;
  overflow: hidden;
`;

const Fade = styled.div`
  width: 200px;
  height: 100%;
  background-image: linear-gradient(
    90deg,
    var(--bg-color),
    rgba(37, 37, 37, 0.6),
    transparent
  );

  z-index: 2;
  position: absolute;
  left: 0;
  top: 0;
`;

const FadeBottom = styled.div`
  width: 100%;
  height: 200px;
  background-image: linear-gradient(
    180deg,
    transparent,
    rgba(37, 37, 37, 0.61),
    var(--bg-color)
  );

  z-index: 2;
  position: absolute;
  left: 0;
  bottom: 0;
`;

const FadeTop = styled.div`
  width: 100%;
  height: 200px;
  background-image: linear-gradient(
    180deg,
    var(--bg-color),
    rgba(37, 37, 37, 0.61),
    transparent
  );

  z-index: 2;
  position: absolute;
  left: 0;
  top: 0;
`;

const Introduction = () => {
  const { width } = useWindowSize();

  return (
    <>
      <Container>
        <LeftSection>
          <TextContent>
            Our pizzas are cooked in Artisan built wood fired ovens from Naples,
            and our Pizzaioli take pride in adhering to the traditional
            Napoletana process in production of the dough, to produce the Verace
            pizza. Our pizza dough is proofed for over 24 hours. The long
            proofing time together with cooking at an intense heat of 500oC
            produces a moist, light, soft, digestible crust which is aromatic
            and delicious.
          </TextContent>
        </LeftSection>
        <ImageContainer>
          {width > 768 ? <Fade /> : null}
          <FadeBottom />
          <FadeTop />
          <Image
            alt="cooking pizza"
            src="/images/introBg.jpg"
            fill
            style={{ objectFit: "cover" }}
          />
        </ImageContainer>
      </Container>
    </>
  );
};

export default Introduction;
