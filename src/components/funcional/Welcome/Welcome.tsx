import React from "react";
import { JusConSpaBet, Row } from "../../layout/Generic/Generic";
import Screen from "../../layout/Screen";
import Logo from "../../ui/Logo";
import Menu from "../../ui/Menu";
import OpcionMenu from "../../ui/OpcionMenu";

const Welcome = () => {
  return (
    <Screen>
      <Menu>
        <JusConSpaBet>
          <OpcionMenu icon="menu"  width="35px" height="35px"/>
          <Row gap="10px">
            <OpcionMenu icon="monitoring"  width="35px" height="35px"/>
            <OpcionMenu icon="qr_code_2"  width="35px" height="35px"/>
            <OpcionMenu icon="inbox"  width="35px" height="35px"/>
            <OpcionMenu icon="person"  width="35px" height="35px"/>
          </Row>
        </JusConSpaBet>
      </Menu>
      <Logo width="736px" height="505px"/>
    </Screen>
  );
};

export default Welcome;
