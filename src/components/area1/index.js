import React from 'react'
import { Template } from '../template'
import styled from 'styled-components'
import ImgStart from '../assets/water.png'
import Button from '@material-ui/core/Button'
import { createMuiTheme } from '@material-ui/core/styles'
import { ThemeProvider } from '@material-ui/core/styles'
import { Link } from 'react-scroll'

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#e8f1f2',
    },
  },
})

const Container = styled.div`
  background: url(${ImgStart});
  background-repeat: no-repeat;
  background-size: cover;
  height: 100vh;
  width: 100vw;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
`

const Title = styled.p`
  font-weight: bold;
  font-family: 'Roboto';
  color: white;
  font-size: 3rem;
  width: 50vw;
  text-align: center;
`

export const Area1 = () => {
  return (
    <Template>
      <Container>
        <Title>How long will be the disposition of potable water in the next 30 years?</Title>
        <ThemeProvider theme={theme}>
          <Button variant="contained" color="primary">
            <Link activeClass="active" className="test1" to="statistics" spy={true} smooth={true} duration={500}>
              Read more
            </Link>
          </Button>
        </ThemeProvider>
      </Container>
    </Template>
  )
}
