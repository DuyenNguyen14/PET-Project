import { ThemeProvider } from "@mui/material/styles";
import AdminTemplate from "./templates/AdminTemplate";
import { mainTheme } from "./theme/mainTheme";

function App() {
  return (
    <ThemeProvider theme={mainTheme}>
      <div className="App">
        <AdminTemplate />
      </div>
    </ThemeProvider>
  );
}

export default App;
