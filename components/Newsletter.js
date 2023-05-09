import React from "react";
import styled from "styled-components";
import { BsAsterisk } from "react-icons/bs";
import { motion } from "framer-motion";

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--comp-color);
  padding: 32px 0;
`;

const Form = styled.div`
  width: clamp(300px, 90%, 800px);
  padding: 16px;
  background-color: var(--accent-color);
  border-radius: 15px;
  box-shadow: 1px 1px 10px rgba(37, 37, 37, 0.3);
`;

const InputContainer = styled.div`
  width: 100%;
  padding: 16px;
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const InputLabel = styled.div`
  display: flex;
  gap: 10px;
  width: 100%;
  font-size: clamp(16px, 2vw, 20px);
`;

const FormInput = styled.input`
  width: 100%;
  height: 50px;
  border-radius: 10px;
  background-color: var(--comp-color);
  border: none;
  outline: none;
  padding: 0 16px;
  font-size: 16px;
  box-shadow: inset 1px 1px 3px rgba(37, 37, 37, 0.3),
    inset 1px 1px 3px rgba(37, 37, 37, 0.3);
`;

const FormBtn = styled.button`
  height: 60px;
  font-size: clamp(16px, 2vw, 20px);
  font-weight: 600;
  background-color: var(--extra-color);
  border-radius: 10px;
  border: none;
  cursor: pointer;
  box-shadow: 1px 1px 10px rgba(37, 37, 37, 0.3);

  &:hover {
    background-color: var(--bg-color);
    border: 5px solid var(--extra-color);
  }
`;

const FormTitle = styled.div`
  display: flex;
  flex-direction: column;
  font-size: clamp(24px, 2vw, 28px);
  font-weight: 800;
  text-transform: uppercase;
`;

const Subtitle = styled.div`
  font-weight: 600;
`;

const Asterisk = styled(BsAsterisk)`
  font-size: 10px;
  color: red;
`;

const Newsletter = () => {
  return (
    <>
      <Container>
        <Form>
          <InputContainer>
            <Subtitle>MAILING LIST</Subtitle>
            <FormTitle>Be the first to know what&apos;s going on!</FormTitle>
          </InputContainer>

          <InputContainer>
            <InputLabel>
              First Name <Asterisk />
            </InputLabel>
            <FormInput placeholder="First Name" />
          </InputContainer>
          <InputContainer>
            <InputLabel>
              Last Name
              <Asterisk />
            </InputLabel>
            <FormInput placeholder="Last Name" />
          </InputContainer>
          <InputContainer>
            <InputLabel>
              Email
              <Asterisk />
            </InputLabel>
            <FormInput placeholder="Email" />
          </InputContainer>
          <InputContainer>
            <FormBtn
              as={motion.button}
              whileHover={{
                scale: 1.01,
              }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
              whileTap={{ scale: 0.98 }}
            >
              SIGN-UP
            </FormBtn>
          </InputContainer>
        </Form>
      </Container>
    </>
  );
};

export default Newsletter;
