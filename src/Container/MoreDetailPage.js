import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import styles from "./DetailPage.module.css";

const MoreDetailPage = (props) => {
  return (
    <div className={styles.header}>
      <Card sx={{ maxWidth: 500 }}>
        <CardMedia
          alignItem="center"
          component="img"
          alt="green iguana"
          height="400"
          image={props.picture}
        />
        <CardContent>
          <Typography
            gutterBottom
            variant="h5"
            component="div"
            fontWeight={800}
          >
            {`${props.title} ${props.firstName} ${props.lastName}`}
          </Typography>
          <Typography gutterBottom variant="h5" component="div">
            {`Mobile : ${props.cell}`}
          </Typography>
          <Typography gutterBottom variant="h5" component="div">
            {`E-Mail : ${props.email}`}
          </Typography>
          <Typography gutterBottom variant="h5" component="div">
            {`Gender : ${props.gender}`}
          </Typography>
          <Typography gutterBottom variant="h5" component="div">
            {`Location : ${props.city} , ${props.country} , ${props.postcode}`}
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
};
export default MoreDetailPage;
