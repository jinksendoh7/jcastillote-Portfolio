import Link from 'next/link';
import React from 'react';
import { FaFolderOpen, FaLinkedin, FaGithub, FaInstagram } from 'react-icons/fa';

import { Container, Div1, Div2, Div3, NavLink, SocialIcons, Span } from './HeaderStyles';

const Header = () =>  (

     <Container>
      <Div1>
        <Link href="/">
          <a style={{ display: "flex", alignItems: "center", color: "white"}}>
          <FaFolderOpen size="3em" />  <Span>  Jinky Castillote Portfolio</Span>
          </a>
        </Link>
      </Div1>

      <Div2>
        <li>
          <Link href="#projects">
            <NavLink>Projects</NavLink>
          </Link>
        </li>
        <li>
          <Link href="#tech">
            <NavLink>Technologies</NavLink>
          </Link>
        </li>
        <li>
          <Link href="#about">
            <NavLink>About</NavLink>
          </Link>
        </li>
      </Div2>

      <Div3>
        <SocialIcons href='https://github.com/jinksendoh7' target="_blank">
          <FaGithub size="3rem" />
        </SocialIcons>
        <SocialIcons href='https://www.linkedin.com/in/jinky-castillote7/' target="_blank">
          <FaLinkedin size="3rem" />
        </SocialIcons>
        <SocialIcons href='https://www.instagram.com/furujin7/?igshid=ZDdkNTZiNTM%3D' target="_blank">
          <FaInstagram size="3rem" />
        </SocialIcons>
      </Div3>
     </Container>
);

export default Header;
