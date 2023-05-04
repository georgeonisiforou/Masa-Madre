import React from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--comp-color);
  opacity: 0.5;
  color: var(--text-color);
  position: fixed;
  z-index: 5;
  top: 0;
  left: 0;
`;

const LogoContainer = styled.div`
  width: 250px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 24px;
`;

const NavContainer = styled.div`
  display: flex;
  gap: 32px;
`;

const Navbar = () => {
  return (
    <>
      <Container>
        <LogoContainer>MASA MADRE Pizza</LogoContainer>
      </Container>
    </>
  );
};

export default Navbar;
