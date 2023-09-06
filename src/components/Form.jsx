import { FormControl, InputLabel, Select, MenuItem } from "@mui/material";
import { useNewsContext } from "../hooks/useNewsContext";
import { CATEGORIES } from "../constants";
const Form = () => {
  const { category, handleChangeCategory } = useNewsContext();

  return (
    <form>
      <FormControl fullWidth>
        <InputLabel>Categories</InputLabel>
        <Select
          label="Category"
          onChange={handleChangeCategory}
          value={category}
        >
          {CATEGORIES.map((categoria) => (
            <MenuItem key={categoria.value} value={categoria.value}>
              {categoria.label}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </form>
  );
};

export default Form;
