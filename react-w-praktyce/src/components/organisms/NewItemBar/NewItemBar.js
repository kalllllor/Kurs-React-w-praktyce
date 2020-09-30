import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Heading from 'components/atoms/Heading/Heading';
import Input from 'components/atoms/Input/Input';
import Button from 'components/atoms/Button/Button';
import withContext from 'hoc/withContext';

const StyledWrapper = styled.div`
  z-index: 10;
  position: fixed;
  padding: 100px 70px;
  height: 100vh;
  width: 680px;
  top: 0;
  right: 0;
  display: flex;
  flex-direction: column;
  background-color: white;
  border-left: 8px solid ${({ activeColor, theme }) => theme[activeColor]};
  transform: translateX(${({ isVisible }) => (isVisible ? '0' : '100%')});
  transition: transform 0.2s ease-in-out;
`;

const StyledInput = styled(Input)`
  margin-top: 30px;
  max-width: 80%;
`;

const StyledTextArea = styled(Input)`
  height: 300px;
  border-radius: 10px;
  margin: 30px 0;
  max-width: 100%;
  min-width: 100%;
  ::-webkit-input-placeholder {
    font-size: ${({ theme }) => theme.fontSize.s};
  }
  ::-moz-placeholder {
    font-size: ${({ theme }) => theme.fontSize.s};
  }
  :-ms-input-placeholder {
    font-size: ${({ theme }) => theme.fontSize.s};
  }
  :-moz-placeholder {
    font-size: ${({ theme }) => theme.fontSize.s};
  }
`;

const NewItemBar = ({ pageContext, isVisible }) => (
  <StyledWrapper activeColor={pageContext} isVisible={isVisible}>
    <Heading big> Add new {pageContext}</Heading>
    <StyledInput placeholder={pageContext === 'twitters' ? 'Account Name' : 'Title'} />
    {pageContext === 'articles' && <StyledInput placeholder="link" />}
    <StyledTextArea as="textarea" placeholder="Description" />
    <Button activeColor={pageContext}>Add </Button>
  </StyledWrapper>
);

export default withContext(NewItemBar);

NewItemBar.propTypes = {
  pageContext: PropTypes.oneOf(['notes', 'twitters', 'articles']),
  isVisible: PropTypes.bool.isRequired,
};

NewItemBar.defaultProps = {
  pageContext: 'notes',
};
