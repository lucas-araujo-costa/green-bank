import React from 'react'
import {SidebarContainer,
     Icon, 
     CloseIcon, 
     SidebarWrapper, 
     SidebarMenu, 
     SidebarLink, 
     SideBtnWrap, 
     SidebarRoute
    } from './SidebarElements'

const Sidebar = ({ isOpen, toggle}) => {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
        <Icon onClick={toggle}>
            <CloseIcon />
        </Icon>
        <SidebarWrapper>
            <SidebarMenu>
                <SidebarLink to='about' onClick={toggle}>Sobre</SidebarLink>
                <SidebarLink to='discover' onClick={toggle}>Explorar</SidebarLink>
                <SidebarLink to='services' onClick={toggle}>Serviços</SidebarLink>
                <SidebarLink to='signup' onClick={toggle}>Abra sua conta</SidebarLink>
            </SidebarMenu>
            <SideBtnWrap>
                <SidebarRoute to='/signin'>Entrar</SidebarRoute>
            </SideBtnWrap>
        </SidebarWrapper>
    </SidebarContainer>
  )
}

export default Sidebar