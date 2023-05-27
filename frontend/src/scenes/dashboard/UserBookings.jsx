import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import './UserBookings.css';
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const UserBookings = () => {
  const id = localStorage.getItem("currentuid");
  
  const [tab, setTab] = useState([]);
  const [comtab, setcomTab] = useState([]);
  const [cn, setcn] = useState(false);
  const handleCancel = (id) => {
    fetch(`https://ahs.up.railway.app/api/setcancel?id=${id}`, {
      method: "PUT",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
    });
    setcn((can) => !can);
  };
  const fetchTab = async () => {
    const books = await fetch(`https://ahs.up.railway.app/api/stillbooks?id=${id}`, {
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
  const fetchComTab = async () => {
    const books = await fetch(`https://ahs.up.railway.app/api/usercom?id=${id}`, {
      method: "GET",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
    });
    const data = await books.json();
    setcomTab(data);
  };
  useEffect(() => {
    fetchTab();
    fetchComTab();
  }, [cn]);

  const navigate = useNavigate();

  const handleBack = () => {
    navigate("/udash");
  }

  return (
    <div className="table1">
      <h2 className="txt">Booking History</h2>
      <p className="bold">Current Bookings</p>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 150 }} aria-label="simple table">
        <TableHead>
            <TableRow>
              <TableCell className="bold">Service Provider Name</TableCell>
              <TableCell className="bold" align="center">
                Work
              </TableCell>
              <TableCell className="bold" align="right">
                Date
              </TableCell>
              <TableCell className="bold" align="right">
                Edit
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
                  {row.ename}
                </TableCell>
                <TableCell align="center">{row.task}</TableCell>
                <TableCell align="right">{row.date}</TableCell>
                <TableCell align="right">
                  <Button
                    variant="outlined"
                    color="error"
                    onClick={() => handleCancel(row._id)}
                  >
                    Cancel
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
     
      <br></br>
      <br></br>
      <p className="bold">Previous Booked Services</p>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 150 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell className="bold">Service Provider Name</TableCell>
              <TableCell className="bold" align="center">
                Work
              </TableCell>
              <TableCell className="bold" align="right">
                Date
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
                  {row.ename}
                </TableCell>
                <TableCell align="center">{row.task}</TableCell>
                <TableCell align="right">{row.date}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <div className="bck">
      <Button variant="contained" onClick={handleBack}>Back to Dashboard</Button>
      </div>
    </div>
  );
};

export default UserBookings;
