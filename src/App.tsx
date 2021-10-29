import styles from "./App.module.scss";
import { Header } from "./components/Header";

import DevelopmentImg from "./assets/development.svg";
import { Form } from "./components/Form";
import { Footer } from "./components/Footer";

function App() {
  return (
    <div className={styles.container}>
      <Header />

      <main className={styles.main}>
        <section>
          <figure>
            <img
              src={DevelopmentImg}
              alt="Uma Pessoa trabalhando pelo computador"
              width="550px"
            />
          </figure>
        </section>

        <section className={styles.containerForm}>
          <h1>Faça login para entrar!</h1>
          <Form />
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default App;
