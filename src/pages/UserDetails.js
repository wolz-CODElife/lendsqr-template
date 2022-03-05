import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import UserInformation from '../layouts/UserInformation'
import UserProfile from '../layouts/UserProfile'
import { IconLongLeft, IconSpinner } from '../utils/icons'
import { userList } from '../utils/UsersList'

const UserDetails = () => {
    const userId = document.location.pathname.split("/")[2]
    const [userData, setUserData] = useState(null)

    useEffect(() => {
        let newUser = userList.filter(item => item.id === userId)
        setUserData(newUser[0])
    }, [userId])

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
        {userData ?
            <>
            <UserProfile userData={userData} />
            <UserInformation userData={userData} />
            </>  
          :
            <Loader>
                <IconSpinner />
            </Loader>
        }
      </UserDetailsContainer>
  )
}

export default UserDetails

const UserDetailsContainer = styled.div`
    padding: 70px 60px;
    
    @media(max-width: 1100px) {
        padding: 30px;
    }

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

        @media(max-width: 950px) {
            flex-direction: column;
        }

        h1 {
            color: #213F7D;
            font-size: 24px;
            font-weight: 500;
        }

        .btns {
            display: flex;
            margin: 10px 0px;

            @media(max-width: 445px) {
                flex-direction: column;
                align-items: center;
                justify-content: center;
            }

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
                
                @media(max-width: 445px) {
                    margin-left: unset;
                    margin-bottom: 10px;
                }
                
                &:nth-of-type(2) {
                    border: 1px solid #39CDCC;
                    color: #39CDCC;
                }
            }
        }
    }
`



const Loader = styled.div`
    width: 100%;
    min-height: 40vh;
    display: flex;
    align-items: center;
    justify-content: center;

    svg {
        width: 80px;
        height: 80px;
        color: #545F7D;
        animation: rotate 2s linear infinite;

        @keyframes rotate {
            100% {
              transform: rotate(360deg);
            }
        }
    }
`