import { useState } from "react";
import ContentGrid from "./components/ContentGrid";
import Navbar from "./components/Navbar";
import Container from "@mui/material/Container";

function App() {
  const [category, setCategory] = useState("General");
  const [topic, setTopic] = useState("");
  return (
    <div className="App">
      <Navbar
        category={category}
        setCategory={setCategory}
        setTopic={setTopic}
        topic={topic}
      />
      <Container maxWidth="xl" sx={{ paddingTop: 15, paddingBottom: 5 }}>
        <ContentGrid category={category} topic={topic} />
      </Container>
    </div>
  );
}

export default App;
