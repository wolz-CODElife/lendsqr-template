import React from 'react'
import styled from 'styled-components'
import { IconAngleLeftB, IconAngleRightB } from '../utils/icons'

const Pagination = () => {
  return (
      <PaginationSection>
          <div className="details">
              <p>Showing</p>
              <select>
                  <option value="100">100</option>
                  <option value="200">200</option>
                  <option value="300">300</option>
                  <option value="400">400</option>
                  <option value="500">500</option>
              </select>
              <p>out of 100</p>
          </div>

          <div className="nav">
              <button><IconAngleLeftB /></button>
              <button className='active'>1</button>
              <button>2</button>
              <button>3</button>
              <span>...</span>
              <button>15</button>
              <button>16</button>
              <button><IconAngleRightB /></button>
          </div>
      </PaginationSection>
  )
}

export default Pagination

const PaginationSection = styled.div`
    margin: 25px 0px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    
    .details {
        display: flex;
        align-items: center;

        select {
            margin: 0px 10px;
            background: #213F7D1A;
            color: #213F7D;
            border-radius: 4px;
            padding: 5px 10px;
            outline: none;
            border: none;
        }
    }

    .nav {
        display: flex;
        align-items: center;

        span{
            color: #545F7D75;
        }

        button {
            background: none;
            border: none;
            outline: none;
            color: #545F7D75;
            display: flex;
            align-items: center;
            justify-content: center;
            cursor: pointer;
            margin: 0px 10px;
            
            &.active {
                color: #545F7D;
            }
            
            &:nth-of-type(1),
            &:last-of-type {
                width: 24px;
                height: 24px;
                background: #545F7D15;
                color: #545F7D;
                border-radius: 4px;
            }
        }
    }
`