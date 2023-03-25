import React from 'react'
import { NavLogoStrong } from '../Navbar/NavbarElements'
import { animateScroll as scroll} from 'react-scroll'
import { FooterContainer, FooterWrap, FooterLinksContainer, FooterLinksWrapper, FooterLinkItems, FooterLinkTitle, FooterLink, SocialMedia, SocialMediaWrap, SocialLogo, WebsiteRight, SocialIcons, SocialIconLink } from './FooterElements'
import { FaInstagram, FaTwitter, FaFacebook, FaYoutube, FaLinkedin } from 'react-icons/fa'

const Footer = () => {

    const toggleHome = () => {
        scroll.scrollToTop()
    }
  return (
    <FooterContainer>
        <FooterWrap>
            <FooterLinksContainer>
                <FooterLinksWrapper>
                    <FooterLinkItems>
                        <FooterLinkTitle>Sobre nós</FooterLinkTitle>
                        <FooterLink to='/'>Como funciona</FooterLink>
                        <FooterLink to='/'>Depoimentos</FooterLink>
                        <FooterLink to='/'>Áreas</FooterLink>
                        <FooterLink to='/'>Investimentos</FooterLink>
                        <FooterLink to='/'>Termos de serviço</FooterLink>
                    </FooterLinkItems>
                    <FooterLinkItems>
                        <FooterLinkTitle>Contate-nos</FooterLinkTitle>
                        <FooterLink to='/'>Contato</FooterLink>
                        <FooterLink to='/'>Suporte</FooterLink>
                        <FooterLink to='/'>Atendimento ao cliente</FooterLink>
                        <FooterLink to='/'>Patrocínios</FooterLink>
                    </FooterLinkItems>
                </FooterLinksWrapper>
                <FooterLinksWrapper>
                    <FooterLinkItems>
                        <FooterLinkTitle>Vídeos</FooterLinkTitle>
                        <FooterLink to='/'>Envie seu vídeo</FooterLink>
                        <FooterLink to='/'>Embaixadores</FooterLink>
                        <FooterLink to='/'>Agência</FooterLink>
                        <FooterLink to='/'>Influências</FooterLink>
                    </FooterLinkItems>
                    <FooterLinkItems>
                        <FooterLinkTitle>Trabalhe Conosco</FooterLinkTitle>
                        <FooterLink to='/'>Envie seu currículo</FooterLink>
                    </FooterLinkItems>
                </FooterLinksWrapper>
            </FooterLinksContainer>
            <SocialMedia>
                <SocialMediaWrap>
                    <SocialLogo to='/' onClick={toggleHome}><NavLogoStrong>Green</NavLogoStrong>Bank</SocialLogo>
                    <WebsiteRight>Green Bank &#169; {new Date().getFullYear()} Todos os direitos reservados.</WebsiteRight>
                    <SocialIcons>
                        <SocialIconLink href='https://www.instagram.com/lucasaraujo.jsx/' target='_blank' aria-label="Instagram">
                            <FaInstagram />
                        </SocialIconLink>
                        <SocialIconLink href='https://twitter.com/lucasaraujo_jsx' target='_blank' aria-label="Twitter">
                            <FaTwitter />
                        </SocialIconLink>
                        <SocialIconLink href='https://www.facebook.com/xtheluk4s' target='_blank' aria-label="Facebook">
                            <FaFacebook />
                        </SocialIconLink>
                        <SocialIconLink href='/' target='_blank' aria-label="Youtube">
                            <FaYoutube />
                        </SocialIconLink>
                        <SocialIconLink href='/' target='_blank' aria-label="Linkedin">
                            <FaLinkedin />
                        </SocialIconLink>
                    </SocialIcons>
                </SocialMediaWrap>
            </SocialMedia>
        </FooterWrap>
    </FooterContainer>
  )
}

export default Footer