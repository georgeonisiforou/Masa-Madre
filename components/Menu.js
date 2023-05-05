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
  padding: 32px;
  gap: 32px;
`;

const PizzaCardOverlay = styled.div`
  width: 100%;
  height: 100%;
  background-color: #fafafa;

  z-index: 2;
  position: absolute;
  top: 0;
  left: 0;
  transition: all 0.5s ease;
`;

const PizzaName = styled.div`
  font-size: clamp(20px, 3vw, 28px);
  font-weight: 500;
  position: relative;

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
    transform-origin: right;
    transition: all 0.3s ease;

    @media (max-width: 768px) {
      transform: scale(1);
    }
  }
`;

const PizzaIcons = styled.div`
  display: flex;
  gap: 16px;
  position: absolute;
  bottom: 28px;
  right: 130px;
  z-index: 2;

  @media (max-width: 768px) {
    bottom: 16px;
    left: 16px;
  }
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
  height: 350px;
  width: 100%;
  min-width: 300px;
  max-width: 600px;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  flex-wrap: wrap;
  gap: 16px;
  padding: 16px 16px 32px 16px;
  overflow: hidden;
  border: 1px solid var(--accent-color);
  border-radius: 10px;
  position: relative;
  box-shadow: 1px 1px 8px rgba(150, 150, 150, 0.6),
    -1px 0px 8px rgba(150, 150, 150, 0.6);

  @media (max-width: 768px) {
    padding: 0 0 16px 0;
    justify-content: flex-start;
    gap: 8px;
    height: 320px;
  }

  &:hover ${PizzaName} {
    &::after {
      transform: scale(1);
    }
  }
`;

const Price = styled.div`
  font-size: clamp(20px, 2vw, 25px);
  font-weight: 500;
  background-color: var(--extra-color);
  border-radius: 8px;
  padding: 8px;
  color: var(--text-color);
  position: absolute;
  bottom: 16px;
  right: 16px;
  z-index: 2;
  border: 1px dotted var(--accent-color);

  @media (max-width: 768px) {
    bottom: 8px;
    right: 8px;
    padding: 3px;
  }
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

  @media (max-width: 768px) {
    max-height: 150px;
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
    min-width: 350px;
  }
`;

const PizzaIngredients = styled.div`
  display: flex;
  gap: 24px;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-end;
  flex: 1;
  height: 80%;
  min-width: 270px;
  padding: 16px 0;
  text-align: right;
  z-index: 3;
  font-size: clamp(16px, 3vw, 20px);

  @media (max-width: 768px) {
    height: 120px;
    padding-left: 16px;
    padding-right: 16px;
    padding-top: 0;
    padding-bottom: 0;
    gap: 16px;
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
                </PizzaIngredients>
                <PizzaIcons>
                  {item.spicy ? <Spicy /> : null}
                  {item.vegan ? <Vegan /> : null}
                </PizzaIcons>
                <Price>{`€ ${item.price}`}</Price>
              </PizzaCard>
            );
          })}
        </Container>
      </MainContainer>
    </>
  );
};

export default Menu;
