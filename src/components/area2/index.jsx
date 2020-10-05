import React from 'react'
import { Template } from '../../components/template'
import styled from 'styled-components'
import MarImg from '../assets/mar.svg'
import EarthImg from '../assets/earth.svg'
import World from '../assets/world.svg'
import Shape from '../assets/caminho.svg'

const Wrapper = styled.div`
  width: 100vw;

  height: fit-content;

  background-color: white;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
`

const Item = styled.div`
  display: flex;
  flex-direction: column;
  width: 35vw;
  align-items: center;
  margin-right: 2rem;

  &:hover {
    opacity: 0.8;
  }
`

const ImgShape = styled.img`
  width: 100%;
`

const ItemTwo = styled.div`
  display: flex;
  flex-direction: column;
  width: 35vw;
  align-items: center;
  margin-left: 6rem;
  &:hover {
    opacity: 0.8;
  }
`

const ItemTthree = styled.div`
  display: flex;
  flex-direction: column;
  width: 35vw;
  align-items: center;
  &:hover {
    opacity: 0.8;
  }
`

const FirstImg = styled.img`
  max-width: 50%;
`

const SecondImg = styled.img`
  max-width: 55%;
  height: 30vh;
`

const Title = styled.h1`
  color: #003049;
  font-size: 3rem;
  letter-spacing: 0.2em;
  text-align: center;
  margin-top: 5rem;
  margin-bottom: 5rem;
  font-weight: lighter;
  font-family: 'Roboto';
`

const Subtitle = styled.p`
  color: #003049;
  font-size: 2rem;
  text-align: center;
  letter-spacing: 0.1em;
  font-family: 'Roboto';
`

const Text = styled.p`
  color: #003049;
  font-size: 1rem;
  line-height: 2rem;
  margin-top: 2rem;
  font-family: 'Roboto';
`

const TextTwo = styled(Text)`
  margin-top: 4rem;
  width: 30vw;
`

export const Area2 = () => {
  return (
    <Template>
      <Title id="statistics">Statistics</Title>
      <Wrapper>
        <Item>
          <Subtitle>Desalination</Subtitle>
          <FirstImg src={MarImg} />
          <TextTwo>
            According to International Desalination Association (IDA, 2019), the desalination worldwide capacity reached a
            production of 122,32 millions cubic meters per day. In the world, more than 300 milion people get potable water by
            this process.
          </TextTwo>
        </Item>
        <ItemTwo>
          <Subtitle>Earth's surface</Subtitle>
          <SecondImg src={EarthImg} />
          <Text>
            75% of earth's surface is covered by water, less of 0,25% from total is acessible as potable water in lakes, rivers
            or dam.
          </Text>
        </ItemTwo>
        <ItemTthree>
          <Subtitle>Connection</Subtitle>
          <SecondImg src={World} />
          <Text>
            In the world, we have the need to connect scientific solutions to institutions that have the possibility to invest
            in new technologies for the water treatment.
          </Text>
        </ItemTthree>
      </Wrapper>
    </Template>
  )
}
