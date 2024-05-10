import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";

export default function BasicCard(props) {
  return (
    <Card
      sx={{
        width: 200,
        zIndex: 1,
        height: 200,
        textAlign: "center",
      }}
    >
      <CardActionArea>
        <CardMedia
          component="img"
          height="100px"
          image={props.img}
          alt="green iguana"
          sx={{ width: "50%", display: "inline" }}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {props.title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {props.text}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {props?.num}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
