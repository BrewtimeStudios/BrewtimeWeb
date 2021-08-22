import { ReactChildren } from "react";
import styled from "styled-components";
import Header from "./Header";
import Footer from "./Footer";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 0 0 0.5rem;
  max-width: 960px;
  margin: auto;
`;

type LayoutProps = {
  children: ReactChildren;
};

function Layout({ children }: LayoutProps) {
  return (
    <Container>
      <Header />
      {children}
      <Footer />
    </Container>
  );
}

export default Layout;
