import React, {useState} from 'react'
import { ModalView, StyledButton} from '../style/styled'
import login from '../../image/login.jpg'
import Input from './Input'
import {Link} from 'react-router-dom'


function LoginModal() {

    const [isEmail, setIsEmail] = useState("")
    const [isPassword, setIsPassword] = useState("")

    const emailHandler = (e) =>{
        setIsEmail(e.target.value)
    }

    const passwordHandler = (e) => {
        setIsPassword(e.target.value)
    }
    return (
        <div>
            <ModalView>
               <img src = {login} alt = 'login' className = 'login'/>
               <div>
                    <h1 className = 'login-h1'> Touch</h1>
                    <div className = 'login-h2'>Login</div>
                    <Input className = 'email'
                      label="email"
                      type="email"
                      onChange = {emailHandler}
                      value = {isEmail}
                     />
                     <Input className = 'password'
                   label="password"
                    type="password"
                    onChange = {passwordHandler}
                    value = {isPassword}
                     />
                     <StyledButton>로그인</StyledButton>
                     <p>아직 회원이 아니신가요 ?</p>
                     <Link to = '/signup' className = 'link'><div className = 'move-to-signup'>회원가입하기</div></Link>
               </div>
               {console.log(isEmail)}
               {console.log(isPassword)}
              
            </ModalView>
        </div>
    )
}

export default LoginModal
