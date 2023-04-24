import React from "react";
import styled from "styled-components";
import Image from "next/image";
import { BiLeaf } from "react-icons/bi";
import { GiChiliPepper } from "react-icons/gi";
import { menu } from "@/config/menu";

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 16px;
`;

const MenuContainer = styled.div`
  width: clamp(300px, 60vw, 1140px);
  overflow: hidden;
`;

const MenuItemContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 32px;
  gap: 16px;
  /* height: clamp(300px, 300px, 700px); */
  width: 100%;
  align-items: center;
  border-radius: 5px;
  color: var(--text-color);
  /* overflow: hidden; */
  position: relative;

  &::after {
    content: "";
    width: 100%;
    height: 2px;
    background-color: var(--accent-color);
    position: absolute;
    bottom: -15px;
    left: 0;
  }
`;

const ImageContainer = styled.div`
  height: 250px;
  min-width: 250px;
  position: relative;
  flex: 1;
`;

const Ingredients = styled.div`
  display: flex;
  justify-content: space-between;
  text-align: right;
  height: 250px;
  flex: 1;
  gap: 16px;
  flex-direction: column;
  font-family: inherit;
  font-size: clamp(16px, 2vw, 24px);
  padding: 16px;
  min-width: 200px;
  color: var(--text-color);
`;

const Text = styled.div`
  width: 100%;
`;

const PizzaName = styled.p`
  font-size: clamp(20px, 2vw, 32px);
  text-transform: uppercase;
`;

const Price = styled.div`
  padding: 10px;
  color: var(--comp-color);
  font-weight: 600;
  font-size: 20px;
  background-color: var(--text-color);
  border-radius: 3px;
`;

const PriceAndIcons = styled.div`
  display: flex;
  align-items: center;
  gap: 32px;
  width: 100%;
  justify-content: flex-end;
`;

const Icons = styled.div`
  display: flex;
  border-radius: 15px;
  padding: 10px;
`;

const Vegan = styled(BiLeaf)`
  width: 25px;
  height: 25px;
  color: green;
`;

const Spicy = styled(GiChiliPepper)`
  width: 25px;
  height: 25px;
  color: red;
`;

const MenuTitle = styled.div`
  font-size: 48px;
  color: var(--text-color);
  margin: 32px 0;
`;

const Menu = () => {
  return (
    <>
      <Container>
        <MenuContainer>
          <MenuTitle>Menu</MenuTitle>
          {menu.map((pizzaItem, idx) => {
            return (
              <MenuItemContainer key={idx}>
                <ImageContainer>
                  <Image
                    alt="pizza"
                    src="/images/pizza.jpg"
                    fill
                    style={{ objectFit: "cover" }}
                  />
                </ImageContainer>
                <Ingredients>
                  <PizzaName>{pizzaItem.name}</PizzaName>
                  <Text>{pizzaItem.ingredients}</Text>
                  <PriceAndIcons>
                    <Icons>
                      {pizzaItem.spicy == true ? <Spicy /> : null}
                      {pizzaItem.vegan == true ? <Vegan /> : null}
                    </Icons>
                    <Price>${pizzaItem.price}</Price>
                  </PriceAndIcons>
                </Ingredients>
              </MenuItemContainer>
            );
          })}
        </MenuContainer>
      </Container>
    </>
  );
};

export default Menu;
