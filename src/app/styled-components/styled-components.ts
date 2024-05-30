import styled from "styled-components";

export const StyledInputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  width: 300px; 
  margin-bottom: 30px;
`;

export const StyledLabel = styled.label`
  font-size: 14px;
  color: #ccc;
`;

export const StyledInput = styled.input`
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 16px;

  &:focus {
    border-color: #007bff;
    outline: none;
  }
`;

export const StyledSelect = styled.select`
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 16px;
`;

export const StyledOption = styled.option`
  padding: 15px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 16px;
`;

export const StyledButton = styled.button`
  padding: 10px 15px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 14px;
  font-weight: 600;
  text-transform: capitalize;
  letter-spacing: 1px;
  background-color: #333;
  color: #ccc;
  cursor: pointer;
`;

export const StyledTable = styled.table`
  width: 100%;
  max-width: 1000px;
  border-collapse: collapse;
  margin: 80px 0 20px;
  font-size: 15px;
  text-align: left;

  

`;

export const StyledTableHead = styled.thead`
  background-color: #f2f2f2;
  font-weight: 500; 
`;

export const StyledTableRow = styled.tr`
  // &:nth-child(even) {
  //   background-color: #f9f9f9;
  // }
`;

export const StyledTableHeader = styled.th`
  padding: 5px;
  border: 1px solid #000;
  color: #555;
`;

export const StyledTableFooter = styled.th`
  padding: 5px;
  border: 1px solid #000;
  color: #555;
`;

export const StyledTableCell = styled.td`
  padding: 5px;
  border: 1px solid #ccc;
`;
