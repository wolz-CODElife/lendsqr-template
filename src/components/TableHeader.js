import React, { useState } from 'react'
import styled from 'styled-components'
import { IconFilterList } from '../utils/icons'

const TableHeader = () => {
    const [openFilter, setOpenFilter] = useState(false)
    return (
        <TableHeaderContainer>
            <tr>
                <th>
                    <button className='btn' onClick={() => setOpenFilter(!openFilter)}>organization <IconFilterList /></button>
                    {openFilter &&
                        <FilterPop>
                            <div className="field">
                                <label htmlFor="org">Organization</label>
                                <select id="org">
                                    <option value="">Select</option>
                                    <option value="Lendsqr">Lendsqr</option>
                                </select>
                            </div>
                            <div className="field">
                                <label htmlFor="user">Username</label>
                                <input type="text" id='user' placeholder='User' />
                            </div>
                            <div className="field">
                                <label htmlFor="email">Email</label>
                                <input type="text" id='email' placeholder='Email' />
                            </div>
                            <div className="field">
                                <label htmlFor="date">Date</label>
                                <input type="date" id='date' placeholder='Date' />
                            </div>
                            <div className="field">
                                <label htmlFor="phone">Phone Number</label>
                                <input type="tel" id='phone' placeholder='Phone Number' />
                            </div>
                            <div className="field">
                                <label htmlFor="status">Status</label>
                                <select id="status">
                                    <option value="">Select</option>
                                    <option value="Active">Active</option>
                                    <option value="Inactive">Inactive</option>
                                    <option value="Pending">Pending</option>
                                    <option value="Blacklisted">Blacklisted</option>
                                </select>
                            </div>
                            <div className="btns">
                                <button type="reset">Reset</button>
                                <button type="submit">Filter</button>
                            </div>
                        </FilterPop>
                    }
                </th>
                <th>
                    <button className='btn' onClick={() => setOpenFilter(!openFilter)}>Username <IconFilterList /></button>
                </th>
                <th>
                    <button className='btn' onClick={() => setOpenFilter(!openFilter)}>Email <IconFilterList /></button>
                </th>
                <th>
                    <button className='btn' onClick={() => setOpenFilter(!openFilter)}>Phone number <IconFilterList /></button>
                </th>
                <th>
                    <button className='btn' onClick={() => setOpenFilter(!openFilter)}>Date joined <IconFilterList /></button>
                </th>
                <th>
                    <button className='btn' onClick={() => setOpenFilter(!openFilter)}>Status <IconFilterList /></button>
                </th>
                <th></th>
            </tr>
        </TableHeaderContainer>
    )
}

export default TableHeader

const TableHeaderContainer = styled.thead`   
    th {
        width: max-content;
        white-space: nowrap;
        position: relative;
    }

    .btn {
        background: none;
        border: none;
        outline: none;
        margin-right: 35px;
        text-transform: uppercase;
        text-align: left;
        font-size: 12px;
        font-weight: 600;
        display: flex;
        align-items: center;
        color: #545F7D;
        padding: 20px 0px;
        cursor: pointer;

        svg {
            width: 16px;
            height: 16px;
            margin: 0px 10px;
        }
    }
`

const FilterPop = styled.form`
    position: absolute;
    width: 270px;
    left: 20px;
    background: #FFFFFF;
    box-shadow: 3px 5px 20px #0000000A;
    border: 1px solid #213F7D0F;
    border-radius: 4px;
    padding: 20px 30px;
    z-index: 100;
    display: flex;
    flex-direction: column;
    
    .field {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        margin-bottom: 20px;
        
        label {
            font-weight: 500;
            font-size: 14px;
            margin-bottom: 5px;
        }

        input, select {
            height: 40px;
            width: 100%;
            padding: 0px 15px;
            outline: none;
            border: solid 1px #545F7D26;
            border-radius: 8px;
        }
    }
    .btns {
        display: flex;
        justify-content: space-between;
        flex-direction: row;

        button {
            background: none;
            border: 1px solid #545F7D;
            outline: none;
            font-size: 14px;
            font-weight: 600;
            color: #545F7D;
            padding: 10px 0px;
            cursor: pointer;
            width: 98px;
            height: 40px;
            border-radius: 8px;
            
            &:nth-of-type(2) {
                border: none;
                background: #39CDCC;
                color: #FFFFFF;
            }
        }
    }
`