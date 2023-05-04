import React from "react";
import styled from "styled-components";
import Image from "next/image";
import { motion } from "framer-motion";

const Container = styled.div`
  width: 100%;
  position: relative;
  display: flex;
  justify-content: space-between;
  /* margin-top: 64px;
  margin-bottom: 64px; */
  flex-wrap: wrap-reverse;
  background-color: var(--comp-color);
  padding: 64px 0;
`;

const LeftSection = styled.div`
  position: relative;
  flex: 1;
  min-width: 300px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ImageContainer = styled.div`
  overflow: hidden;
  width: 100%;
  height: 400px;
  position: relative;
  border-radius: 8px;
`;

const RightSection = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 64px;
  justify-content: space-around;
  padding: 16px;
  min-width: 300px;
`;

const Closed = styled.div`
  font-size: clamp(28px, 3vw, 56px);
  color: red;
  border: 3px solid red;
  border-radius: 10px;
  padding: 16px;
  text-shadow: red 1px 0 10px;
  box-shadow: 0px 0px 20px 5px red, 0px 0px 10px red, inset 0px 0px 2px 2px red;
`;

const Battery = styled.div`
  width: 150px;
  height: 80px;
  border: 5px solid green;
  border-radius: 8px;
  position: relative;
  display: flex;
  gap: 10px;
  padding: 5px;
  box-shadow: 0px 0px 10px green;

  &::after {
    content: "";
    position: absolute;
    width: 10px;
    height: 20px;
    border: 5px solid green;
    border-radius: 5px;
    right: -20px;
    top: 20px;
    padding: 0;
    box-shadow: 0px 0px 2px green;
  }
`;

const BatteryLevel = styled.div`
  width: 30%;
  height: 100%;
  background-color: greenyellow;
  box-shadow: 0px 0px 5px greenyellow;
  border-radius: 3px;
`;

const Title = styled.div`
  font-size: clamp(24px, 2vw, 32px);
`;

const BatteryContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 16px;
  flex-wrap: wrap-reverse;
  text-align: right;
`;

const BatteryMsg = styled.div`
  max-width: 10ch;
`;

const CurrentlyClosed = () => {
  const container = {
    hidden: { opacity: 1 },
    show: {
      opacity: 1,
      transition: {
        delayChildren: 0.5,
        staggerChildren: 2,
      },
    },
  };

  const item = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
    },
  };

  return (
    <>
      <Container>
        <LeftSection>
          <ImageContainer>
            <Image
              alt="location photo"
              src="/images/sleeping.jpg"
              fill
              style={{ objectFit: "contain" }}
            />
          </ImageContainer>
        </LeftSection>
        <RightSection>
          <Title>Current Status:</Title>
          <Closed>CLOSED</Closed>
          <BatteryContainer>
            <BatteryMsg>Recharging to serve you again</BatteryMsg>
            <Battery
              as={motion.div}
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              transition={{ repeat: Infinity, repeatType: "loop" }}
            >
              <BatteryLevel as={motion.div} variants={item} />
              <BatteryLevel as={motion.div} variants={item} />
              <BatteryLevel as={motion.div} variants={item} />
            </Battery>
          </BatteryContainer>
        </RightSection>
      </Container>
    </>
  );
};

export default CurrentlyClosed;
