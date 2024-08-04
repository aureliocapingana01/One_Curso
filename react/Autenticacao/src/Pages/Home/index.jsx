import { useState } from "react";
import { Button, Div, Form, Input } from "./Estilo";
import axios from "axios";
import { loginURL } from "../Url";

const Home = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onChangeEmail = (e) => {
    setEmail(e.target.value);
  };

  const onChangePassword = (e) => {
    setPassword(e.target.value);
  };

  // Função para enviar
  const onSubmit = () => {
    const body = {
      email,
      password,
    };

    axios
      .post(loginURL, body)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <Div>
      <Form>
        <Input
          placeholder="email"
          type="email"
          value={email}
          onChange={onChangeEmail}
        />
        <Input
          placeholder="password"
          type="password"
          value={password}
          onChange={onChangePassword}
        />
      </Form>
      <Button onClick={onSubmit}>Enviar</Button>
    </Div>
  );
};
export default Home;
