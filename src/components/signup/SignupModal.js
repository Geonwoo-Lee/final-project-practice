import React, {useState} from 'react'
import login from '../../image/login.jpg'
import Input from '../login/Input'
import {Link} from 'react-router-dom'
import { ModalView, StyledButton} from '../style/styled'
import './Signup.css'

function SignupModal() {

    const [isEmail, setIsEmail] = useState("")
    const [isPassword, setIsPassword] = useState("")
    const [passwordCheck, setPasswordCheck] = useState("")
    const [isNickName, setIsNickName] = useState("")


    const nickNameHandler = (e) => {
        setIsNickName(e.target.value)
    }
    const emailHandler = (e) =>{
        setIsEmail(e.target.value)
    }

    const passwordHandler = (e) => {
        setIsPassword(e.target.value)
    }

    const checkPasswordHandler = (e) => {
        setPasswordCheck(e.target.value)
    }
    
    return (
        <div>
            <ModalView>
               <div>
                    <div className = 'signin-h1'> Touch</div>
                    <div className = 'signin-h2'>Sign Up</div>
                    <Input className = 'signin-password'
                   label="Nickname"
                    type="text"
                    onChange = {nickNameHandler}
                    value = {isNickName}
                     />
                    <Input className = 'signin-email'
                      label="email"
                      type="email"
                      onChange = {emailHandler}
                      value = {isEmail}
                     />
                     <Input className = 'signin-password'
                   label="password"
                    type="password"
                    onChange = {passwordHandler}
                    value = {isPassword}
                     />
                      <Input className = 'signin-password'
                   label="password check"
                    type="password"
                    onChange = {checkPasswordHandler}
                    value = {passwordCheck}
                     />
                     <div>asdasdas</div>
                     <StyledButton>회원가입</StyledButton>
                     <p>이미 회원 이신가요 ?</p>
                     <Link to = '/login' className = 'link'><div className = 'move-to-signup'>로그인 하기</div></Link>
               </div>
               {console.log(isEmail)}
               {console.log(isPassword)}
               <img src = {login} alt = 'login' className = 'signup'/>
            </ModalView>
        </div>
    )
}

export default SignupModal
