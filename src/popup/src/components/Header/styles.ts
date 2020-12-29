import styled from 'styled-components';
import { ReactComponent as BarcodeIcon } from '../../assets/images/barcode.svg';

export const Title = styled.h2`
  margin-left: 12px;
  text-align: center;
  font-weight: 600;
`;

export const Logo = styled(BarcodeIcon)``;

export const HeaderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 16px;
`;
