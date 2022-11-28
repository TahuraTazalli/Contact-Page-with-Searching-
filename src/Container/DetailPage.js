import React from "react";
import { Link } from "react-router-dom";
import styles from "./DetailPage.module.css";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import MoreDetails from "./MoreDetails";
import { useHistory } from "react-router-dom";
import Call from "./Call";
const DetailPage = (props) => {
  const history = useHistory();

  const detailsHandler = (e) => {
    e.preventDefault();
    history.push(`/MoreDetails/${props.uuid}`);
  };
  return (
    <div className={styles.details}>
      <Card sx={{ maxWidth: 300 }}>
        <CardMedia
          width="40%"
          component="img"
          alt="green iguana"
          height="140"
          image={props.avatar}
        />
        <CardContent>
          <Typography
            gutterBottom
            variant="h5"
            component="div"
            sx={{ fontSize: "1rem" }}
          >
            {`${props.title} ${props.firstName} ${props.lastName}`}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {props.phone}
          </Typography>
        </CardContent>
        <CardActions>
          <Call>Call</Call>
          {/* <Button size="small">CALL</Button> */}
          <Button size="small" onClick={detailsHandler}>
            More Details
          </Button>

          {/* <div className={styles.button}> */}
          {/* <Link to={`/moredetails/${props.uuid}`}>More Details</Link> */}
          {/* </div> */}
        </CardActions>
      </Card>
    </div>
  );
};
export default DetailPage;
