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
  font-size: 24px;
  z-index: 3;
  padding: 16px;
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

const DoughVideo = () => {
  return (
    <>
      <Container>
        <VideoContainer>
          <Content>Our pizza dough is proofed for over 24 hours.</Content>
          <Overlay />
          <video src="/videos/dough.mp4" autoPlay muted loop />
        </VideoContainer>
      </Container>
    </>
  );
};

export default DoughVideo;
