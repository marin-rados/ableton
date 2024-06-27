import Header from "./components/header";
import Intro from "./components/intro";
import Layout from "./components/layout";
import "./styles/style.scss";

const App = () => {
  return (
    <>
      <Layout>
        <Header />
        <Intro />
      </Layout>
    </>
  );
};

export default App;
