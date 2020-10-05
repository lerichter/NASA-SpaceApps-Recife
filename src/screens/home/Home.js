import React from 'react'
import { Template } from '../../components/template'
import styled from 'styled-components'

import { NavBar } from '../../components/navbar'
import { Area1 } from '../../components/area1'
import { Area2 } from '../../components/area2'
import { Area3 } from '../../components/area3'
import { Area4 } from '../../components/area4'
import { Area5 } from '../../components/area5'

const Wrapper = styled.div`
  width: 100vw;
  height: fit-content;
  padding-top: 30px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

export const Home = () => {
  return (
    <Template>
      <NavBar />
      <Wrapper>
        <Area1 />
        <Area2 />

        <Area3 />
        <Area4 />
        <Area5 />
      </Wrapper>
    </Template>
  )
}
