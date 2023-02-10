import Box from "@mui/material/Box";
import FormControl from "@mui/material/FormControl";
import MenuItem from "@mui/material/MenuItem";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import Typography from "@mui/material/Typography";

type Props = { week: string; handleChange: (e: SelectChangeEvent) => void };

export default function WeekFilter({ week, handleChange }: Props) {
  return (
    <Box sx={{ display: "flex", alignItems: "center" }}>
      <Box>
        <Typography component="p">Data shown by:</Typography>
      </Box>
      <Box sx={{ minWidth: 120, marginLeft: "5px" }}>
        <FormControl size="small" fullWidth>
          <Select value={week} onChange={handleChange}>
            <MenuItem value={1}>Week 1</MenuItem>
            <MenuItem value={2}>Week 2</MenuItem>
            <MenuItem value={3}>Week 3</MenuItem>
          </Select>
        </FormControl>
      </Box>
    </Box>
  );
}
