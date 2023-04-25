import React from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  height: 100vh;
  margin-bottom: 16px;
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

const DoughVideo = () => {
  return (
    <>
      <Container>
        <VideoContainer>
          <video src="/videos/dough.mp4" muted loop />
        </VideoContainer>
      </Container>
    </>
  );
};

export default DoughVideo;
