import styled from 'styled-components'
import {Link as LinkRouter} from 'react-router-dom'
import {Link as LinkScroll} from 'react-scroll'
import{ FaTimes } from 'react-icons/fa'

export const SidebarContainer = styled.aside`
    position: fixed;
    z-index: 999;
    width: 100%;
    height: 100%;
    background: #0d0d0d;
    display: grid;
    align-items: center;
    top: 0;
    left: 0;
    transition: 0.3s all ease-in-out;
    opacity: ${({ isOpen }) => (isOpen ? '100%' : '0')};
    top: ${({ isOpen }) => (isOpen ? '0' : '-100%')};
`

export const Icon = styled.div`
    position: absolute;
    top: 1.2rem;
    right: 1.5rem;
    background: transparent;
    font-size: 2rem;
    cursor: pointer;
`

export const CloseIcon = styled(FaTimes)`
    color: #ffffff;
`

export const SidebarWrapper = styled.div`
    color: #ffffff;
`

export const SidebarMenu = styled.ul`
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(5, 80px);
    text-align: center;

    @media screen and (max-width: 480px) {
        grid-template-rows: repeat(6, 60px);
    }
`

export const SidebarLink = styled(LinkScroll)`
    display: flex;  
    justify-content: center;
    align-items: center;
    

    color: #ffffff;
    text-decoration: none;
    font-size: 1.75rem;
    margin: 1rem 0;
    transition: 0.3s all ease-in-out;
    cursor: pointer;

    &:hover {
        color: #01bf71;
        transition: 0.3s all ease-in-out;
    }
`

export const SidebarBtnWrapper = styled.div`
    display: flex;
    justify-content: center;
`

export const SidebarRoute = styled(LinkRouter)`
    border-radius: 50px;
    border: none;
    background: #01bf71;
    color: #010606;
    text-decoration: none;
    white-space: nowrap;
    padding: 10px 22px;
    cursor: pointer;
    transition: 0.2s all ease-in-out;

    &:hover {
        transition: 0.2s all ease-in-out;
        background: #ffffff;
    }
`