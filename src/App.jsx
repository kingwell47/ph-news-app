import ContentGrid from "./components/ContentGrid";
import Navbar from "./components/Navbar";
import Container from "@mui/material/Container";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Container maxWidth="xl" sx={{ paddingTop: 5 }}>
        <ContentGrid />
      </Container>
    </div>
  );
}

export default App;
