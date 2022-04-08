import React from 'react'
import Login from '../../../presentation/pages/login/login'
import { makeRemoteAuthentication } from '../usecases/remote-authentication-factory'

export const makeLogin: React.FC = () => {
    return (
        <Login
            authentication={makeRemoteAuthentication()}
        />
    )
}
