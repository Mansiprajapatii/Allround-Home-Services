import * as React from "react";
// import './Cards.css';
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";

export default function MultiActionAreaCard(props) {
  return (
    <div>
      <Card sx={{ maxWidth: 400 }}>
        <CardActionArea>
          <CardMedia
            sx={{ height: 250, width: 260, marginLeft: 5, marginTop: 2 }}
            image={props.image}
            alt="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {props.title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Lizards are a widespread group of squamate reptiles, with over
              6,000 species, ranging across all continents except Antarctica
            </Typography>
          </CardContent>
        </CardActionArea>
        {/* <CardActions>
          <Button size="small" color="primary">
            Book Service
          </Button>
        </CardActions> */}
      </Card>
    </div>
  );
}
