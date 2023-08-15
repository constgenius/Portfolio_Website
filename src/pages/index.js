import { StyleSheetManager } from 'styled-components';
import Acomplishments from '../components/Acomplishments/Acomplishments';
import BgAnimation from '../components/BackgrooundAnimation/BackgroundAnimation';
import Hero from '../components/Hero/Hero';
import Projects from '../components/Projects/Projects';
import Technologies from '../components/Technologies/Technologies';
import Timeline from '../components/TimeLine/TimeLine';
import { Layout } from '../layout/Layout';
import { Section } from '../styles/GlobalComponents';
const KnownProps = [
  'row',
  'nopadding',
  'main',
  'center',
  'divider',
  'colorAlt',
  'final',
  'index',
  'active',
  'grid',
];

const shouldForwardProp = (prop) => !KnownProps.includes(prop);
const Home = () => {
  return (
    <>
      <title>Portfolio</title>
      <StyleSheetManager shouldForwardProp={shouldForwardProp}>
        <Layout>
          <Section grid>
            <Hero />
            <BgAnimation />
          </Section>
          <Projects />
          <Technologies />
          <Timeline />
          <Acomplishments />
        </Layout>
      </StyleSheetManager>
    </>

  );
};

export default Home;
