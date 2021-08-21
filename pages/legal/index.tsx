import Head from "next/head";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 0.5rem;
`;
const Content = styled.main`
  align-self: center;
  max-width: 960px;
`;

export default function Legal() {
  return (
    <Container>
      <Head>
        <title>Brewtime.app | Legal | How do you brew your coffee?</title>
        <meta
          name="description"
          content="Brewtime helps you be more mindful of how you brew your coffee. Available on both iOS and Android, on the Apple App store and Google Play Store"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Content>
        <h1>Legal stuffs</h1>
      </Content>
    </Container>
  );
}
