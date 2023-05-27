import * as React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import TextField from "@mui/material/TextField";
import "./Popup.css"
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  pt: 2,
  px: 4,
  pb: 3,
};

export default function NestedModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(true);
  };

  const [visible, setVisible] = React.useState(true);

  const [bookingData, setBookingData] = React.useState({
    uname: "",
    ename: "",
    task: "",
    date: "",
    eid: "",
    uid:"",
    phone:""
  })
  const [tab, setTab] = React.useState([]);
  const fetcher = async () => {
    const emps = await fetch("https://ahs.up.railway.app/api/getpm", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
    });

    const data = await emps.json();
    setTab(data);
  };

  const handlePush = (id, name) => {
    setVisible(!visible);
    // console.log(id, name);
    // const eid = id;
    // const ename = name;
    const uname=localStorage.getItem("currentname");
    const uid=localStorage.getItem("currentuid");
    const phone=localStorage.getItem("currentphone");
    setBookingData({...bookingData,eid:id, ename: name, uname: uname, uid: uid,phone:phone });

  };
  const handleClose = () => {
    setOpen(false);
  };
  const PushBooking = ()=>{
    fetch("https://ahs.up.railway.app/api/booking", {
      method: "POST",
      body: JSON.stringify(bookingData),
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => console.log(data));
      handleClose();
  }
  
  useEffect(() => {
    fetcher();
  }, [open]);



  return (
    <div>
      <Button variant="outlined" onClick={handleOpen}>
        Book Service
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="parent-modal-title"
        aria-describedby="parent-modal-description"
      >
        <Box sx={{ ...style, width: 1000 }}>
          <h2 id="parent-modal-title">Plumber Service</h2>

          {/* <input type='text' name='task'/>*/}
          <br />
          <TextField fullWidth label="Enter Task" id="fullWidth" onChange={(e)=>{setBookingData({...bookingData,task:e.target.value})}}/>
          <br />
          <br />
          <label>Date : </label>
          <input type="date" onChange={(e)=>{setBookingData({...bookingData,date:e.target.value})}}></input>
          <br />
          <br />

          {visible ? (
            <TableContainer component={Paper}>
              <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell className="bold">Name</TableCell>
                    <TableCell className="bold" align="center">
                      Work
                    </TableCell>
                    <TableCell className="bold" align="right">
                      Phone
                    </TableCell>
                    <TableCell className="bold" align="right">
                      Amount
                    </TableCell>
                    <TableCell className="bold" align="center"></TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {tab.map((tb) => (
                    <TableRow
                      key={tb._id}
                      sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                    >
                      <TableCell component="th" scope="row">
                        {tb.name}
                      </TableCell>
                      <TableCell align="center">{tb.profession}</TableCell>
                      <TableCell align="right">{tb.phone}</TableCell>
                      <TableCell align="right">₹ 250*</TableCell>
                      <TableCell align="right">
                        {" "}
                        <Button
                          variant="outlined"
                          size="small"
                          // onClick={() => handlePush(tb._id, tb.name)}

                          onClick={() => handlePush(tb._id, tb.name, setVisible)}
                        >
                          Book
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          ) : (


            <div  className="confirm">
            <p>Confirm Service </p>
            <Button
            variant="outlined"
            size="small"
            align="right"
           
             // onClick={() => handlePush(tb._id, tb.name)}
             onClick={PushBooking}
          >
           Confirm 
          </Button>
          </div>
          )}
        </Box>
      </Modal>
    </div>
  );
}
