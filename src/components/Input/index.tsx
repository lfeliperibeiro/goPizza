import React from 'react';
import { TextInputProps } from 'react-native';
import { Container, TypePros } from './styles';

type Props = TextInputProps & {
  type?: TypePros;
};

export function Input({ type = 'primary', ...rest }: Props) {
  return <Container type={type} {...rest} />;
}
