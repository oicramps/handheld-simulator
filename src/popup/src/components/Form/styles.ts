import styled from 'styled-components';

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const TextField = styled.input.attrs({ type: 'text' })`
  flex: 1;
  height: 24px;
  border: 1px solid #bdbdbd;
  border-radius: 0px;
  padding: 8px;
  font-size: 16px;
  margin-bottom: 16px;
`;

export const ScanButton = styled.button`
  flex: 1;
  padding: 8px;
  border-radius: 0px;
  border: 0px;
  color: #2b2b2b;
  font-weight: 600;
  background-color: #ffcd00;
  font-size: 20px;
  font-variant: all-small-caps;
  cursor: pointer;
  transition: all 0.5s ease;
  outline: none;

  &:hover {
    background-color: #ffe166;
    transform: translateY(-2px);
  }

  &:active {
    transform: translateY(2px);
  }
`;
