import React from "react";
import { Appbar } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";
  
const Header = ({ title, goBack }) => {

  const navigation = useNavigation();

  return (
    <Appbar.Header>
      {
      /* Se houver a função goback (quando tem tela empilhada)
       então adiciona o componente */
        goBack &&
        <Appbar.BackAction
          onPress={() => navigation.goBack(goBack)} />
      }
      <Appbar.Content title={title} />
    </Appbar.Header>
  );
}

export default Header;