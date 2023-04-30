import React from "react";
import styled from "styled-components";
import Image from "next/image";
import { PortableText } from "@portabletext/react";

const Container = styled.div`
  width: 100%;
  position: relative;
  display: flex;
  justify-content: space-between;
  margin-top: 64px;
  flex-wrap: wrap-reverse;
  font-family: "Poppins", sans-serif;
`;

const LeftSection = styled.div`
  position: relative;
  flex: 1;
  min-width: 300px;
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
  gap: 16px;
  justify-content: space-around;
  padding: 16px;
  min-width: 300px;
`;

const Today = styled.div`
  font-size: clamp(24px, 3vw, 48px);
`;

const Address = styled.div`
  font-size: clamp(20px, 3vw, 32px);
  font-style: italic;
  text-align: center;
`;

const Description = styled.div`
  font-size: 16px;
  max-width: 40ch;
  text-align: center;
`;

const WorkingTimes = styled.div``;

const CurrentLocation = ({ locationData }) => {
  const openDateTime = locationData[0].openTime;
  const closeDateTime = locationData[0].closeTime;

  const openDateTimeConverted = new Date(openDateTime.slice(0, -1)).toString();
  const closeDateTimeConverted = new Date(
    closeDateTime.slice(0, -1)
  ).toString();

  const openDetails = openDateTimeConverted.split(" ");
  const closeDetails = closeDateTimeConverted.split(" ");

  const openDate = `${openDetails[2]} ${openDetails[1]} ${openDetails[3]}`;
  const openTime = `${openDetails[4]}`;

  const closeDate = `${closeDetails[2]} ${closeDetails[1]} ${closeDetails[3]}`;
  const closeTime = `${closeDetails[4]}`;

  const myPortableTextComponents = {
    marks: {
      em: ({ children }) => <em>{children}</em>,
      link: ({ children, value }) => {
        const rel = !value.href.startsWith("/")
          ? "noreferrer noopener"
          : undefined;
        return (
          <a href={value.href} rel={rel}>
            {children}
          </a>
        );
      },
    },
  };

  console.log(locationData[0].content);

  return (
    <>
      <Container>
        <LeftSection>
          <ImageContainer>
            <Image
              alt="location photo"
              src={locationData[0].imageUrl}
              fill
              style={{ objectFit: "contain" }}
            />
          </ImageContainer>
        </LeftSection>
        <RightSection>
          <Today>📍Today&apos;s location!</Today>
          <Address>{locationData[0].address}</Address>
          <Description>
            <PortableText
              value={locationData[0].content}
              components={myPortableTextComponents}
            />
          </Description>

          {/* {locationData[0].content.map((item, idx) => (
            <Description key={idx}>{item.children[0].text}</Description>
          ))} */}
          <WorkingTimes>{openDate}</WorkingTimes>
          <WorkingTimes>{`🕐 From ${openTime} to ${closeTime}`}</WorkingTimes>
        </RightSection>
      </Container>
    </>
  );
};

export default CurrentLocation;
