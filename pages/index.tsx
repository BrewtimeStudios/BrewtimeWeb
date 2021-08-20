import Head from "next/head";
import styled from "styled-components";
import Lottie from "react-lottie";

import * as colors from "../colors";
import takeAwayMugLottie from "../assets/lotties/takeAwayMug.json";

const Container = styled.div`
  background-color: ${colors.whiteShadow};
  display: flex;
  flex-direction: column;
  padding: 0 0.5rem;
`;
const Content = styled.main`
  align-self: center;
  max-width: 960px;
`;
const Header = styled.header`
  height: 10vh;
`;
const Hero = styled.div`
  display: flex;
  flex-wrap: wrap-reverse;
  justify-content: center;
`;
const HeroTextContainer = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: center;
  padding: 16px;
  max-width: 450px;
  min-width: 300px;
`;
const HeroTitle = styled.h1`
  margin: 0 0 24px 0;
  line-height: 1.15;
  font-size: 4rem;
`;
const LottieContainer = styled.div`
  flex: 1;
  max-width: 450px;
  min-width: 320px;
`;
const CtaContainer = styled.div``;

const lottieOptions = {
  loop: true,
  autoplay: true,
  animationData: takeAwayMugLottie,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
  },
};

export default function Home() {
  return (
    <Container>
      <Head>
        <title>Brewtime.app | How do you brew your coffee?</title>
        <meta
          name="description"
          content="Brewtime helps you be more mindful of how you brew your coffee. Available on both iOS and Android, on the Apple App store and Google Play Store"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Content>
        <Header />
        <Hero>
          <HeroTextContainer>
            <HeroTitle>Brewtime.</HeroTitle>
            <h3>
              Brewtime helps you be more mindful of how you brew your coffee by
              making you think about the key parameters that might impact your
              cup.
            </h3>
          </HeroTextContainer>
          <LottieContainer>
            <Lottie options={lottieOptions} />
          </LottieContainer>
        </Hero>

        <CtaContainer></CtaContainer>
      </Content>
    </Container>
  );
}
