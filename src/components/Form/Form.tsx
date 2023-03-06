import React, { useState } from "react";
import { Button, Stack, TextField, Typography } from "@mui/material";
import { Box, ThemeProvider, createTheme } from "@mui/system";

const Form = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submitMessage, setSubmitMessage] = useState("");

  const onEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const onPasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const onSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();

    const target = e.target as typeof e.target & {
      email: { value: string };
      password: { value: string };
    };
    const email = target.email.value;
    const password = target.password.value;

    setIsSubmitted(true);
    if (email && password) {
      setSubmitMessage("Log in successful!");
    } else {
      setSubmitMessage("You must enter an email and password!");
    }
  };

  return (
    <Box
      sx={{
        borderRadius: "5px",
        bgcolor: "#ebebeb",
        p: 3,
        maxWidth: "400px",
      }}
    >
      <form onSubmit={onSubmit}>
        <Stack direction="column" spacing={2}>
          <TextField
            id="email"
            label="Email"
            onChange={onEmailChange}
            type="email"
            value={email}
            variant="filled"
            sx={{ bgcolor: "#FFF" }}
          />
          <TextField
            id="password"
            label="Password"
            onChange={onPasswordChange}
            type="password"
            value={password}
            variant="filled"
            sx={{ bgcolor: "#FFF" }}
          />
          <Button type="submit" variant="contained">
            Log In
          </Button>
        </Stack>
        {isSubmitted && (
          <Box sx={{ mt: 2 }}>
            <Typography variant="caption">{submitMessage}</Typography>
          </Box>
        )}
      </form>
    </Box>
  );
};

export default Form;
