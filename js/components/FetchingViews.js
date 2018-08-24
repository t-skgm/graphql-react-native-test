import React from 'react';
import { Text, View } from 'react-native';
import styled from "styled-components";

const ViewWrapper = styled.View`
  justify-content: center;
`;
const MessageText = styled.Text`
  text-align: center;
`;

const LoadingView = props =>
  <ViewWrapper {...props}>
    <MessageText>よみこみちゅう...</MessageText>
  </ViewWrapper>

const ErrorView = ({props, error}) => {
  console.log('fetch error: ', error)
  return(
    <ViewWrapper {...props}>
      <MessageText>エラー！ {error.message}</MessageText>
    </ViewWrapper>
  );
}

export { LoadingView, ErrorView };
