import React from "react";
import styled from "styled-components";
import Link from "next/link";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useWindowSize } from "@/util/hooks/useWindowSize";

const Container = styled.div`
  width: 100%;
  height: 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: var(--comp-color);
  color: var(--text-color);
  position: fixed;
  z-index: 5;
  top: 0;
  left: 0;
  padding: 0 32px;
  font-size: 16px;
  font-weight: 600;
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

const NavLinksList = styled.ul`
  display: flex;
  gap: 10px;
`;

const NavLinksMob = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 10px;
  justify-content: center;
  align-items: center;
`;

const NavLinkItem = styled.li`
  list-style: none;
  padding: 10px;
  border-radius: 18px;
  position: relative;
`;

const NavActiveBg = styled.div`
  background-color: var(--accent-color);
  position: absolute;
  right: 0;
  top: 0;
  inset: 0;
  border-radius: 9999px;
`;

const NavLink = styled(Link)``;

const HamburgerContainer = styled.button`
  width: 40px;
  height: 40px;
  display: flex;
  flex-direction: column;
  gap: 6px;
  justify-content: center;
  align-items: center;
  background-color: transparent;
  border: none;
  cursor: pointer;

  &.burger {
    div:nth-child(1) {
      transform: rotate(45deg) translateY(17px);
      transition: all 0.3s ease;
    }
    div:nth-child(2) {
      transform: translateX(100%);
      opacity: 0;
      transition: all 0.3s ease;
    }
    div:nth-child(3) {
      transform: rotate(-45deg) translateY(-17px);
      transition: all 0.3s ease;
    }
  }

  &.ex {
    div:nth-child(1) {
      transform: rotate(0deg) translateY(0px);
      transition: all 0.3s ease;
    }
    div:nth-child(2) {
      transform: translateX(0);
      opacity: 1;
      transition: all 0.3s ease;
    }
    div:nth-child(3) {
      transform: rotate(0deg) translateY(0px);
      transition: all 0.3s ease;
    }
  }
`;

const BurgerLine = styled.div`
  width: 100%;
  height: 6px;
  background-color: var(--text-color);
  border-radius: 15px;
  box-shadow: 0 2px 10px 0 rgba(0, 0, 0, 0.3);
`;

const MobMenu = styled.div`
  width: calc(100% - 32px);
  display: flex;
  flex-direction: column;
  gap: 32px;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 70px;
  left: 16px;
  z-index: 10;
  background-color: var(--comp-color);
  padding: 32px 0;
  border-radius: 15px;
  font-size: 32px;
`;

const Navbar = () => {
  const tabs = [
    { id: "location", label: "Location" },
    { id: "menu", label: "Menu" },
    { id: "contact", label: "Contact" },
  ];
  const [activeTab, setActiveTab] = useState(tabs[0].id);
  const [openMenu, setOpenMenu] = useState(false);

  const { width } = useWindowSize();

  return (
    <>
      <Container>
        <LogoContainer>MASA MADRE Pizza</LogoContainer>

        {width < 768 ? (
          <HamburgerContainer
            className={openMenu ? "burger" : "ex"}
            as={motion.button}
            onClick={() => setOpenMenu(!openMenu)}
          >
            <BurgerLine />
            <BurgerLine />
            <BurgerLine />
          </HamburgerContainer>
        ) : (
          <NavContainer>
            <NavLinksList>
              {tabs.map((item, idx) => (
                <NavLinkItem
                  key={item.id}
                  onClick={() => {
                    setActiveTab(item.id);
                  }}
                >
                  {activeTab === item.id && (
                    <NavActiveBg
                      as={motion.div}
                      layoutId="active-pill"
                      transition={{ duration: 0.6, type: "spring" }}
                    />
                  )}
                  <NavLink href={`#${item.label}`}>
                    <span
                      style={{
                        position: "relative",
                        zIndex: 10,
                      }}
                    >
                      {item.label}
                    </span>
                  </NavLink>
                </NavLinkItem>
              ))}
            </NavLinksList>
          </NavContainer>
        )}

        {openMenu && (
          <MobMenu
            as={motion.div}
            initial="closed"
            exit="closing"
            variants={{
              open: { opacity: 1 },
              closed: { opacity: 0 },
              closing: { opacity: 0 },
            }}
            animate={openMenu ? "open" : "closed"}
          >
            <NavLinksMob as={motion.ul}>
              <AnimatePresence>
                {tabs.map((item, idx) => (
                  <NavLinkItem
                    as={motion.li}
                    initial="hidden"
                    animate="visible"
                    exit="closed"
                    custom={idx}
                    variants={{
                      hidden: { opacity: 0, y: -50 * idx },
                      visible: (idx) => ({
                        opacity: 1,
                        y: 0,
                        transition: { delay: idx * 0.2 },
                      }),
                      closed: {
                        opacity: 0,
                      },
                    }}
                    key={item.id}
                    onClick={() => setActiveTab(item.id)}
                  >
                    {activeTab === item.id && (
                      <NavActiveBg
                        as={motion.div}
                        layoutId="active-pill"
                        transition={{ duration: 0.6, type: "spring" }}
                      />
                    )}

                    <NavLink href={`#${item.label}`}>
                      <span
                        style={{
                          position: "relative",
                          zIndex: 10,
                        }}
                      >
                        {item.label}
                      </span>
                    </NavLink>
                  </NavLinkItem>
                ))}
              </AnimatePresence>
            </NavLinksMob>
          </MobMenu>
        )}
      </Container>
    </>
  );
};

export default Navbar;
