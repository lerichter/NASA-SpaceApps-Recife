import React from 'react'
import Button from '@material-ui/core/Button'
import CssBaseline from '@material-ui/core/CssBaseline'
import TextField from '@material-ui/core/TextField'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import Checkbox from '@material-ui/core/Checkbox'
import { makeStyles } from '@material-ui/core/styles'
import styled from 'styled-components'

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  form: {
    width: '100%',
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}))

const Title = styled.h1`
  color: #003049;
  font-size: 3rem;
  letter-spacing: 0.2em;
  text-align: center;
  margin-top: 5rem;
  font-weight: lighter;
  font-family: 'Roboto';
`

const Wrapper = styled.div`
  width: 100vw;
  height: fit-content;

  background-color: #fafafa;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;

  padding-bottom: 90px;
`

export const Area5 = () => {
  const classes = useStyles()

  return (
    <Wrapper>
      <div className={classes.paper}>
        <Title>Contact Us</Title>

        <form className={classes.form} noValidate>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
          />
          <TextField variant="outlined" margin="normal" required fullWidth name="Name" label="Name" type="text" id="name" />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="Message"
            label="Message"
            type="text"
            id="message"
            multiline
            rows={10}
          />
          <FormControlLabel control={<Checkbox value="remember" color="primary" />} label="Remember me" />
          <Button type="submit" fullWidth variant="contained" color="primary" className={classes.submit}>
            Send message
          </Button>
        </form>
      </div>
    </Wrapper>
  )
}
