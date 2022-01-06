import React from 'react';
import { KeyboardAvoidingView, Platform } from 'react-native';
import {
  Container,
  Content,
  Title,
  Brand,
  ForgotPasswordButton,
  ForgotPasswordLabel,
} from './styles';
import { Input } from '@components/Input';
import { Button } from '@components/Button';
import BrandImg from '@assets/brand.png';

export function SignIn() {
  return (
    <Container>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      >
        <Content>
          <Brand source={BrandImg} />
          <Title>Login</Title>
          <Input
            placeholder={'E-mail'}
            type={'secondary'}
            autoCorrect={false}
            autoCapitalize={'none'}
          />
          <Input
            placeholder={'senha'}
            type={'secondary'}
            autoCorrect={false}
            secureTextEntry
            autoCapitalize={'none'}
          />
          <ForgotPasswordButton>
            <ForgotPasswordLabel>Esqueci a minha senha</ForgotPasswordLabel>
          </ForgotPasswordButton>
          <Button title={'Entrar'} type={'secondary'} />
        </Content>
      </KeyboardAvoidingView>
    </Container>
  );
}
