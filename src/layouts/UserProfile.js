import React from 'react'
import styled from 'styled-components'
import { IconStarPurple500 } from '../utils/icons'

const UserProfile = () => {
  return (
      <UserHeader>
          <div className="profile">
              <img src="https://i.postimg.cc/Kzv5mC22/image.png" alt="profile" />
              <div className="col">
                  <h1>Grace Effiom</h1>
                  <p>LSQFf587g90</p>
              </div>
              <div className="col">
                  <p>User’s Tier</p>
                  <p>
                      <IconStarPurple500 />
                      <IconStarPurple500 />
                      <IconStarPurple500 />
                  </p>
              </div>
              <div className="col">
                  <h1>₦200,000.00</h1>
                  <p>9912345678/Providus Bank</p>
              </div>
          </div>
          <div className="nav">
              <button className='active'>General Details</button>
              <button>Documents</button>
              <button>Bank Details</button>
              <button>Loans</button>
              <button>Savings</button>
              <button>App and System</button>
          </div>
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

    .profile {
        display: flex;
        align-items: center;
        margin-bottom : 50px;

        img {
            width: 100px;
            height: 100px;
            border-radius: 50%;
        }

        .col {
            padding: 0px 30px;
            height: 80px;
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            justify-content: center;

            &:nth-of-type(2) {
                border-left: 1px solid #545F7D75;
                border-right: 1px solid #545F7D75;
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
                    
                    &:first-of-type {
                        color: #E9B200;
                    }
                }
            }
        }
    }

    .nav {
        display: flex;
        justify-content: space-between;

        button {
            color: #000000CC;
            background: none;
            border: none;
            outline: none;
            cursor: pointer;
            padding: 10px;

            &.active {
                color: #39CDCC;
                border-bottom: 2px solid #39CDCC;
            }
        }
    }
`