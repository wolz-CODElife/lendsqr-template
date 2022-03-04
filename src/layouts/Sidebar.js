import React from 'react'
import styled from 'styled-components'
import { IconAngleDown, IconBriefcase, IconHome } from '../utils/icons'
import { menuList } from '../utils/SidebarMenu'

const Sidebar = (props) => {
    const {route} = props
  return (
      <SidebarContainer>
          <button>
              <IconBriefcase />
              <span>Switch Organization</span>
              <IconAngleDown />
          </button>
          <a href="/">
              <IconHome />
              <span>Dashboard</span>
          </a>
          {menuList.map(item => (
              <div className='category' key={item.category}>
                <p>{item.category}</p>
                {item.menu.map(menu => (
                    <a href={menu.link || "/"} key={menu.title} className={`${route.replace("/", "") === menu.title.toLowerCase() ? 'active': ''}`}>
                        {menu.icon}
                        <span>{menu.title}</span>
                    </a>
                ))}
              </div>
          ))}
      </SidebarContainer>
  )
}

export default Sidebar

const SidebarContainer = styled.div`
    min-width: 283px;
    max-width: 283px;
    height: 100%;
    overflow-y: auto;
    background: #FFFFFF;
    box-shadow: 0px 5px 20px #0000000A;
    display: flex;
    flex-direction: column;
    padding: 0px;
    padding-bottom: 120px;
    position: fixed;
    z-index: 900;

    &::-webkit-scrollbar {
        width: 6px;
        border-radius: 8px;
        background: #39CDCC10;
    }
    &::-webkit-scroll-thumb {
        border-radius: 8px;
        background: #213F7D;
        border: 1px solid black;
    }

    button {
        padding: 30px;
        text-align: left;
        border: none;
        outline: none;
        background: none;
        cursor: pointer;
        display: flex;
        align-items: center;

        svg {
            width: 16px;
            height: 16px;
            color: #213F7D;
        }

        span {
            color: #213F7D;
            font-size: 16px;
            margin: 0px 10px;
        }

        &:hover {
            background: #39CDCC10;
        }
    }

    .category {
        display: flex;
        flex-direction: column;

        p {
            padding: 10px 30px;
            color: #545F7D;
            font-size: 12px;
            font-weight: 500;
        }
    }
    
    a {
        padding: 20px 30px;
        color: #213F7D70;
        font-size: 16px;
        text-decoration: none;
        
        svg {
            width: 16px;
            height: 16px;
        }
        
        span {
            margin: 0px 10px;
        }

        &.active, 
        &:hover {
            color: #213F7D;
            background: #39CDCC09;
        }

        &.active {
            color: #213F7D;
            border-left: 3px solid #39CDCC;
        }
    }
`