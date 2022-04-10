import React, { ChangeEvent, useState } from 'react';
import { useNavigate } from 'react-router-dom'
import { Authentication } from '../../../domain/usecases/authentication';
import AppFooter from '../../components/app-footer/app-footer';
import AppHeader from '../../components/app-header/app-header';
import Button from '../../components/button/button';
import Input from '../../components/input/input';
import './login.css';

type Props = {
  authentication: Authentication
}

const Login: React.FC<Props> = ({ authentication }) => {
  const navigate = useNavigate()
  const [state, setState] = useState({
    isLoading: false,
    email: '',
    password: '',
    emailError: '',
    passwordError: '',
    mainError: ''
  })

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>): Promise<void> => {
    event.preventDefault()
    try {
      if (state.isLoading || state.emailError || state.passwordError) {
        return
      }
      setState({ ...state, isLoading: true })
      const account = await authentication.auth({
        email: state.email,
        password: state.password
      })
      localStorage.setItem('accessToken', account.token)
      navigate('/')
    } catch (error: any) {
      setState({
        ...state,
        isLoading: false,
        mainError: error.message
      })
    }
  }

  return (
    <div className="Login overflow-container">
      <AppHeader />
      <div className="Login-content">
        <h2>Sign-in</h2>
        <form data-testid="form" className="Login-form" onSubmit={handleSubmit}>
          <Input type="email" name="email" placeholder="Type your e-mail" onChange={handleChange} value={state.email} />
          <Input type="password" name="password" placeholder="Type your password" onChange={handleChange} value={state.password} />
          <Button className="Login-submit" type="submit">Log in</Button>
        </form>
      </div>
      <AppFooter />
    </div>
  );
}

export default Login;
