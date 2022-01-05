import React from 'react';
import { Container } from './styles';
import { Input } from '@components/Input';
import { Button } from '@components/Button';

export function SignIn() {
  return (
    <Container>
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
      <Button title={'Entrar'} type={'secondary'} />
    </Container>
  );
}
