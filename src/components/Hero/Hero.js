import React from "react";

import {
  Section,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import {
  FaArrowCircleDown
} from "react-icons/fa";
import Button from "../../styles/GlobalComponents/Button";
import { LeftSection } from "./HeroStyles";

const Hero = (props) => (
  <Section row no padding>
    <LeftSection>
      <SectionTitle main center>
        Hey! I'm Jin <br />
        A Web Developer
      </SectionTitle>

      <SectionText>An independent creative C# .Net Developer, passionate in building web applications from the Philippines and currently living in Ontario, Canada.  </SectionText>

      <Button onClick={() => (window.location.href = "#projects")}>
        View My Work <span style={{ marginLeft: "5px"}}><FaArrowCircleDown size="2rem"/></span>
      </Button>
    </LeftSection>
  </Section>
);

export default Hero;
