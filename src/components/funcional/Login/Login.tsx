import React from "react";
import { Column, Row } from "../../layout/Generic/Generic";
import Screen from "../../layout/Screen";
import Button from "../../ui/Button";
import InputText from "../../ui/InputText";
import Link from "../../ui/Link";
import Logo from "../../ui/Logo";
const Login = () => {
  return (
    <>
      <Screen>
        <Column gap="65px">
          <Logo width="300px" height="205px" />

          <Column gap="28px">
            <Column gap="5px">
              <InputText
                label="Correo electrónico"
                type="email"
                place="claudio@matus.cl"
                width="300px"
              />
              <InputText
                label="Contraceña"
                type="password"
                place="**********"
                width="300px"
              />
            </Column>
            <Button valor="Ingresar" width="200px" height="40px" />
            <Link valor="Olvidé mi contraseña"/>
          </Column>
        </Column>
        
      </Screen>
    </>
  );
};

export default Login;
