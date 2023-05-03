import React from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: clamp(24px, 3vw, 32px);
  background-color: var(--comp-color);
`;

const Content = styled.div`
  width: 60ch;
  text-align: center;
  position: relative;
  padding: 0 16px;

  &::after {
    content: "";
    position: absolute;
    bottom: -100px;
    left: 0;
    width: 100%;
    height: 5px;
    background-color: var(--accent-color);
    border-radius: 5px;
  }

  &::before {
    content: "";
    position: absolute;
    top: -100px;
    left: 0;
    width: 100%;
    height: 5px;
    background-color: var(--accent-color);
    border-radius: 5px;
  }
`;

const BlockSection = () => {
  return (
    <>
      <Container>
        <Content>
          Our menu consists of 10 pizza options, sides and desserts, because we
          focus on what we&apos;re good at to ensure quality Neopoletana pizza
          is in front of you every time.
        </Content>
      </Container>
    </>
  );
};

export default BlockSection;
