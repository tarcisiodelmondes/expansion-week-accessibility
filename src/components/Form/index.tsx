import { FormEvent, useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import { Button } from "../Button";
import styles from "./styles.module.scss";
import validator from "validator";

export function Form() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function checkErrors() {
    const errors = [];

    if (email.length === 0) errors.push("Preencha o campo email");
    if (password.length === 0) errors.push("Coloque sua senha!");

    if (email.length > 0 && !validator.isEmail(email)) {
      errors.push("Email incorreto!");
    }

    errors.forEach((error) => {
      toast.error(error);
    });

    return errors;
  }

  function handleSubmit(e: FormEvent) {
    e.preventDefault();

    setEmail("");
    setPassword("");

    const errors = checkErrors();

    if (errors.length === 0) toast.success("Login efetuado com sucesso!");
  }

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <label id="email" className="sr-only ">
        Email
      </label>
      <ToastContainer autoClose={2000} />

      <input
        type="email"
        id="email"
        className={styles.input}
        placeholder="Email"
        onChange={(e) => setEmail(e.target.value)}
        value={email}
      />

      <label id="password" className="sr-only ">
        Senha
      </label>
      <input
        type="password"
        id="password"
        className={styles.input}
        placeholder="Senha"
        onChange={(e) => setPassword(e.target.value)}
        value={password}
      />

      <Button
        type="submit"
        text="Entrar"
        backgroundColor="#3a86ff"
        color="#fff"
        disabled={email.trim() === "" || password.trim() === ""}
      />
    </form>
  );
}
