import { useState } from "react";
import ContentGrid from "./components/ContentGrid";
import Navbar from "./components/Navbar";
import Container from "@mui/material/Container";

function App() {
  const [category, setCategory] = useState("General");
  return (
    <div className="App">
      <Navbar setCategory={setCategory} />
      <Container maxWidth="xl" sx={{ paddingTop: 5 }}>
        <ContentGrid category={category} />
      </Container>
    </div>
  );
}

export default App;
