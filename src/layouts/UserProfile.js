import React, { useState } from 'react'
import styled from 'styled-components'
import { IconDropDown, IconStarPurple500 } from '../utils/icons'

const UserProfile = ({userData}) => {
    const [openNav, setOpenNav] = useState(false)
    const maxWidth = window.matchMedia("(max-width: 1100px)")
    const stars = [1, 2, 3]

    return (
        <UserHeader>
            <div className="profile">
                <div className='column'>
                    <img src={`${ userData.avatar || "https://i.postimg.cc/Kzv5mC22/image.png"}`} alt="profile" />
                    <div className="col">
                        <h1>{userData.fullName}</h1>
                        <p>{userData.id}</p>
                    </div>
                </div>
                <div className='column'>
                    <div className="col center">
                        <p>User’s Tier</p>
                        <p>
                            {stars.map(star => {
                                if(star < userData.tier + 1){
                                    return (
                                        <span className="active" key={star}>
                                            <IconStarPurple500 />
                                        </span>
                                    )
                                }
                                else {
                                    return (
                                        <IconStarPurple500 key={star} />
                                    )
                                }
                            })}
                        </p>
                    </div>
                    <div className="col">
                        <h1>{userData.balance}</h1>
                        <p>{userData.accountNumber}/{userData.bank}</p>
                    </div>
                </div>
            </div>
            <button className='nav_prev' onClick={() => setOpenNav(!openNav)}><IconDropDown /></button>
            {maxWidth.matches ?
                openNav &&
                <div className="nav">
                    <button className='active'>General Details</button>
                    <button>Documents</button>
                    <button>Bank Details</button>
                    <button>Loans</button>
                    <button>Savings</button>
                    <button>App and System</button>
                </div>
            :
                <div className="nav">
                    <button className='active'>General Details</button>
                    <button>Documents</button>
                    <button>Bank Details</button>
                    <button>Loans</button>
                    <button>Savings</button>
                    <button>App and System</button>
                </div>
            }
        </UserHeader>
    )
}

export default UserProfile

const UserHeader = styled.div`
    padding: 30px;
    padding-bottom: 0px;
    background: #FFFFFF;
    box-shadow: 3px 5px 20px #0000000A;
    border: 1px solid #213F7D0F;
    border-radius: 4px;
    position: relative;
        
    @media(max-width: 1100px) {
        padding-bottom: 30px;
    }

    .profile {
        display: flex;
        align-items: center;
        margin-bottom : 50px;
        
        @media(max-width: 1100px) {
            flex-direction: column;
            margin-bottom : 0px;
        }

        img {
            width: 100px;
            height: 100px;
            border-radius: 50%;
        }
        
        .column {
            display: flex;
            align-items: center;
        
            @media(max-width: 1100px) {
                flex-direction: column;
            }
        }

        .col {
            padding: 0px 30px;
            height: 80px;
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            justify-content: center;
        
            @media(max-width: 1100px) {
                align-items: center;
            }

            &.center {
                border-left: 1px solid #545F7D75;
                border-right: 1px solid #545F7D75;

                @media(max-width: 1100px) {
                    border: none;
                }
            }

            h1 {
                color: #213F7D;
                font-size: 22px;
                font-weight: 500;
            }

            p {
                color: #213F7D;
                font-size: 12px;


                svg {
                    color: #FFFFFF;
                    stroke: #E9B200;
                    width: 15px;
                    height: 15px;
                    
                }
                .active {
                    svg {
                        color: #E9B200;
                    }
                }
            }
        }
    }

    .nav_prev {
        display: none;
        width: 100%;
        background: #39CDCC;
        border-radius: 8px;
        border: none;
        outline: none;
        cursor: pointer;
        color: #FFFFFF;
        height: 40px;

        @media(max-width: 1100px) {
            display: unset;
        }
    }

    .nav {
        display: flex;
        justify-content: space-between;

        @media(max-width: 1100px) {
            position: absolute;
            flex-direction: column;
            right: 30px;
            margin-top: 5px;
            background: #FFFFFF;
            box-shadow: 3px 5px 20px #0000000A;
            border: 1px solid #213F7D0F;
            border-radius: 4px;
        }

        button {
            color: #000000CC;
            background: none;
            border: none;
            outline: none;
            cursor: pointer;
            padding: 10px;
            
            @media(max-width: 1100px) {
                width: 200px;
            } 

            &.active {
                color: #39CDCC;
                border-bottom: 2px solid #39CDCC;
            }
        }
    }
`