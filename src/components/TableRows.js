import React, { useState } from 'react'
import styled from 'styled-components'
import { IconEyeOutline, IconMenuKebab, IconUserCheck, IconUserX } from '../utils/icons'

const TableRows = ({user}) => {
    const {organization, username, email, phone, date, status} = user
    const [popOpen, setPopOpen] = useState(false)

    const statusColor = {
        Active : "#39CD62",
        Inactive: "#545F7D",
        Pending: "#E9B200",
        Blacklisted: "#E4033B"
    }
    const handleOpenPop = (e) => {
        e.preventDefault()
        if(popOpen) {
            setPopOpen(false)
        }
        else{
            setPopOpen(true)
        }
    }

    
    let closingTimer
    let closingInterval = 1000

    const handleClosePop = (e) => {
        e.preventDefault()
        clearTimeout(closingTimer)
        closingTimer = setTimeout(() => {
            setPopOpen(false)
        }, closingInterval);
    }
    
    const handleOpening = () => {
        clearTimeout(closingTimer)
    }
    return (
        <>
            <TR>
                <td>{organization}</td>
                <td>{username}</td>
                <td>{email}</td>
                <td>{phone}</td>
                <td>{date}</td>
                <td>
                    <span style={{ color: statusColor[`${status}`], background: statusColor[`${status}`] + "15" }}>
                        {status}
                    </span>
                </td>
                <td>
                    <button onClick={handleOpenPop}><IconMenuKebab /></button>
                    {popOpen &&
                        <Popover onMouseLeave={handleClosePop} onMouseEnter={handleOpening}>
                            <a href={`/users/${username}`}><IconEyeOutline /> View Details</a>
                            <a href="/"><IconUserX /> Blacklist User</a>
                            <a href="/"><IconUserCheck /> Activate User</a>
                        </Popover>
                    }
                </td>
            </TR>
        </>

    )
}

export default TableRows

const TR = styled.tr`
    border-bottom: 1px solid #213F7D1A;
    height: 60px;
    position: relative;
    

    td {
        white-space: nowrap;
        padding-right: 45px;

        span {
            border-radius: 100px;
            padding: 5px 10px;
        }

        button {
            background: none;
            border: none;
            outline: none;
            cursor: pointer;

            svg {
                width: 20px;
                height: 20px;
                color: #545F7D;
            }
        }
    }

    &:last-of-type {
        border-bottom: none;
    }
`
const Popover = styled.div`
    position: absolute;
    right: 10px;
    background: #FFFFFF;
    box-shadow: 3px 5px 20px #0000000A;
    border: 1px solid #213F7D0F;
    border-radius: 4px;
    padding: 20px 30px;
    z-index: 100;
    display: flex;
    flex-direction: column;

    a {
        color: #545F7D;
        text-decoration: none;
        display: flex;
        align-items: center;
        margin: 10px 0px;

        svg {
            width: 15px;
            height: 15px;
            margin-right: 10px;
        }
    }
`