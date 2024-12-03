import styled from 'styled-components';

export const CardWrapper = styled.div`
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 16px;
  margin-bottom: 12px;
  background-color: #fefefe;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

export const CardTitle = styled.h3`
  margin: 0 0 10px 0;
  font-size: 1.2rem;
  color: #333;
`;

export const ProjectDetail = styled.p`
  margin: 4px 0;
  color: #555;
`;

export const ActionButton = styled.button`
  padding: 8px 16px;
  background-color: #28a745;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 0.9rem;

  &:hover {
    background-color: #218838;
  }
`;
