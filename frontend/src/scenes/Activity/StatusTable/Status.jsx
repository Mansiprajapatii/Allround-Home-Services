import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { useState, useEffect } from 'react';
function createData(name, work, date, address, status ) {
  return { name, work, date, address, status };
}

export default function Status() {
  const id = localStorage.getItem("currentid");
  const [tab, setTab] = useState([]);
  const [comtab, setcomTab] = useState([]);
  const [com, setcom] = useState(false);

  const fetchTab = async () => {
    const books = await fetch(`https://ahs.up.railway.app/api/mybookings?id=${id}`, {
      method: "GET",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
    });
    const data = await books.json();
    setTab(data);
  };
  const fetchCom = async () => {
    const books = await fetch(
      `https://ahs.up.railway.app/api/getcompbooks?id=${id}`,
      {
        method: "GET",
        mode: "cors",
        headers: {
          "Content-Type": "application/json",
          // 'Content-Type': 'application/x-www-form-urlencoded',
        },
      }
    );
    const data = await books.json();
    setcomTab(data);
  };
  const handleComplete = (id) => {
    fetch(`https://ahs.up.railway.app/api/setcomplete?id=${id}`, {
      method: "PUT",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
    });
    setcom(!com);
  };
  useEffect(() => {
    fetchTab();
    fetchCom();
  }, [com]);

  return (
    <div className="table">
      <div>
      {/* <p style={{marginLeft: 50, position: "absolute", marginTop:15, marginBottom: 50}}>Pending Data</p> */}
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell className="bold">Customer</TableCell>
              <TableCell className="bold" align="center">
                Work
              </TableCell>
              <TableCell className="bold" align="right">
                Date
              </TableCell>
              <TableCell className="bold" align="right">
                Phone
              </TableCell>

              <TableCell className="bold" align="right">
                Task Pending
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {tab.map((row) => (
              <TableRow
                key={row._id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.uname}
                </TableCell>
                <TableCell align="center">{row.task}</TableCell>
                <TableCell align="right">{row.date}</TableCell>
                <TableCell align="right">{row.uphone}</TableCell>
                <TableCell align="right">
                  {!row.completed ? (
                    <Button
                      variant="outlined"
                      color="error"
                      size="small"
                      onClick={() => handleComplete(row._id)}
                    >
                      Click to Done
                    </Button>
                  ) : (
                    <Button variant="contained" size="small" disabled>
                      Done
                    </Button>
                  )}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      </div>
      <br></br>
      
      <div className='table'>
    
      <TableContainer component={Paper}>
   
        {/* Completed Tasks */} 
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell className="bold">Customer</TableCell>
              <TableCell className="bold" align="center">
                Work
              </TableCell>
              <TableCell className="bold" align="right">
                Date
              </TableCell>
              <TableCell className="bold" align="right">
                Phone
              </TableCell>
              <TableCell className="bold" align="right">
                Task Done
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {comtab.map((row) => (
              <TableRow
                key={row._id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.uname}
                </TableCell>
                <TableCell align="center">{row.task}</TableCell>
                <TableCell align="right">{row.date}</TableCell>
                <TableCell align="right">{row.uphone}</TableCell>
                <TableCell align="right">
                  <Button variant="contained" size="small" disabled>
                    Done
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
    </div>
  );
}
