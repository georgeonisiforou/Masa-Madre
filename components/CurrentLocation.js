import React from "react";
import styled from "styled-components";
import Image from "next/image";
import { PortableText } from "@portabletext/react";
import { motion } from "framer-motion";
import { SiGooglemaps } from "react-icons/si";
import { BsPinMap } from "react-icons/bs";
import { GiFoodTruck } from "react-icons/gi";
import { IoTimeOutline, IoCalendarOutline } from "react-icons/io5";
import Link from "next/link";
import { useWindowSize } from "@/util/hooks/useWindowSize";

const Container = styled.div`
  width: 100%;
  position: relative;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap-reverse;
  background-color: var(--comp-color);
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
  gap: 32px;
  justify-content: space-around;
  padding: 16px;
  min-width: 300px;
`;

const Today = styled.div`
  font-size: clamp(24px, 3vw, 48px);
  position: relative;
  display: flex;
  justify-content: center;
  gap: 16px;

  &::after {
    content: "";
    height: 4px;
    width: 120%;
    background-color: var(--accent-color);
    position: absolute;
    bottom: -8px;
    left: -10%;
    border-radius: 5px;
  }
`;

const Address = styled.div`
  font-size: clamp(20px, 2vw, 28px);
  text-align: center;
`;

const Description = styled.div`
  font-size: clamp(16px, 2vw, 24px);
  max-width: 40ch;
  text-align: center;
`;

const WorkingTimes = styled.div`
  font-size: clamp(16px, 2vw, 24px);
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 16px;
`;

const ClockIcon = styled(IoTimeOutline)``;

const CalendarIcon = styled(IoCalendarOutline)``;

const GoogleMapsIcon = styled(SiGooglemaps)`
  transition: all 0.3s ease;
`;

const MapsLink = styled(Link)`
  color: var(--text-color);
  min-width: 280px;
  transition: all 0.3s ease;
`;

const GoogleMap = styled.div`
  font-size: clamp(16px, 2vw, 24px);
  position: relative;
  margin-bottom: 10px;
  margin-top: 10px;
  background-color: var(--extra-color);
  border-radius: 8px;
  padding: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  flex-wrap: wrap;
  min-height: 50px;

  &:hover {
    background-color: transparent;
    border: 3px solid var(--extra-color);
  }

  &:hover ${GoogleMapsIcon} {
    scale: 1.1;
    color: var(--accent-color);
  }

  &:hover ${MapsLink} {
    transform: translateY(-2px);
    text-decoration: underline;
  }
`;

const PinIcon = styled(BsPinMap)``;

const TitleLine = styled.div`
  width: 700px;
  background-color: red;
  height: 2px;
`;

const CurrentLocation = ({ locationData }) => {
  const { width } = useWindowSize();
  const openDateTime = locationData[0].openTime;
  const closeDateTime = locationData[0].closeTime;

  const openDateTimeConverted = new Date(openDateTime.slice(0, -1)).toString();
  const closeDateTimeConverted = new Date(
    closeDateTime.slice(0, -1)
  ).toString();

  const openDetails = openDateTimeConverted.split(" ");
  const closeDetails = closeDateTimeConverted.split(" ");

  const openDate = `${openDetails[2]} ${openDetails[1]} ${openDetails[3]}`;
  const openTimeArray = openDetails[4].split(":");
  const openTime = `${openTimeArray[0]}:${openTimeArray[1]}`;

  const closeDate = `${closeDetails[2]} ${closeDetails[1]} ${closeDetails[3]}`;
  const closeTimeArray = closeDetails[4].split(":");
  const closeTime = `${closeTimeArray[0]}:${closeTimeArray[1]}`;

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

  return (
    <>
      <Container id="location">
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
        <RightSection
          as={motion.div}
          initial={{ opacity: 0, x: 200 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          <Today>
            <PinIcon />
            TODAY&apos;S LOCATION
          </Today>

          <Address>{locationData[0].address}</Address>
          <GoogleMap width={width}>
            <GoogleMapsIcon />
            Google Maps{" "}
            <MapsLink href={locationData[0].googleMapsUrl} target="_blank">
              {locationData[0].googleMapsUrl}
            </MapsLink>
          </GoogleMap>
          <Description>
            <PortableText
              value={locationData[0].content}
              components={myPortableTextComponents}
            />
          </Description>
          <WorkingTimes>
            <CalendarIcon />
            {openDate}
          </WorkingTimes>
          <WorkingTimes>
            <ClockIcon />
            {`From ${openTime} to ${closeTime}`}
          </WorkingTimes>
        </RightSection>
      </Container>
    </>
  );
};

export default CurrentLocation;
