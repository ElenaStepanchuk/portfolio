import { PageWrapper } from 'components';
import React from 'react';
import styled, { keyframes } from 'styled-components';

import css from './contact.module.css';

import { Form } from 'components';

const Contact = () => {
  return (
    <PageWrapper>
      <div className={css.left_page}>
        <Span>M</Span>
        <Span>y</Span>
        <Span>&nbsp;</Span>
        <Span>c</Span>
        <Span>o</Span>
        <Span>n</Span>
        <Span>t</Span>
        <Span>a</Span>
        <Span>c</Span>
        <Span>t</Span>
        <Span>s</Span>
        <ContactText>
          I am interested in employment opportunities or large projects. Also,
          if you have any other questions, please contact me using the form on
          the right. I will be happy to help you.
        </ContactText>
      </div>

      <div className={css.right_page}>
        <Form />
      </div>
    </PageWrapper>
  );
};
export default Contact;
//----animation------------
const animation = keyframes`
  10% {
		opacity: 1;
	}
	100% {
		transform: rotate(0deg) translate(0);
		opacity: 1;
	}
  `;
const Span = styled.span`
  font-size: 28px;
  font-weight: bold;
  text-transform: uppercase;
  display: inline-block;
  color: rgba(121, 99, 78, 1);
  opacity: 0;
  transform: rotate(-180deg) translate(150px, 0);
  animation: ${animation} 0.5s forwards;

  :nth-of-type(2) {
    animation-delay: 0.05s;
  }
  :nth-of-type(3) {
    animation-delay: 0.1s;
  }
  :nth-of-type(4) {
    animation-delay: 0.15s;
  }
  :nth-of-type(5) {
    animation-delay: 0.2s;
  }
  :nth-of-type(6) {
    animation-delay: 0.25s;
  }
  :nth-of-type(7) {
    animation-delay: 0.3s;
  }
  :nth-of-type(8) {
    animation-delay: 0.35s;
  }
  :nth-of-type(9) {
    animation-delay: 0.4s;
  }
  :nth-of-type(10) {
    animation-delay: 0.45s;
  }
  :nth-of-type(11) {
    animation-delay: 0.5s;
  }
  // :nth-of-type(12) {
  //   animation-delay: 0.55s;
  // }
  // :nth-of-type(13) {
  //   animation-delay: 0.6s;
  // }
  // :nth-of-type(14) {
  //   animation-delay: 0.65s;
  // }
  // :nth-of-type(15) {
  //   animation-delay: 0.7s;
  // }
  // :nth-of-type(16) {
  //   animation-delay: 0.75s;
  // }
`;

const ContactText = styled.p`
  color: rgba(121, 99, 78, 1);
  font-style: italic;
  font-size: 20px;
  font-weight: bold;
  text-align: justify;
  opacity: 0;
  transform: rotate(-5deg) translate(-650px, 0);
  animation: ${animation} 1s forwards;
  animation-delay: 1s;
`;
