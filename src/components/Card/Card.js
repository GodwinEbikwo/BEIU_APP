import React from "react";
import styled from "styled-components";
import { TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import ProgressiveImage from "../ProgressiveImage";

export const Card = (props) => (
  <Container>
    <Cover>
      <ProgressiveImage
        source={props.image}
        style={{
          width: "100%",
          height: "100%",
          top: 0,
          left: 0,
        }}
      />
      <Caption>{props.caption}</Caption>
      <Title>{props.title}</Title>
      <TouchableOpacity style={{ position: "absolute", top: 10, right: 12 }}>
        <Ionicons
          name="md-bookmark"
          color="white"
          size={29}
          style={{ backgroundColor: "transparent" }}
        />
      </TouchableOpacity>
    </Cover>
  </Container>
);

export default Card;

const Caption = styled.Text`
  color: #fff;
  font-size: 13px;
  font-weight: 400;
  width: 270;
  position: absolute;
  top: 18;
  left: 12;
  font-family: "pt-serif";
`;

const Container = styled.View`
  background: #d4d7dd;
  width: 92%;
  height: 400px;
  border-radius: 9px;
  margin: 10px 18px;
`;

const Cover = styled.View`
  width: 100%;
  height: 300px;
  border-top-left-radius: 9px;
  border-top-right-radius: 9px;
  border-bottom-left-radius: 9px;
  border-bottom-right-radius: 9px;
  overflow: hidden;
`;

const Title = styled.Text`
  color: white;
  font-size: 20px;
  font-weight: 500;
  margin-top: 39px;
  margin-left: 12px;
  width: 275px;
  font-family: "mont-bold";
  position: absolute;
`;
