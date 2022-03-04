import React from 'react'
import styled from 'styled-components'
import UserInformation from '../layouts/UserInformation'
import UserProfile from '../layouts/UserProfile'
import { IconLongLeft } from '../utils/icons'

const UserDetails = () => {
  return (
      <UserDetailsContainer>
          <div className='nav'>
              <a href="/users"><IconLongLeft /> Back to Users</a>
          </div>
          <div className="header">
              <h1>User Details</h1>
              <div className="btns">
                  <button>Blacklist User</button>
                  <button>Activate User</button>
              </div>
          </div>

          <UserProfile />
          <UserInformation />
      </UserDetailsContainer>
  )
}

export default UserDetails

const UserDetailsContainer = styled.div`
    padding: 70px 60px;

    .nav {
        a {
            display: flex;
            align-items: center;
            text-decoration: none;
            color: #545F7D;

            svg {
                width: 25px;
                height: 20px;
                margin-right: 10px;
            }
        }
    }

    .header {
        margin: 30px 0px;
        display: flex;
        justify-content: space-between;
        align-items: center;

        h1 {
            color: #213F7D;
            font-size: 24px;
            font-weight: 500;
        }

        .btns {
            button {
                background: #FFFFFF;
                border-radius: 8px;
                width: 170px;
                height: 40px;
                border: 1px solid #E4033B;
                outline: none;
                cursor: pointer;
                color: #E4033B;
                margin-left: 20px;
                
                &:nth-of-type(2) {
                    border: 1px solid #39CDCC;
                    color: #39CDCC;
                }
            }
        }
    }
`