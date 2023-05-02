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
  font-size: clamp(24px, 3vw, 48px);
  padding: 16px;
  font-weight: 600;
  text-transform: uppercase;
  margin-top: 32px;
  font-family: "Poppins", sans-serif;
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
  padding: 32px;
  gap: 32px;
`;

const PizzaCardOverlay = styled.div`
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.2);
  z-index: 2;
  position: absolute;
  top: 0;
  left: 0;
  transition: all 0.5s ease;
`;

const PizzaName = styled.div`
  font-size: clamp(20px, 2vw, 32px);
  font-weight: 600;
  position: relative;

  &::after {
    content: "";
    position: absolute;
    bottom: -5px;
    right: 0;
    width: 100%;
    max-width: 180px;
    height: 2px;
    border-radius: 5px;
    background-color: var(--accent-color);
    transform: scale(0);
    transform-origin: right;
    transition: all 0.3s ease;
  }
`;

const PizzaIcons = styled.div`
  display: flex;
  gap: 16px;
`;

const Vegan = styled(FaLeaf)`
  width: 30px;
  height: 30px;
  color: green;
`;

const Spicy = styled(GiChiliPepper)`
  width: 30px;
  height: 30px;
  color: red;
`;

const PizzaCard = styled.div`
  /* flex: 1; */
  height: 350px;
  width: 100%;
  min-width: 300px;
  max-width: 600px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 16px;
  padding: 16px;
  overflow: hidden;
  border: 1px solid rgba(37, 37, 37, 0.5);
  border-radius: 5px;
  position: relative;
  font-family: "Merriweather", serif;

  @media (max-width: 768px) {
    max-height: 800px;
  }

  @media (max-width: 700px) {
    height: 600px;
  }

  &:hover ${PizzaName} {
    &::after {
      transform: scale(1);
    }
  }
`;

const Price = styled.div`
  font-size: clamp(20px, 2vw, 28px);
  font-weight: 600;
  font-family: "Poppins", sans-serif;
  background-color: rgba(355, 355, 355, 0.1);
  border-radius: 5px;
  padding: 5px;
`;

const PizzaImage = styled.div`
  position: relative;
  flex: 1;
  height: 100%;
  max-height: 300px;
  min-width: 280px;
  border-radius: 5px;
  overflow: hidden;
  z-index: 3;
`;

const PizzaIngredients = styled.div`
  display: flex;
  gap: 16px;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-end;
  flex: 1;
  height: 100%;
  min-width: 270px;
  padding: 16px 0;
  text-align: right;
  z-index: 3;
  font-size: clamp(20px, 2vw, 24px);

  @media (max-width: 768px) {
    height: 200px;
  }
`;

const IngredientsText = styled.div`
  max-width: 20ch;

  @media (max-width: 768px) {
    max-width: 40ch;
  }
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
                  backgroundColor: "rgba(37,37,37,0.2)",
                }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <PizzaCardOverlay />
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
