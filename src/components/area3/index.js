import React from 'react'
import { Template } from '../template'
import science from '../assets/science.svg'
import { Wrapper, Title, ContentImg, ContentText, Text } from './styled'

export const Area3 = () => {
  return (
    <Template>
      <Wrapper>
        <Title>Reverse osmosis desalination</Title>
        <ContentImg>
          <img alt="" src={science}></img>
        </ContentImg>
        <ContentText>
          <Text>
            In general, reverse osmosis has as main advantages the low energy consumption and the low initial investment and
            operating cost. But there is a problem, the current reverse osmosis membranes do not offer the desired levels of
            permeability, in addition to propensity to scale.
          </Text>
          <Text>
            The thickness of the layer of the polymeric membranes can limit the permeability, while the encrustation causes,
            among others, the decrease of the salt rejection capacity of the membrane.
          </Text>
        </ContentText>
      </Wrapper>
    </Template>
  )
}
