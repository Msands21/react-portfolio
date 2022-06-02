import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';

import { SocialIcons } from '../Header/HeaderStyles';
import { CompanyContainer, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, SocialContainer, SocialIconsContainer } from './FooterStyles';

const Footer = () => {
  return (
    <FooterWrapper>
      <LinkList>
        <LinkColumn>
          <LinkTitle> Email </LinkTitle>
          <LinkItem href="mailto:mikesands94@gmail.com">mikesands94@gmail.com</LinkItem>
        </LinkColumn>
        <LinkColumn>
          <LinkTitle> Resume </LinkTitle>
          <LinkItem href="/images/Resume.png">Resume</LinkItem>
        </LinkColumn>
      </LinkList>
      <SocialIconsContainer>
        <CompanyContainer>
          <Slogan>Michael Sands Personal Portfolio</Slogan>
        </CompanyContainer>
        <SocialContainer>
        <SocialIcons href = "https://github.com/Msands21">
        <AiFillGithub size = "3rem" />
      </SocialIcons>
      <SocialIcons href = "https://www.linkedin.com/in/michael-sands-464786198/">
        <AiFillLinkedin size = "3rem" />
      </SocialIcons>
      </SocialContainer>
      </SocialIconsContainer>
    </FooterWrapper>
  );
};

export default Footer;
