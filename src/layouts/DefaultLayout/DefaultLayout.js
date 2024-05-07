import { Footer, Header, Wrapper } from "../../componets";

const DefaultLayout = (props) => {
  return (
    <Wrapper>
      <Header />
      <main>{props.children}</main>
      <Footer />
    </Wrapper>
  );
};

export default DefaultLayout;
