import React from 'react';
import { ReactComponent as TwitterIcon } from 'assets/Icons/Twitter.svg';
import { ReactComponent as GithubIcon } from 'assets/Icons/Github.svg';
import { ReactComponent as LinkedInIcon } from 'assets/Icons/LinkedIn.svg';
import { Container, IconContainer, Link } from './Footer.styles';

export const Footer = () => {
  return (
    <Container>
      <IconContainer>
        <Link
          rel="noreferrer"
          href="https://github.com/cristhianbenitez"
          target="_blank"
        >
          <GithubIcon />
        </Link>
      </IconContainer>
      <IconContainer>
        <Link
          href="https://twitter.com/PipeBenitez25"
          target="_blank"
          rel="noreferrer"
        >
          <TwitterIcon />
        </Link>
      </IconContainer>
      <IconContainer>
        <Link
          href="https://www.linkedin.com/in/cristhianbenitez/"
          target="_blank"
          rel="noreferrer"
        >
          <LinkedInIcon />
        </Link>
      </IconContainer>
    </Container>
  );
};
