import { useState, createContext, useMemo, useEffect } from "react";
import ContentGrid from "./components/ContentGrid";
import Navbar from "./components/Navbar";
import Container from "@mui/material/Container";
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

const ColorModeContext = createContext({ toggleColorMode: () => {} });

function App() {
  const [category, setCategory] = useState("General");
  const [topic, setTopic] = useState("");
  const [mode, setMode] = useState("light");
  const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");

  const colorMode = useMemo(
    () => ({
      // The dark mode switch would invoke this method
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
      },
    }),
    []
  );

  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode,
        },
      }),
    [mode]
  );

  useEffect(() => {
    prefersDarkMode ? setMode("dark") : setMode("light");
  }, [prefersDarkMode]);

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Container maxWidth="xl" sx={{ paddingTop: 15, paddingBottom: 5 }}>
          <Navbar
            category={category}
            setCategory={setCategory}
            setTopic={setTopic}
            topic={topic}
            modeToggle={colorMode.toggleColorMode}
          />
          <ContentGrid category={category} topic={topic} />
        </Container>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
