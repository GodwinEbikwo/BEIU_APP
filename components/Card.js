import React from "react";
import styled from "styled-components";
import { Text, TouchableOpacity } from "react-native";
import { timeDifferenceForDate } from "./Time";
import { Ionicons } from "@expo/vector-icons";
import ProgressiveImage from "../components/ProgressiveImage";

const Card = props => (
  <Container>
    <Cover>
      <ProgressiveImage
        source={props.image}
        style={{
          width: "100%",
          height: "100%",
          top: 0,
          left: 0
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
    <Content>
      <ProgressiveImage
        source={props.logo}
        style={{ width: 44, height: 44, borderRadius: 22, marginTop: 11 }}
      />
      <Wrapper>
        <Text
          style={{
            color: "#DDE3E9",
            fontWeight: "400",
            fontSize: 14,
            fontFamily: "mont-regular"
          }}
        >
          Created by {props.name}{" "}
          <Text
            style={{
              color: "#74B9FF",
              fontFamily: "pt-serif",
              fontSize: 12.5
            }}
          >
            {timeDifferenceForDate(props.dateAndTime)}
          </Text>
        </Text>
      </Wrapper>
    </Content>
  </Container>
);

export default Card;

const Content = styled.View`
  padding-left: 20px;
  flex-direction: row;
  align-items: center;
  height: 50px;
`;

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

const Wrapper = styled.View`
  margin-left: 9px;
  margin-top: 11px;
`;

const Container = styled.View`
  background: #263859;
  width: 92%;
  height: 400px;
  border-radius: 9px;
  margin: 10px 18px;
`;

const Cover = styled.View`
  width: 100%;
  height: 340px;
  border-top-left-radius: 9px;
  border-top-right-radius: 9px;
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
