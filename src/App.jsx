import { Container, Grid, Typography } from "@mui/material";
import Form from "./components/Form";
import NewsList from "./components/NewsList";
import Logo from "./components/Logo";
import { NewsProvider } from "./context/NewsContext";

function App() {
  return (
    <NewsProvider>
      <Container>
        <header>
          <Typography align="center" marginY={5} component="h1" variant="h2">
            <Logo />
          </Typography>
        </header>
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="center"
        >
          <Grid item xs={12} md={6} lg={4}>
            <Form />
          </Grid>
        </Grid>
        <NewsList />
      </Container>
    </NewsProvider>
  );
}

export default App;
