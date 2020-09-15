import React from 'react';
import styled from 'styled-components';
import { storiesOf } from '@storybook/react';
import bulbIcon from 'assets/icons/bulb.svg';
import logoutIcon from 'assets/icons/logout.svg';
import magnifierIcon from 'assets/icons/magnifier.svg';
import penIcon from 'assets/icons/pen.svg';
import plusIcon from 'assets/icons/plus.svg';
import twitterIcon from 'assets/icons/twitter.svg';
import ButtonIcon from './ButtonIcon';

const YellowBackground = styled.div`
  align-items: center;
  justify-content: center;
  display: flex;
  width: 150px;
  height: 150px;
  background-color: ${({ theme }) => theme.notes};
`;

storiesOf('ButtonIcon', module)
  .addDecorator((story) => (
    <YellowBackground>
      <>{story()}</>
    </YellowBackground>
  ))
  .add('Bulb', () => <ButtonIcon active icon={bulbIcon} />)
  .add('Logout', () => <ButtonIcon icon={logoutIcon} />)
  .add('Magnifier', () => <ButtonIcon icon={magnifierIcon} />)
  .add('Pen', () => <ButtonIcon icon={penIcon} />)
  .add('Plus', () => <ButtonIcon icon={plusIcon} />)
  .add('Twitter', () => <ButtonIcon icon={twitterIcon} />);
