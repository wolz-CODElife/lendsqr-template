import React from 'react'
import styled from 'styled-components'

const Table = () => {
    return (
        <TableContainer>
            <div className="table_responsive">
                <table></table>
            </div>
        </TableContainer>
    )
}

export default Table

const TableContainer = styled.div`
    .table_responsive {

    }
`