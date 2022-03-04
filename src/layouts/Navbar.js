import React from 'react'
import styled from 'styled-components'
import { IconCaretDownOutlined, IconHambuger, IconNotification, IconSearch, IconSidebarExpandLeft, IconSidebarExpandRight } from '../utils/icons'

const Navbar = ({openSidebar, toggleSidebar}) => {
    const handleSearch = (e) => {
        e.preventDefault()
    }
    return (
        <>
            <NavbarContainer>
                <div className="col1">
                    <button className='toggle' onClick={toggleSidebar}>
                        {openSidebar ?
                            <IconSidebarExpandRight />
                        :
                            <IconSidebarExpandLeft />
                        }
                    </button>
                    <img src="https://i.postimg.cc/tCW5Cmry/image.png" alt="logo" className="brand" />
                    <form onSubmit={handleSearch} className="search_form">
                        <input type="text" placeholder='Search for anything' />
                        <button><IconSearch /></button>
                    </form>
                </div>
                <div className="col2">
                    <a href="/">Docs</a>
                    <button><IconNotification /></button>
                    <div className="profile">
                        <img src="https://i.postimg.cc/dV9jGZPx/image.png" alt="Profile" />
                        <span>Adedeji</span>
                        <IconCaretDownOutlined />
                    </div>
                </div>
                <button className='toggle' onClick={toggleSidebar}>
                    <IconHambuger />
                </button>
            </NavbarContainer>
            <NavbarSpacer></NavbarSpacer>
        </>
    )
}

export default Navbar

const NavbarSpacer = styled.div`
    width: 100%;
    height: 100px;
`
const NavbarContainer = styled.div`
    height: 100px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background: #FFFFFF;
    box-shadow: 3px 0px 20px #0000000A;
    padding: 0px 30px;
    position: fixed;
    top: 0px;
    z-index: 1000;
    width: 100%;

    .toggle {
        background: none;
        border: none;
        outline: none;
        cursor: pointer;
        display: none;
        margin-right: 20px;
        color: #545F7D;

        @media(max-width: 768px) {
            display: unset;
        }

        svg {
            width: 25px;
            height: 25px;
        }
    }

    .col1 {
        width: 50%;
        display: flex;
        justify-content: space-between;
        align-items: center;

        .toggle {
            background: none;
            border: none;
            outline: none;
            cursor: pointer;
            display: none;
            margin-right: 20px;

            @media(max-width: 768px) {
                display: unset;
            }

            svg {
                width: 25px;
                height: 25px;
            }
        }

        .brand {
            width: 144px;
            height: 30px;
            object-fit: contain;
        }

        .search_form {
            width: 400px;
            display: flex;

            @media(max-width: 768px) {
                display: none;
            }
            
            input{
                flex: 1;
                outline: none;
                border: solid 1px #545F7D26;
                border-radius: 8px 0px 0px 8px;
                padding: 0px 15px;

                ::placeholder,
                ::-webkit-input-placeholder {
                    color: #545F7D;
                }
                :-ms-input-placeholder {
                    color: #545F7D;
                }
            } 
            
            button {
                width: 56px;
                height: 40px;
                background: #39CDCC;
                border: none;
                outline: none;
                border-radius: 0px 8px 8px 0px;

                svg {
                    width: 14px;
                    height: 14px;
                    color: #FFFFFF;
                }
            }
        }
    }

    .col2 {
        display: flex;
        align-items: center;

        @media(max-width: 768px) {
            display: none;
        }

        a {
            color: #213F7D;
            font-size: 16px;
            font-weight: 400px;
            margin-right: 30px;
        }

        button {
            background: none;
            border: none;
            outline: none;
            cursor: pointer;
            display: flex;
            align-items: center;
            margin-right: 30px;

            svg {
                width: 20px;
                height: 22px;
                color: #213F7D;
            }
        }

        .profile {
            display: flex;
            align-items: center;
            margin-right: 30px;

            img {
                width: 48px;
                height: 48px;
                object-fit: contain;
                border-radius: 50%;
            }

            span {
                margin: 0px 10px;
                color: #213F7D;
            }

            svg {
                width: 20px;
                height: 12px;
                color: #213F7D;
            }
        }
    }
`