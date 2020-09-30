import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Heading from 'components/atoms/Heading/Heading';
import Paragraph from 'components/atoms/Paragraph/Paragraph';
import Button from 'components/atoms/Button/Button';
import UserPageTemplate from 'templates/UserPageTemplate';
import withContext from 'hoc/withContext';

const StyledWrapper = styled.div`
  padding: 25px 150px 25px 70px;

  p {
    padding-right: 200px;
  }
`;

const StyledHeadWrapper = styled.div`
  display: flex;
  align-items: center;
  h1 {
    display: inline-block;
    margin: 30px 30px 0px 0px;
  }
`;

const StyledAvatar = styled.img`
  border-radius: 50%;
  width: 100px;
  height: 100px;
`;

const StyledButton = styled(Button)`
  margin: 30px 0;
  display: block;
  a {
    text-decoration: none;
    color: black;
  }
`;

const StyledLink = styled.a`
  display: block;
  font-weight: ${({ theme }) => theme.bold};
  font-size: ${({ theme }) => theme.fontSize.xs};
  color: black;
  text-transform: uppercase;
  margin: 10px 0 20px;
`;

const StyledParagraph = styled(Paragraph)`
  margin-top: 0px;
  font-weight: ${({ theme }) => theme.bold};
`;

const DetailsTemplate = ({ pageContext, title, created, content, articleUrl, twitterName }) => (
  <UserPageTemplate pageContext={pageContext}>
    <StyledWrapper>
      <StyledHeadWrapper>
        <div>
          <Heading>{title}</Heading>
          <StyledParagraph>{created}</StyledParagraph>
        </div>
        {pageContext === 'twitters' && (
          <StyledAvatar src={`https://twitter-avatar.now.sh/${twitterName}`} />
        )}
      </StyledHeadWrapper>
      {pageContext === 'articles' && <StyledLink href={articleUrl}>Open article</StyledLink>}
      <Paragraph>{content}</Paragraph>
      <StyledButton activeColor={pageContext}>
        <Link to={`/${pageContext}`}>SAVE / CLOSE</Link>
      </StyledButton>
    </StyledWrapper>
  </UserPageTemplate>
);

export default withContext(DetailsTemplate);

DetailsTemplate.propTypes = {
  pageContext: PropTypes.oneOf(['notes', 'twitters', 'articles']),
  title: PropTypes.string.isRequired,
  created: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  articleUrl: PropTypes.string,
  twitterName: PropTypes.string,
};

DetailsTemplate.defaultProps = {
  pageContext: 'notes',
  articleUrl: null,
  twitterName: null,
};
