import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
// import Bookpopup from '../../dashboard/Bookpopup';
import { useState } from 'react';
import PopupPlum from '../../../components/PopupPlum'
import PopupEle from '../../../components/PopupEle'
import PopupPaint from '../../../components/PopupPaint'

import './EmpCard.css';

function EmpCard(props) {

const [openPopup,setopenPopup] = useState(false);


  return (
    <div className='card'>
    <Card  sx={{ maxWidth: 400 }}>
      <CardMedia 
        sx={{ height: 250 , width:260, marginLeft: 5, marginTop: 2}}
        image={props.image}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {props.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iste, dolorem!</p>  
          <p>Working hours: 12pm-9pm</p>
        </Typography>
      </CardContent>
      <CardActions>
      {/* <Button className='modalBtn' variant="outlined"  >Book Service</Button> */}
      {/* <Button size="small">Learn More</Button> */}
      {props.user=='plm'&& <PopupPlum  open={openPopup}  onClose={()=> setopenPopup(false)} />}
      {props.user=='ele'&& <PopupEle  open={openPopup}  onClose={()=> setopenPopup(false)} />}
      {props.user=='paint'&& <PopupPaint  open={openPopup}  onClose={()=> setopenPopup(false)} />}
      </CardActions>
    </Card>
    </div>
  );
}

export default EmpCard;