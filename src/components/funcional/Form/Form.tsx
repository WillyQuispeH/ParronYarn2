import React, { useContext, useState} from "react";
import { Column, JusConSpaBet, Row } from "../../layout/Generic/Generic";
import Screen from "../../layout/Screen";
import SubMenu from "../../layout/SubMenu";
import ComboBox from "../../ui/ComboBox";
import InputDate from "../../ui/InputDate";
import InputText from "../../ui/InputText";
import Menu from "../../ui/Menu";
import OpcionMenu from "../../ui/OpcionMenu";
import SideBar from "../../ui/SideBar";
import Title from "../../ui/Title";
import { SBProvider } from "../Context/SideBarContext";
import styles from "./Form.module.scss";

const Form = () => {
  
const ValorInicial ="0px"
const ValorCero ="250px"
  const [Active, SetActive] = useState( ValorInicial);
  const HanOnclick =()=>{

    if(Active === ValorInicial){
     SetActive(ValorCero)
    }
    else{
      SetActive(ValorInicial)
    }
    }
  return (
    <SBProvider >
      <Screen>
        <Menu>
          <JusConSpaBet>
            <div className={styles.ButtonSideBar} onClick={HanOnclick}  >
              <span className="material-symbols-outlined">menu</span>
            </div>
            <Row gap="10px">
              <OpcionMenu icon="monitoring" width="35px" height="35px" />
              <OpcionMenu icon="qr_code_2" width="35px" height="35px" />
              <OpcionMenu icon="inbox" width="35px" height="35px" />
              <OpcionMenu icon="person" width="35px" height="35px" />
            </Row>
          </JusConSpaBet>
        </Menu>
        <SideBar left={Active} ></SideBar>
        <SubMenu>
          <JusConSpaBet>
            <Title title="Pedidos" />
            <Row gap="5px">
              <InputText
                width="370px"
                label="Etiqueta"
                place="Text"
                type="text"
              />
              <ComboBox width="184px" label="Sucursal" />
              <InputDate width="138px" label="Fecha" />
            </Row>
          </JusConSpaBet>
        </SubMenu>
        <Row gap="20px">
          <Column gap="20px">
            <Column gap="5px">
              <Row gap="5px">
                <InputText
                  width="140px"
                  label="Rut"
                  place="11.111.111-1"
                  type="text"
                />
                <InputText
                  width="300px"
                  label="Nombre"
                  place="Julio Rodriguez Acevedo"
                  type="text"
                />
              </Row>
              <Row gap="5px">
                <InputText
                  width="300px"
                  label="Correo electrónico"
                  place="julio@gmai.com"
                  type="email"
                />
                <InputText
                  width="140px"
                  label="Teléfono"
                  place="+569 9934 1234"
                  type="text"
                />
              </Row>
            </Column>
            <Row gap="5px">
              <Column gap="5px">
                <ComboBox width="220px" label="Forma" />
                <ComboBox width="220px" label="Forma" />
                <ComboBox width="220px" label="Forma" />
                <ComboBox width="220px" label="Forma" />
              </Column>
              <Column gap="5px">
                <ComboBox width="220px" label="Forma" />
                <ComboBox width="220px" label="Forma" />
                <ComboBox width="220px" label="Forma" />
              </Column>
            </Row>
            <Column gap="5px">
              <InputText
                width="445px"
                label="Rut"
                place="11.111.111-1"
                type="text"
              />
              <InputText
                width="445px"
                label="Rut"
                place="11.111.111-1"
                type="text"
              />
            </Column>
          </Column>
          <Column gap="20px">
            <Column gap="5px">
              <Row gap="5px">
                <ComboBox width="266px" label="Sucursal" />
              </Row>
              <Row gap="5px">
                <InputDate width="160px" label="Fecha" />
                <ComboBox width="100px" label="Hora" />
              </Row>
            </Column>
            <Column gap="5px">
              <Row gap="5px">
                <InputText
                  width="130px"
                  label="Precio"
                  place="$10.000"
                  type="text"
                />
                <InputText
                  width="130px"
                  label="Abono"
                  place="$10.000"
                  type="text"
                />
              </Row>
              <Column gap="5px">
                <ComboBox width="266px" label="Tipo de Pago" />
                <InputText
                  width="266px"
                  label="Estado de pago"
                  place="Pendiente"
                  type="text"
                />
                <InputText
                  width="266px"
                  label="Estado de pedido"
                  place="En camara"
                  type="text"
                />
              </Column>
            </Column>
            <Column gap="5px">
              <InputText
                width="266px"
                label="Usuario"
                place="Juan Perez"
                type="text"
              />
              <Row gap="5px">
                <InputText
                  width="160px"
                  label="Fecha"
                  place="12/02/2022"
                  type="text"
                />
                <InputText
                  width="100px"
                  label="Hora"
                  place="15:12"
                  type="text"
                />
              </Row>
            </Column>
          </Column>
        </Row>
      </Screen>
    </SBProvider>
  );
};

export default Form;
