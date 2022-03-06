import React from 'react'
import styled from 'styled-components'
import { usersCardsList } from '../utils/UsersCardsLists'

const UsersCards = () => {
    return (
        <Cards>
            {usersCardsList.map(item => (
                <div key={item.title} className="card">
                    <span style={{ color: item.color, background: `${item.color}15`}}>{item.icon}</span>
                    <p>{item.title}</p>
                    <h2>{item.count}</h2>
                </div>
            ))}
        </Cards>
    )
}

export default UsersCards

const Cards = styled.div`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    margin: 40px 0px;

    .card {
        background: #FFFFFF;
        box-shadow: 3px 5px 20px #0000000A;
        border: 1px solid #213F7D0F;
        border-radius: 4px;
        padding: 20px 30px;
        height: 160px;
        width: 220px;
        max-width: 50%;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        margin: 10px auto;

        @media(max-width: 370px) {
            padding: 10px 15px;
        }

        @media(max-width: 300px) {
            padding: 20px 30px;
            max-width: unset;
            min-width: 100%;
        }

        span {
            width: 40px;
            height: 40px;
            display: flex;
            align-items: center;
            justify-content: center;
            border-radius: 50%;

            svg {
                width: 15px;
                height: 15px;
            }
        }

        p {
            color: #545F7D;
            font-size: 14px;
        }

        h2 {
            color: #213F7D;
            font-weight: 600;
            font-size: 24px;
        }
    }
    
`