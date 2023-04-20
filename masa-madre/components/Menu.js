import React from "react";
import styled from "styled-components";
import Image from "next/image";
import { BiLeaf } from "react-icons/bi";
import { GiChiliPepper } from "react-icons/gi";

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 16px;
`;

const MenuContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 32px;
  width: 100%;
`;

const MenuItemContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 32px;
  flex: 1;
  min-height: 400px;
  height: fit-content;
  align-items: center;
  box-shadow: 5px 5px 8px gray;
  border-radius: 10px;
  color: black;
  padding: 16px;
`;

const ImageContainer = styled.div`
  height: 500px;
  min-width: 300px;
  position: relative;
  flex: 1;
`;

const Ingredients = styled.div`
  display: flex;
  height: 100%;
  flex: 1;
  flex-direction: column;
  justify-content: space-between;
  font-family: inherit;
  font-size: 24px;
  padding: 16px;
`;

const Text = styled.div`
  width: 100%;
`;

const Icons = styled.div`
  align-self: flex-end;
  display: flex;
`;

const Vegan = styled(BiLeaf)`
  width: 30px;
  height: 30px;
  color: green;
`;

const Spicy = styled(GiChiliPepper)`
  width: 30px;
  height: 30px;
  color: red;
`;

const Menu = () => {
  return (
    <>
      <Container>
        <MenuContainer>
          <MenuItemContainer>
            <ImageContainer>
              <Image
                alt="pizza"
                src="/images/pizza.jpg"
                fill
                style={{ objectFit: "contain" }}
              />
            </ImageContainer>
            <Ingredients>
              <Text>fdghdhdfhdfh</Text>

              <Icons>
                <Vegan />
                <Spicy />
              </Icons>
            </Ingredients>
          </MenuItemContainer>
          <MenuItemContainer>
            <ImageContainer>
              <Image
                alt="pizza"
                src="/images/pizza.jpg"
                fill
                style={{ objectFit: "cover" }}
              />
            </ImageContainer>
            <Ingredients>
              <Text>fdghdhdfhdfh</Text>
              <Icons>
                <Vegan />
                <Spicy />
              </Icons>
            </Ingredients>
          </MenuItemContainer>
          <MenuItemContainer>
            <ImageContainer>
              <Image
                alt="pizza"
                src="/images/pizza.jpg"
                fill
                style={{ objectFit: "cover" }}
              />
            </ImageContainer>
            <Ingredients>
              <Text>fdghdhdfhdfh</Text>
              <Icons>
                <Vegan />
                <Spicy />
              </Icons>
            </Ingredients>
          </MenuItemContainer>
          <MenuItemContainer>
            <ImageContainer>
              <Image
                alt="pizza"
                src="/images/pizza.jpg"
                fill
                style={{ objectFit: "cover" }}
              />
            </ImageContainer>
            <Ingredients>
              <Text>fdghdhdfhdfh</Text>
              <Icons>
                <Vegan />
                <Spicy />
              </Icons>
            </Ingredients>
          </MenuItemContainer>
          <MenuItemContainer>
            <ImageContainer>
              <Image
                alt="pizza"
                src="/images/pizza.jpg"
                fill
                style={{ objectFit: "cover" }}
              />
            </ImageContainer>
            <Ingredients>
              <Text>fdghdhdfhdfh</Text>
              <Icons>
                <Vegan />
                <Spicy />
              </Icons>
            </Ingredients>
          </MenuItemContainer>
        </MenuContainer>
      </Container>
    </>
  );
};

export default Menu;
