import React from 'react';
import {
  FaThumbsUp,
  FaLinkedin,
  FaGithub,
  FaInstagram,
} from "react-icons/fa";
import {
  MdMailOutline, MdCall
} from "react-icons/md";
import { SocialIcons } from "../Header/HeaderStyles";
import {
  CompanyContainer,
  FooterWrapper,
  LinkColumn,
  LinkItem,
  LinkList,
  LinkTitle,
  Slogan,
  SocialContainer,
  SocialIconsContainer,
} from "./FooterStyles";


const Footer = () => {
  return (
    <FooterWrapper>
      <LinkList>
        <LinkColumn>
          <LinkTitle><MdCall size="3rem"/>Call</LinkTitle>
          <LinkItem href="tel:519-701-0867">519-701-0867</LinkItem>
        </LinkColumn>
        <LinkColumn>
          <LinkTitle><MdMailOutline size="3rem"/>Email</LinkTitle>
          <LinkItem href="mailto:jinksendoh7@gmail.com">
            jinksendoh7@gmail.com
          </LinkItem>
        </LinkColumn>
      </LinkList>

      <SocialIconsContainer>
        <CompanyContainer>
          <Slogan><SocialIcons><FaThumbsUp size="2rem" color='#b20c06'></FaThumbsUp></SocialIcons>Bringing your passion to online.</Slogan>
        </CompanyContainer>
        <SocialContainer>
          <SocialIcons href="https://github.com/jinksendoh7" target="_blank">
            <FaGithub size="3rem" />
          </SocialIcons>
          <SocialIcons href="https://www.linkedin.com/in/jinky-castillote7/" target="_blank">
            <FaLinkedin size="3rem" />
          </SocialIcons>
          <SocialIcons href="https://www.instagram.com/furujin7/?igshid=ZDdkNTZiNTM%3D" target="_blank">
            <FaInstagram size="3rem" />
          </SocialIcons>
        </SocialContainer>
      </SocialIconsContainer>
    </FooterWrapper>
  );
};

export default Footer;
