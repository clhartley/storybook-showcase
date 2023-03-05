import React from "react";
import { Autocomplete as MuiAutocomplete, TextField } from "@mui/material";
import { Film } from "../../types/films";

interface IProps {
  data: Film[];
  multiple?: boolean;
}

const Autocomplete = ({ data, multiple, ...props }: IProps) => {
  return (
    <MuiAutocomplete
      multiple={multiple}
      options={data}
      filterSelectedOptions
      getOptionLabel={(option) => option.title}
      renderInput={(params) => (
        <TextField
          {...params}
          variant="outlined"
          label="Select your favourite films"
          placeholder="Favorites"
        />
      )}
      {...props}
    />
  );
};

export default Autocomplete;
