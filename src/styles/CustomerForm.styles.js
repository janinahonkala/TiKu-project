import styled from 'styled-components';

export const FormWrapper = styled.div`
  margin-bottom: 20px;
  padding: 16px;
  background: #f9f9f9;
  border-radius: 8px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
`;

export const StyledButton = styled.button`
  margin-top: 12px;
  padding: 10px 20px;
  background-color: #007bff;
  border: none;
  color: #fff;
  border-radius: 4px;
  cursor: pointer;
  font-size: 1rem;

  &:hover {
    background-color: #0056b3;
  }
`;

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
  padding: 20px;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;