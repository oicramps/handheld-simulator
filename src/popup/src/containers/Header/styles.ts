import styled from 'styled-components';
import logo from '../../assets/images/logo.png';

export const Title = styled.h2`
  margin-top: 0;
  text-align: center;
  font-weight: 500;
`;

export const Logo = styled.img.attrs({ alt: 'logo', src: logo })`
  width: 75px;
`;

export const LogoContainer = styled.div`
  display: flex;
  justify-content: center;
`;
