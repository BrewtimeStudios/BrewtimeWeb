import Head from "next/head";
import styled from "styled-components";
import Lottie from "react-lottie";

import * as colors from "../../colors";

import coffeAndBiscuitLottie from "../../public/lotties/coffeeAndBiscuit.json";

const Hero = styled.div`
  align-items: center;
  display: flex;
  flex-wrap: wrap-reverse;
`;
const TextContainer = styled.div`
  flex: 1;
  max-width: 450px;
  min-width: 300px;
`;
const HeroTitle = styled.h1`
  font-size: 4rem;
  line-height: 1.15;
  margin: 0 0 24px 0;
`;
const LottieContainer = styled.div`
  flex: 1;
  max-width: 450px;
  min-width: 320px;
`;
const Section = styled.section`
  display: flex;
  flex-wrap: wrap;
`;
const ListContainer = styled.div`
  flex: 2;
  padding: 0 16px 0 0;
  justify-content: space-between;
  max-width: 450px;
  min-width: 320px;
`;
const Li = styled.li`
  margin-bottom: 16px;
`;
const LinksContainer = styled.div`
  align-items: flex-end;
  display: flex;
  flex-direction: column;
  padding: 60px 16px 0 32px;

  max-width: 450px;
  min-width: 320px;
`;
const LinkButton = styled.a`
  align-items: center;
  background-color: ${colors.brown};
  color: ${colors.white};
  border-radius: 20px;
  display: flex;
  height: 50px;
  justify-content: center;
  margin-bottom: 16px;
  width: 200px;

  &:hover {
    background-color: ${colors.blue};
  }
`;

export default function Legal() {
  const lottieOptions = {
    loop: true,
    autoplay: true,
    animationData: coffeAndBiscuitLottie,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <>
      <Head>
        <title>Brewtime.app | Legal | How do you brew your coffee?</title>
        <meta
          name="description"
          content="Brewtime helps you be more mindful of how you brew your coffee. Available on both iOS and Android, on the Apple App store and Google Play Store"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Hero>
        <TextContainer>
          <HeroTitle>Legal stuffs</HeroTitle>
          <h3>A quick word about what data Brewtime collects.</h3>
        </TextContainer>
        <LottieContainer>
          <Lottie options={lottieOptions} />
        </LottieContainer>
      </Hero>

      <Section>
        <ListContainer>
          <h3>
            Before you look at the full fat legal documents that I bought using
            a generator, here is an understandable list of what's going on
          </h3>
          <ul>
            <Li>
              We collect your email for account login and administration of your
              account. We will never sell your email, or usage statistics.
            </Li>
            <Li>
              When collecting errors we can see what operating system you have
              (Android/iOS version), device manufacturer, and screen size. This
              is to be able to reproduce the error and fix it.
            </Li>
            <Li>
              We collect click statistics in the app to see how our users
              navigate the app, and develop the features that are the most
              popular.
            </Li>
            <Li>
              In the future we might programmatically go through the brews and
              beans you have been submitting in order to give you insights.
            </Li>
          </ul>
          <h3>
            That's it! That's all we do and if there's any changes we will
            update you so you can opt out or stop using the app/service.
          </h3>
        </ListContainer>
        <LinksContainer>
          <LinkButton
            href="https://getterms.io/view/s7v2y/privacy/en-us"
            target="_blank"
            rel="noreferrer"
          >
            Privacy Policy
          </LinkButton>
          <LinkButton
            href="https://getterms.io/view/s7v2y/tos/en-us"
            target="_blank"
            rel="noreferrer"
          >
            Terms of Service
          </LinkButton>
          <LinkButton
            href="https://getterms.io/view/s7v2y/cookie/en-us"
            target="_blank"
            rel="noreferrer"
          >
            Cookie Policy
          </LinkButton>
          <LinkButton
            href="https://getterms.io/view/s7v2y/aup/en-us"
            target="_blank"
            rel="noreferrer"
          >
            Acceptable Use Policy
          </LinkButton>
        </LinksContainer>
      </Section>
    </>
  );
}
