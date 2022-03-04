import React from 'react'
import styled from 'styled-components'
import Pagination from '../components/Pagination'
import TableHeader from '../components/TableHeader'
import TableRows from '../components/TableRows'
import { userList } from '../utils/UsersList'

const Table = () => {
    return (
        <TableContainer>
            <div className="table_responsive">
                <table>
                    <TableHeader />
                    <tbody>
                        {userList.map((user, index) => (
                            <TableRows user={user} key={index} />
                        ))}
                    </tbody>
                </table>
            </div>
            <Pagination />
        </TableContainer>
    )
}

export default Table

const TableContainer = styled.div`
    .table_responsive {
        background: #FFFFFF;
        box-shadow: 3px 5px 20px #0000000A;
        border: 1px solid #213F7D0F;
        border-radius: 4px;
        padding: 30px;
        overflow-x: auto;
        height: max-content;

        &::-webkit-scrollbar {
            height: 6px;
            border-radius: 8px;
            background: #39CDCC10;
        }
        &::-webkit-scroll-thumb {
            border-radius: 8px;
            background: #213F7D;
            border: 1px solid black;
        }

        table {
            border-collapse: collapse;
            color: #545F7D;
            z-index: 1;
        }
    }
`