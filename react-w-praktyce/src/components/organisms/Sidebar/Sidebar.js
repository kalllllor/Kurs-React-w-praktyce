import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import ButtonIcon from 'components/atoms/ButtonIcon/ButtonIcon';
import penIcon from 'assets/icons/pen.svg';
import twitterIcon from 'assets/icons/twitter.svg';
import bulbIcon from 'assets/icons/bulb.svg';
import logoutIcon from 'assets/icons/logout.svg';
import Logo from 'assets/icons/logo.svg';

const Wrapper = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  width: 100px;
  height: 100vh;
  background-color: ${({ theme, activeColor }) => (activeColor ? theme[activeColor] : theme.notes)};
  display: grid;
  grid-template-rows: 0.25fr 0.5fr 1fr;
  grid-auto-columns: 1fr;
  justify-content: space-between;
`;

const LogoImg = styled.img`
  display: block;
  margin: auto auto;
  width: 50px;
  height: 50px;
`;

const Icons = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
`;

const LogoutIcon = styled.div`
  display: flex;
  align-items: flex-end;
  margin: 0 auto;
`;

const Sidebar = ({ pageType }) => (
  <Wrapper activeColor={pageType}>
    <LogoImg src={Logo} alt="logo" />
    <Icons>
      <ButtonIcon activeclass="active" exact as={NavLink} to="/notes" icon={penIcon} />
      <ButtonIcon activeclass="active" as={NavLink} to="/twitters" icon={twitterIcon} />
      <ButtonIcon activeclass="active" as={NavLink} to="/articles" icon={bulbIcon} />
    </Icons>
    <LogoutIcon>
      <ButtonIcon as={NavLink} exact to="/jhgihg" icon={logoutIcon} />
    </LogoutIcon>
  </Wrapper>
);

Sidebar.propTypes = {
  pageType: PropTypes.element.isRequired,
};

export default Sidebar;
