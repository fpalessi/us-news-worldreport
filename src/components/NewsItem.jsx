import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Loader from "./Loader";

const NewsItem = ({ report }) => {
  // Destructuring of report object
  const { urlToImage, url, title, description, source } = report;
  const handleClick = () => {
    window.open(url);
  };
  return (
    <Grid item md={6} lg={4}>
      <Card style={{ height: "550px" }}>
        {urlToImage ? (
          <CardMedia
            style={{ cursor: "pointer" }}
            component="img"
            alt={`news img`}
            image={urlToImage}
            height={"200"}
            onClick={() => {
              handleClick();
            }}
          />
        ) : (
          <div
            style={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            <Loader />
          </div>
        )}
        <CardContent>
          <Typography variant="body1" color="error">
            {source.name}
          </Typography>
          <Typography variant="h5" component="div">
            {title}
          </Typography>
          <Typography variant="body1" marginBottom={10}>
            {description}
          </Typography>
        </CardContent>
      </Card>
    </Grid>
  );
};

export default NewsItem;
