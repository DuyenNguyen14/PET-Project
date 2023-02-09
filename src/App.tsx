import { ThemeProvider } from "@mui/material/styles";
import Dashboard from "./pages/Dashboard";
import { mainTheme } from "./theme/mainTheme";

function App() {
  return (
    <ThemeProvider theme={mainTheme}>
      <div className="App">
        <Dashboard />
      </div>
    </ThemeProvider>
  );
}

export default App;
