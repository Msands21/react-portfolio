import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = () => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Welcome To <br />
        My Portfolio
      </SectionTitle>
      <SectionText>
        I'm excited to help you build full-stack JavaScript projects! Check out some of my projects below.
      </SectionText>
      <Button onClick = {() => window.location = 'https://mikesands94@gmail.com'}> Email Me </Button>
    </LeftSection>
  </Section>
);

export default Hero;