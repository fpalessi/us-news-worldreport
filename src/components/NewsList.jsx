import { Grid, Typography, Pagination, Stack } from "@mui/material";
import { useNewsContext } from "../hooks/useNewsContext";
import NewsItem from "./NewsItem";
import Loader from "./Loader";
const NewsList = () => {
  const { news, totalNews, handleChangePage, page, isLoading } =
    useNewsContext();
  const totalPages = Math.ceil(totalNews / 20);

  return (
    <>
      <Typography textAlign="center" marginY={3} variant="h3" component="h2">
        Latest U.S News
      </Typography>{" "}
      <Typography
        textAlign="center"
        marginY={3}
        variant="overline"
        component="h2"
      >
        Click on Image to read Article.
      </Typography>
      {isLoading ? (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginTop: "15px",
          }}
        >
          <Loader />
        </div>
      ) : (
        <>
          <Grid container spacing={2}>
            {news.map((n) => (
              <NewsItem key={n.url} report={n} />
            ))}
          </Grid>
          <Stack
            sx={{ marginY: 5 }}
            spacing={2}
            direction="row"
            justifyContent="center"
            alignItems="center"
          >
            <Pagination
              count={totalPages}
              color="primary"
              onChange={handleChangePage}
              page={page}
            />
          </Stack>
        </>
      )}
    </>
  );
};

export default NewsList;
