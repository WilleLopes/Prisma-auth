import { ButtonLogin, Container, Form, H1, Input, Label } from "./styles";
// import { CallNotification } from "../Alert/index";
import { useState } from "react";
// import { useHistory } from "react-router-dom";

export default function Login() {
  const [onlyPassword, setOnlyPassword] = useState("");
  const [onlyLogin, setOnlyLogin] = useState("");
  // let history = useHistory();

  const handleKeyPress = (e: any) => {
    // console.log(e, "é o e")
    if (e.charCode == 13) {
    confirmLogin();
    }
  };

  const confirmLogin = () => {
    if (onlyLogin == "demo" && onlyPassword == "demo") {
      // history.push("/home");
      alert("login efetuado com sucesso")
    } else {
      return alert("Senha ou Usuário incorreto");
    }
  };

  return (
    <Container>
      <H1>Monitor Temp</H1>

      <Form>
        <Label>Email</Label>

        <Input
          onKeyPress={handleKeyPress}
          value={onlyLogin}
          onChange={(ev) => setOnlyLogin(ev.target.value)}
          type="email"
        />

        <Label>Password</Label>

        <Input
          onKeyPress={handleKeyPress}
          value={onlyPassword}
          onChange={(ev) => setOnlyPassword(ev.target.value)}
          type="password"
        />

        <ButtonLogin onClick={confirmLogin}>Login</ButtonLogin>
      </Form>
    </Container>
  );
}
