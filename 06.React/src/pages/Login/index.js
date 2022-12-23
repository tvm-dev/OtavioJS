import React from 'react';
import { Container } from '../../styles/GlobalStyles';
import { Title, Paragraph } from './styled';

export default function Login() {
  return (
    <Container>
      <Title>
        Login Page
        <br />
        <small>Make your login to use the system</small>
      </Title>
      <Paragraph>Any text here</Paragraph>
      <br />
      <a href="https://google.com">Link</a>
    </Container>
  );
}
