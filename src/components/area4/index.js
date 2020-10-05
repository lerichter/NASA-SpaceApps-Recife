import React from 'react'
import { Template } from '../template'
import styled from 'styled-components'
import Graphene from '../assets/graphene.svg'
import Light from '../assets/light.svg'
import MembraneImg from '../assets/membrane.png'
import LogoNasa from '../assets/nasa.png'
import DataImage from '../assets/wwpre.png'

const Wrapper = styled.div`
  width: 100vw;

  background-color: white;

  display: flex;
  align-items: center;
  flex-wrap: wrap;

  padding-bottom: 15vh;
`

const Title = styled.h1`
  color: #003049;
  font-size: 3rem;
  letter-spacing: 0.2em;
  font-weight: lighter;
`

const BaseFlex = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  margin-bottom: 5rem;
`

const ImgTest = styled.img`
  width: 5%;
`

const Box = styled.div`
  width: 20vw;
  height: 80vh;
  background-color: #003049;
  display: flex;
  flex-direction: column;
  border-radius: 10px;
  align-items: center;

  &:hover {
    opacity: 0.9;
  }
`
const BlocksContainer = styled.div`
  display: flex;
  width: 100vw;
  justify-content: space-evenly;
  margin-bottom: 2rem;
`

const TitleBlock = styled.h2`
  color: white;
  font-family: 'Roboto';
  font-size: 2rem;
  text-align: center;
  font-weight: lighter;
  letter-spacing: 0.1rem;
`

const TextBlock = styled.p`
  font-weight: lighter;
  font-family: 'Roboto';
  line-height: 1.5rem;
  width: 15vw;
  color: white;
  letter-spacing: 0.1rem;
  font-size: 0.875rem;
`

const SolutionDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin-top: 5rem;
  margin-bottom: 5rem;
`

const SolutionSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  width: 100vw;
`

const LightImg = styled.img`
  width: 25%;
  margin-bottom: 3rem;
`

const MembraneImage = styled.img`
  width: 35%;
  margin-bottom: 3rem;
`

const NasaImgLogo = styled(MembraneImage)`
  width: 45%;
`

const MembraneSection = styled.div`
  display: flex;
  flex-direction: column;
  width: 45vw;
  height: 60vh;
  align-items: center;
`

const SubTitle = styled.h1`
  color: #003049;
  font-size: 2rem;
  letter-spacing: 0.2em;
  margin-top: 5rem;
  font-weight: lighter;
`
const TextBase = styled.p`
  color: #003049;
  font-size: 0.875rem;
  line-height: 2rem;
  margin-top: 2rem;
  font-family: 'Roboto';
`

const TextWidth = styled(TextBase)`
  width: 40vw;
`
export const Area4 = () => {
  return (
    <Template>
      <Wrapper>
        <BaseFlex>
          <Title>Graphene</Title>
          <ImgTest src={Graphene} />
        </BaseFlex>
        <BlocksContainer>
          <Box>
            <TitleBlock>Characteristics</TitleBlock>
            <TextBlock>
              Graphene is the name for an atom-thick honeycomb sheet of carbon atoms. It i the building block for other
              graphitic materials. Harder than diamond yet more elastic than rubber. Graphene is the strongest known material.
            </TextBlock>
          </Box>
          <Box>
            {' '}
            <TitleBlock>Why Graphene?</TitleBlock>
            <TextBlock>
              Your electricity condutivity is 100x more fast than copper. <br />
              Is waterproof! <br />
              Very light and thin. <br />
              Can be made by any carbon material. <br />
              It self-repair! <br />
              With membrane it can filter nanoparticles, organic molecules and large salt crystals.
            </TextBlock>
          </Box>
          <Box>
            {' '}
            <TitleBlock>Graphene as Desalination</TitleBlock>
            <TextBlock>
              The main idea is that we can decrease the high cost of desalination using membranes with graphene. We know
              nowadays that we have some ways to desalination that cost too much. The graphene or graphene oxide, is a way to
              democratize that idea and save affected regions that have not potable water enough.
            </TextBlock>
          </Box>
        </BlocksContainer>

        <SolutionDiv>
          <Title>Graphene and the Water Tracking</Title>
        </SolutionDiv>
        <SolutionSection>
          <NasaImgLogo src={LogoNasa} />
          <MembraneSection>
            <SubTitle>Nasa Data</SubTitle>
            <TextBase>
              Nasa have been tracking the water around the world. NASA’s Earth Science Division studies fresh water using data
              collected in many ways, including satellites, airborne missions and even information collected by volunteers. When
              we talk about <strong>water</strong> we can talk about precipitation and how we can protect it as it cycles around
              our world.
            </TextBase>
          </MembraneSection>
        </SolutionSection>
        <SolutionSection>
          <TextWidth>
            In 2019, scientists released a worldwide precipitation data set that compiled more than 20 years of satellite and
            other data. It is based significantly on information collected by the joint NASA and Japan Aerospace Exploration
            Agency (JAXA) project the Global Precipitation Measurement mission (GPM) and an earlier, precursor NASA-JAXA
            satellite mission the Tropical Rainfall Measurement Mission (TRMM).
          </TextWidth>
          <MembraneSection>
            <SubTitle>Integrating the graphene</SubTitle>

            <TextWidth>
              With the satellites we can unify our product to these water trackers. It means that we can track outdated potable
              water regions and apply the graphene membrane to preserve those regions. "Water is a precious resource on this
              planet, and one that NASA is at the cutting edge of monitoring"(Bradley Doorn). <br />
              "When it Comes to Water, You Have to Think Global".
            </TextWidth>
          </MembraneSection>
        </SolutionSection>

        <SolutionDiv>
          <Title>Solution</Title>
        </SolutionDiv>
        <SolutionSection>
          <LightImg src={Light} />
          <MembraneSection>
            <SubTitle>Membrane</SubTitle>
            <TextBase>
              Membrane Process Separation has been contrasting when compared to others tecnhologies that envolving separation
              process. The membrane can be defined as a selective barrier that separates two phrases, restricting the passage of
              chemical species.
            </TextBase>
          </MembraneSection>
        </SolutionSection>

        <SolutionSection>
          <MembraneSection>
            <SubTitle>Graphene Membranes</SubTitle>
            <TextBase>
              The graphene membranes are more appropriate than the conventional membranes for the desalination process. The
              potencial of these membranes can overcome traditional membranes because the graphene has pontencial to overcome
              the chlorine permeability limit, selectivity and vulnerability. That's the main challenge of using the Reverse
              Osmosis Membrane and nanofiltration. This is why the Graphehe Membrane are excellent candidates as material base
              for the next generations of water purification membranes.
            </TextBase>
          </MembraneSection>
          <MembraneImage src={MembraneImg} />
        </SolutionSection>
      </Wrapper>
    </Template>
  )
}
