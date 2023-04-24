import React from "react";
import styled from "styled-components";
import Image from "next/image";

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-wrap: wrap;
  margin: 32px 0;
`;

const LeftSection = styled.div`
  flex: 1;
  background-color: red;
`;

const Carousel = styled.div`
  width: 100%;
  height: 100%;
  min-height: 400px;
  position: relative;
  min-width: 320px;
`;

const RightSection = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 16px;
  padding: 16px;
  min-width: 300px;
`;

const SectionTitle = styled.div`
  font-size: clamp(20px, 3vw, 48px);
  width: clamp(300px, 50%, 500px);
  text-transform: uppercase;
`;

const SectionText = styled.div`
  width: clamp(300px, 50%, 500px);
  font-size: clamp(16px, 2vw, 32px);
`;

const Services = () => {
  return (
    <>
      <Container>
        <LeftSection>
          <Carousel>
            <Image
              alt="foodtruck image"
              fill
              src="/images/foodtruck.jpg"
              style={{ objectFit: "cover" }}
            />
          </Carousel>
        </LeftSection>
        <RightSection>
          <SectionTitle>Something for everyone</SectionTitle>
          <SectionText>
            Whether it’s a family affair, a couples retreat, food with friends
            or a solo trip, MASA MADRE has you covered.
          </SectionText>
        </RightSection>
      </Container>
    </>
  );
};

export default Services;
