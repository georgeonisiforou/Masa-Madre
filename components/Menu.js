import React from "react";
import styled, { keyframes } from "styled-components";
import { menu } from "@/config/menu";
import Image from "next/image";
import { FaLeaf } from "react-icons/fa";
import { GiChiliPepper } from "react-icons/gi";
import { CiPizza } from "react-icons/ci";
import { motion } from "framer-motion";

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 64px;
`;

const Title = styled.div`
  font-size: clamp(28px, 3vw, 48px);
  padding: 16px;
  font-weight: 600;
  text-transform: uppercase;
  margin-top: 32px;
  display: flex;
  justify-content: center;
  gap: 16px;
  align-items: center;
`;

const SliceIcon = styled(CiPizza)``;

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding: 32px 0;
  gap: 16px;
`;

const PizzaName = styled.div`
  font-size: clamp(16px, 2vw, 20px);
  font-weight: 500;
  position: relative;
  min-height: 50px;

  &::after {
    content: "";
    position: absolute;
    bottom: -5px;
    right: 0;
    width: 100%;
    max-width: 180px;
    height: 3px;
    border-radius: 5px;
    background-color: var(--accent-color);
    transform: scale(0);
    transform-origin: left;
    transition: all 0.3s ease;

    @media (max-width: 768px) {
      transform: scale(1);
    }
  }
`;

const PizzaIcons = styled.div`
  display: flex;
  gap: 16px;
  min-height: 30px;
  align-self: center;
`;

const Vegan = styled(FaLeaf)`
  width: 25px;
  height: 25px;
  color: green;
`;

const Spicy = styled(GiChiliPepper)`
  width: 25px;
  height: 25px;
  color: red;
`;

const PizzaCard = styled.div`
  flex: 1;
  height: 650px;
  max-width: 175px;
  min-width: 175px;
  width: 100%;
  background-color: var(--comp-color);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  gap: 16px;
  padding: 8px 8px 8px 8px;
  overflow: hidden;
  border-radius: 12px;
  position: relative;
  box-shadow: 1px 1px 5px rgba(10, 10, 10, 0.6),
    -1px 0px 5px rgba(10, 10, 10, 0.6);

  /* @media (max-width: 700px) {
    height: 600px;
  } */

  &:hover ${PizzaName} {
    &::after {
      transform: scale(1);
    }
  }
`;

const Price = styled.div`
  font-size: clamp(16px, 2vw, 20px);
  font-weight: 600;
  background-color: var(--accent-color);
  border-radius: 8px;
  padding: 5px;
  color: var(--text-color);
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const PizzaImage = styled.div`
  position: relative;
  flex: 1;
  height: 400px;
  min-height: 276px;
  width: 100%;
  border-radius: 5px;
  overflow: hidden;
  z-index: 3;
`;

const PizzaIngredients = styled.div`
  display: flex;
  gap: 24px;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  flex: 1;
  /* min-width: 150px; */
  width: 100%;

  z-index: 3;
  font-size: 16px;
`;

const IngredientsText = styled.div`
  min-height: 90px;
`;

const Menu = () => {
  return (
    <>
      <MainContainer>
        <Title>
          MENU <SliceIcon />
        </Title>
        <Container>
          {menu.map((item, idx) => {
            return (
              <PizzaCard
                key={idx}
                as={motion.div}
                whileHover={{
                  scale: 1.01,
                  // backgroundColor: "rgba(37,37,37,0.2)",
                }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <PizzaImage>
                  <Image
                    alt="pizza"
                    src="/images/pizza.jpg"
                    fill
                    style={{ objectFit: "cover" }}
                    sizes="(max-width: 768px) 100vw,
                    (max-width: 1200px) 100vw,
                    100vw"
                  />
                </PizzaImage>
                <PizzaIngredients>
                  <PizzaName>{item.name}</PizzaName>

                  <IngredientsText>{item.ingredients}</IngredientsText>
                  <PizzaIcons>
                    {item.spicy ? <Spicy /> : null}
                    {item.vegan ? <Vegan /> : null}
                  </PizzaIcons>
                  <Price>{`€ ${item.price}`}</Price>
                </PizzaIngredients>
              </PizzaCard>
            );
          })}
        </Container>
      </MainContainer>
    </>
  );
};

export default Menu;
