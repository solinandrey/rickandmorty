import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Button,
} from "@mui/material";

import { TableList } from "@types";

interface IProps {
  list: TableList;
}

const TableBlock = ({ list }: IProps) => {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: "60rem" }} aria-label="simple table">
        <TableHead>
          <TableRow>
            {list.header.map((item) => {
              return <TableCell key={item}>{item}</TableCell>;
            })}
          </TableRow>
        </TableHead>
        <TableBody>
          {list.body.map((row, idx) => {
            return (
              <TableRow key={'row-' + idx}>
                {row.map((cell, idx) => (
                  <TableCell key={"cell" + idx}>{cell}</TableCell>
                ))}
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default TableBlock;
