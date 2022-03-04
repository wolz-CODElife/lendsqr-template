import React, { useState } from 'react'
import styled from 'styled-components'

const Login = () => {
    const [showPass, setShowPass] = useState(false)


    const RevealPassword = (e) => {
        e.preventDefault()
        setShowPass(!showPass)
    }
    const handleLogin = (e) => {
        e.preventDefault()
        window.location.assign("/users")
    }
  return (
      <>
        <Brand>
            <img src="https://i.postimg.cc/tCW5Cmry/image.png" alt="Logo" />
        </Brand>
        <LoginPage>
            <div className="illustration">
                <img src="https://i.postimg.cc/tCW5Cmry/image.png" alt="Logo" className='logo' />
                <img src="https://i.postimg.cc/prnmC49d/image.png" alt="Illustration" className='board' />
            </div>
            <div className="form">
                <div>
                    <h1>Welcome!</h1>
                    <p>Enter details to login.</p>
                    <form onSubmit={handleLogin}>
                        <div className="form-field">
                            <input type="email" placeholder='Email' />
                        </div>
                        <div className="form-field">
                            <input type={showPass ? "text" : "password"} placeholder='Password' />
                            <button className='show_btn' onClick={RevealPassword}>Show</button>
                        </div>
                        <a href="/">Forgot PASSWORD?</a>
                        <button className='login_btn'>LOG IN</button>
                    </form>
                </div>
            </div>
        </LoginPage>
      </>
  )
}

export default Login

const Brand = styled.div`
    padding: 50px;
    display: none;

    img {
        width: 173.76px;
        height: 36px;
    }

    @media (max-width: 768px) {
        display: block;
    }
`
const LoginPage = styled.div`
    display: flex;
    margin-left: -283px;
    min-height: 100vh;

    @media (max-width: 768px) {
        margin-left: 0px;
        flex-direction: column-reverse;
    }

    .illustration {
        width: 50%;
        display: flex;
        flex-direction: column;
        padding: 97px 107px;
        
        @media (max-width: 768px) {
            padding: 50px;
            width: 100%;
            .logo {
                display: none;
            }
        }

        .logo {
            width: 173.76px;
            height: 36px;
        }

        .board {
            flex: 1;
            margin-top: 139px;
            object-fit: contain;
            max-width: 600px;
            max-height: 337.57px;
            
            @media (max-width: 768px) {
                margin-top: 0px;
            }
        }
    }

    .form {
        width: 50%;
        padding: 150px 100px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        background: #FFFFFF;
        box-shadow: 0px -3px 20px #0000000A;
        
        @media (max-width: 880px) {
            padding: 50px;
        }

        @media (max-width: 768px) {
            width: 100%;
        }

        h1 {
            font-weight: 700;
            font-size: 40px;
            color: #213F7D;
        }
        p {
            font-size: 20px;
            font-weight: 400px;
            color: #545F7D;
        }
        
        form {
            margin: 60px 0px;
            width: 100%;
        }

        .form-field {
            width: 100%;
            max-width: 447px;
            margin-bottom: 24px;
            position: relative;
            border: solid 2px #545F7D26;
            border-radius: 5px;
                
            @media (max-width: 768px) {
                max-width: 100%;
                
                input {
                    max-width: 100%;
                }
            }
            
            input {
                width: 100%;
                max-width: 447px;
                height: 50px;
                padding: 0px 15px;
                color: #000000;
                border: none;
                outline: none;
                background: none;

                ::placeholder,
                ::-webkit-input-placeholder {
                    color: #545F7D;
                }
                :-ms-input-placeholder {
                    color: #545F7D;
                }
            }

            .show_btn {
                position: absolute;
                right: 10px;
                top: 30%;
                background: none;
                border: none;
                outline: none;
                color: #39CDCC;
                cursor: pointer;
            }
        }
        
        a {
            display: block;
            color: #39CDCC;
            text-decoration: none;
            font-weight: 600px;
            font-size: 12px;
        }

        .login_btn {
            background: #39CDCC;
            color: #FFFFFF;
            width: 100%;
            border: none;
            outline: none;
            border-radius: 8px;
            height: 48px;
            margin-top: 30px;
            font-size: 14px;
            font-weight: 600;
        }
    }
`