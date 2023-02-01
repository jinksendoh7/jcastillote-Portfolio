import React from "react";
import { FaReact, FaCode, FaDatabase, FaGitAlt } from "react-icons/fa";
import {
  Section,
  SectionDivider,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import {
  List,
  ListContainer,
  ListItem,
  ListParagraph,
  ListTitle,
} from "./TechnologiesStyles";

const Technologies = () => (
  <Section id="tech">
    <SectionDivider />
    <br />
    <SectionTitle>Technologies</SectionTitle>
    <SectionText>
      I've worked with a range of technologies in the web development world.
    </SectionText>

    <List>
      <ListItem>
        <FaReact size="3rem"/>
        <ListContainer>
          <ListTitle>Front-End</ListTitle>
          <ListParagraph>
            Experience with <br />
            React.js, React Native, jQuery, HTML, CSS
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <FaCode size="3rem"/>
        <ListContainer>
          <ListTitle>Back-End</ListTitle>
          <ListParagraph>
            Skilled in <br />
            ASP.NET, C#, MVC framework, REST API
          </ListParagraph>
        </ListContainer>
      </ListItem>
   <ListItem>
        <FaDatabase size="3rem"/>
        <ListContainer>
          <ListTitle>Repository</ListTitle>
          <ListParagraph>
            Experience with <br />
            Microsoft SQL Server, Firestore
          </ListParagraph>
        </ListContainer>
      </ListItem>
       <ListItem>
        <FaGitAlt size="3rem"/>
        <ListContainer>
          <ListTitle>Version Control & Project Mgmt</ListTitle>
          <ListParagraph>
            Knowledgeable in <br />
            GIT, GitHub, JIRA
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
  </Section>
);

export default Technologies;
