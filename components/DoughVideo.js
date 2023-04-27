import React from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
`;

const VideoContainer = styled.div`
  width: 100%;
  height: 100%;
  overflow: hidden;
  position: relative;

  video {
    height: 100%;
    width: 100%;
    object-fit: cover;
    background-attachment: fixed;
  }
`;

const Content = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: var(--text-color);
  font-size: clamp(16px, 2vw, 32px);
  z-index: 3;
  padding: 16px;

  @media (max-width: 768px) {
    text-align: center;
  }
`;

const Overlay = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.4);
  z-index: 2;
`;

const FadeBottom = styled.div`
  width: 100%;
  height: 250px;
  background-image: linear-gradient(
    180deg,
    transparent,
    rgba(30, 30, 30, 0.61),
    var(--bg-color)
  );

  z-index: 2;
  position: absolute;
  left: 0;
  bottom: 0;
`;

const FadeTop = styled.div`
  width: 100%;
  height: 250px;
  background-image: linear-gradient(
    360deg,
    transparent,
    rgba(30, 30, 30, 0.61),
    var(--bg-color)
  );

  z-index: 2;
  position: absolute;
  left: 0;
  top: 0;
`;

const DoughVideo = () => {
  return (
    <>
      <Container>
        <VideoContainer>
          <FadeBottom />
          <FadeTop />
          <Content>Our pizza dough is proofed for over 24 hours.</Content>
          <Overlay />
          <video src="/videos/dough.mp4" autoPlay playsInline muted loop />
        </VideoContainer>
      </Container>
    </>
  );
};

export default DoughVideo;
