import { useState, useEffect } from "react";
import styled from "styled-components";

const Button = styled.button`
  position: fixed;
  bottom: 40px;
  right: 40px;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  border: none;
  background-color: #f0a500;
  color: white;
  font-size: 24px;
  cursor: pointer;
  display: ${({ show }) => (show ? "flex" : "none")};
  align-items: center;
  justify-content: center;
  box-shadow: 0 4px 8px rgba(0,0,0,0.3);
  transition: background-color 0.3s;

  &:hover {
    background-color: #d18e00;
  }
`;

export const ScrollToTopButton = () => {
  const [show, setShow] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 300) {
      setShow(true);
    } else {
      setShow(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return <Button onClick={scrollToTop} show={show}>↑</Button>;
};