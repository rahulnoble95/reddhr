import { Header, Footer, Main } from "./index";
import Nav from "./components/Nav";

const Home = () => {
  return (
    <main className="relative w-full">
      <Nav />
      <section>
        <Header />
      </section>
      <section>
        <Main />
      </section>
      <section>
        <Footer />
      </section>
    </main>
  );
};

export default Home;
