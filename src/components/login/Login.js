import React from 'react'
import { ModalBackdrop } from '../style/styled'
import './Login.css'
import LoginModal from './LoginModal'

function Login() {
    return (
        <div>
            <ModalBackdrop>
                <LoginModal/>
            </ModalBackdrop>
            
        </div>
    )
}

export default Login
