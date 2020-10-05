import React from 'react'
import { Template } from '../template'
import styled from 'styled-components'
import Logo from '../assets/logo1.svg'

const Wrapper = styled.div`
  background-color: #ffffff;
  width: 100vw;
  height: 12vh;
  z-index: 9;

  position: fixed;

  display: flex;
  align-items: center;
  box-shadow: -2px 9px 34px -19px rgba(0, 0, 0, 0.75);
`

const Title = styled.h1`
  font-weight: bold;
  font-size: 24px;
  color: #1B2C38;
  margin-left: 2rem;
  font-family: 'Roboto';
`
const ImgLogo = styled.img`
  width: 7%;
  margin-left: 2rem;
`

export const NavBar = () => {
  return (
    <Template>
      <Wrapper>
        <ImgLogo src={Logo} />
        <Title>IPSVM TRACKER</Title>
      </Wrapper>
    </Template>
  )
}
