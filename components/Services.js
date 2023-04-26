import React, { useEffect } from "react";
import styled from "styled-components";
import Image from "next/image";
import { useState } from "react";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-wrap: wrap-reverse;

  background: url("/images/background.jpg");
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
`;

const LeftSection = styled.div`
  flex: 1;
`;

const Carousel = styled.div`
  width: 100%;
  height: 100%;
  min-height: 400px;
  min-width: 320px;
  overflow: hidden;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const CarouselItem = styled.div`
  width: 100%;
  transition: all 0.3s ease;
  /* position: relative; */
  height: 100%;
  position: absolute;

  &.hide {
    opacity: 0;
    /* transform: translate(100%); */
  }

  &.show {
    opacity: 1;
  }
`;

const CarouselBtns = styled.div`
  display: flex;
  height: 40px;
  position: absolute;
  bottom: 0;
  right: 0;
  gap: 2px;
`;

const Prev = styled.button`
  z-index: 10;
  cursor: pointer;
  background-color: rgba(355, 355, 355, 0.2);
  border: none;
  width: 40px;
  color: #fff;
  transition: all 0.2s linear;
  font-size: 20px;
  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    background-color: rgba(355, 355, 355, 0.4);
  }
`;

const Next = styled.button`
  z-index: 10;
  cursor: pointer;
  background-color: rgba(355, 355, 355, 0.2);
  border: none;
  width: 40px;
  color: #fff;
  transition: all 0.2s linear;
  font-size: 20px;
  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    background-color: rgba(355, 355, 355, 0.4);
  }
`;

const RightSection = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 16px;
  /* padding: 16px; */
  min-width: 300px;

  @media (max-width: 768px) {
    text-align: center;
  }
`;

const SectionTitle = styled.div`
  font-size: clamp(20px, 3vw, 48px);
  width: clamp(300px, 50%, 500px);
  text-transform: uppercase;
`;

const SectionText = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: clamp(300px, 50%, 500px);
  font-size: clamp(16px, 2vw, 32px);
`;

const Services = () => {
  const carouselImages = [
    {
      id: 0,
      path: "/images/foodtruck.jpg",
    },
    {
      id: 1,
      path: "/images/foodtruck2.jpg",
    },
    {
      id: 2,
      path: "/images/foodtruck3.jpg",
    },
  ];

  const slidesLength = carouselImages.length;

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => nextSlide(), 4000);
    return () => clearInterval(intervalId);
  }, [currentIndex]);

  const nextSlide = () => {
    setCurrentIndex(currentIndex === slidesLength - 1 ? 0 : currentIndex + 1);
  };

  const prevSlide = () => {
    setCurrentIndex(currentIndex === 0 ? slidesLength - 1 : currentIndex - 1);
  };

  if (!Array.isArray(carouselImages) || slidesLength <= 0) {
    return null;
  }

  return (
    <>
      <Container>
        <LeftSection>
          <Carousel>
            {carouselImages.map((item, idx) => {
              return (
                <CarouselItem
                  key={idx}
                  className={
                    carouselImages[currentIndex].id === idx ? "show" : "hide"
                  }
                >
                  <Image
                    alt="foodtruck image"
                    fill
                    src={item.path}
                    style={{ objectFit: "cover" }}
                    sizes="(max-width: 768px) 100vw,
                    (max-width: 1200px) 50vw,
                    33vw"
                  />
                </CarouselItem>
              );
            })}
            <CarouselBtns>
              <Prev onClick={prevSlide}>
                <BsChevronLeft />
              </Prev>
              <Next onClick={nextSlide}>
                <BsChevronRight />
              </Next>
            </CarouselBtns>
          </Carousel>
        </LeftSection>
        <RightSection>
          <SectionTitle>Something for everyone</SectionTitle>
          <SectionText>
            Whether it’s a family affair, a couples retreat, food with friends
            or a solo trip, MASA MADRE has you covered.
          </SectionText>
        </RightSection>
      </Container>
    </>
  );
};

export default Services;
