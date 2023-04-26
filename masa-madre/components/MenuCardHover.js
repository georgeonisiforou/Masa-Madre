import React from "react";
import styled from "styled-components";
import Image from "next/image";
import { BiLeaf } from "react-icons/bi";
import { GiChiliPepper } from "react-icons/gi";
import { menu } from "@/config/menu";

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  padding: 100px 16px;
  gap: 100px;
`;

const LeftSection = styled.div`
  width: 400px;
  height: 100%;
  position: relative;
`;

const CardImage = styled.div`
  width: 100%;
  height: 100%;
  overflow: hidden;
  position: relative;
  z-index: 5;
  border-radius: 8px;
  border-top-right-radius: 0;

  img {
    transition: all 0.5s ease;
  }
`;

const IngredientsContainer = styled.div`
  width: 300px;
  font-size: 24px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 8px;
  background-image: linear-gradient(
    60deg,
    hsl(358deg 85% 33%) 0%,
    hsl(14deg 98% 29%) 8%,
    hsl(21deg 100% 26%) 17%,
    hsl(28deg 100% 24%) 25%,
    hsl(34deg 100% 22%) 33%,
    hsl(42deg 100% 19%) 42%,
    hsl(50deg 100% 17%) 50%,
    hsl(59deg 100% 15%) 58%,
    hsl(68deg 95% 16%) 67%,
    hsl(80deg 66% 19%) 75%,
    hsl(95deg 48% 21%) 83%,
    hsl(114deg 36% 23%) 92%,
    hsl(135deg 38% 23%) 100%
  );
  border-top-right-radius: 8px;
  border-bottom-right-radius: 8px;
  z-index: 1;
  position: absolute;
  right: 0;
  top: 0;
  transition: all 0.3s ease;
`;

const PizzaName = styled.div`
  position: absolute;
  border-top-right-radius: 8px;
  border-top-left-radius: 8px;
  padding: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 32px;
  left: 0;
  top: 0;
  z-index: 1;
  background-image: linear-gradient(
    60deg,
    hsl(358deg 85% 33%) 0%,
    hsl(14deg 98% 29%) 8%,
    hsl(21deg 100% 26%) 17%,
    hsl(28deg 100% 24%) 25%,
    hsl(34deg 100% 22%) 33%,
    hsl(42deg 100% 19%) 42%,
    hsl(50deg 100% 17%) 50%,
    hsl(59deg 100% 15%) 58%,
    hsl(68deg 95% 16%) 67%,
    hsl(80deg 66% 19%) 75%,
    hsl(95deg 48% 21%) 83%,
    hsl(114deg 36% 23%) 92%,
    hsl(135deg 38% 23%) 100%
  );
  transition: all 0.3s ease;
`;

const Price = styled.div`
  padding: 8px;
  font-size: 32px;
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  z-index: 1;
  position: absolute;
  bottom: 0;
  left: 30%;
  background-image: linear-gradient(
    60deg,
    hsl(358deg 85% 33%) 0%,
    hsl(14deg 98% 29%) 8%,
    hsl(21deg 100% 26%) 17%,
    hsl(28deg 100% 24%) 25%,
    hsl(34deg 100% 22%) 33%,
    hsl(42deg 100% 19%) 42%,
    hsl(50deg 100% 17%) 50%,
    hsl(59deg 100% 15%) 58%,
    hsl(68deg 95% 16%) 67%,
    hsl(80deg 66% 19%) 75%,
    hsl(95deg 48% 21%) 83%,
    hsl(114deg 36% 23%) 92%,
    hsl(135deg 38% 23%) 100%
  );
  transition: all 0.3s ease;
`;

const IconsContainer = styled.div``;

const CardContainer = styled.div`
  height: 400px;
  position: relative;
  display: flex;
  transition: all 0.5s ease;
  width: 700px;

  &:hover ${PizzaName} {
    transform: translateY(-50px);
  }

  &:hover ${Price} {
    transform: translateY(50px);
  }

  &:hover ${IngredientsContainer} {
    transform: translateX(300px);
  }

  &:hover img {
    transform: scale(1.1);
  }
`;

const MenuCardHover = () => {
  return (
    <>
      <Container>
        {menu.map((item, idx) => {
          return (
            <CardContainer key={idx}>
              <LeftSection>
                <PizzaName>{item.name}</PizzaName>
                <Price>{`$ ${item.price}`}</Price>
                <CardImage>
                  <Image
                    alt="pizza"
                    src="/images/pizza.jpg"
                    fill
                    style={{ objectFit: "cover" }}
                  />
                </CardImage>
                <IngredientsContainer>{item.ingredients}</IngredientsContainer>
              </LeftSection>
            </CardContainer>
          );
        })}
      </Container>
    </>
  );
};

export default MenuCardHover;
