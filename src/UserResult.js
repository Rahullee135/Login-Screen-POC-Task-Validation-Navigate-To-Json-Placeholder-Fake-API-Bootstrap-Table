import React, { Component } from 'react';
import axios from 'axios';
import { useEffect, useState  } from "react";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";




const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

const useStyles = makeStyles({
  table: {
    minWidth: 700,
  },
});



class UserResult extends Component {




  state = {
    products: []
  }
  

   
  componentDidMount() {
    axios.get('http://localhost:4000/results')
      .then(response => {
        this.setState({
          products: response.data
        });
      });
  }
  
  render() {
    return (
     

<div className="App">
      
     
      <h1> Welcome </h1>

      
      <TableContainer component={Paper}>
        <Table  aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell> Name</StyledTableCell>
              <StyledTableCell align="right"> Email</StyledTableCell>
              <StyledTableCell align="right"> Phone number</StyledTableCell>
              <StyledTableCell align="right"> Role</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
                      
          {this.state.products.map((item) => {
                return (
                  <StyledTableRow key={item.id}>
                    <StyledTableCell component="th" scope="row">
                      {item.name}
                    </StyledTableCell>
                    <StyledTableCell align="right">
                      {item.email}
                    </StyledTableCell>
                    <StyledTableCell align="right">
                      {item.phonenumber}
                    </StyledTableCell>
                    <StyledTableCell align="right">
                      {item.role}
                    </StyledTableCell>
                  </StyledTableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
    </div>

    );
  }


};

export default UserResult ;