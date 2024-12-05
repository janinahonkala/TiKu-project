// src/styles/CustomerCard.styles.js
import styled from 'styled-components';

export const CardContainer = styled.div`
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 16px;
  margin-bottom: 12px;
  background-color: #fff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

export const CardHeader = styled.h3`
  margin: 0 0 12px 0;
  font-size: 1.2rem;
  color: #333;
`;

export const CardContent = styled.div`
  margin-bottom: 8px;

  p {
    margin: 4px 0;
    color: #555;
  }
`;
