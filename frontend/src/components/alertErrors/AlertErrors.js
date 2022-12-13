import React from "react";
import { useSelector } from "react-redux";
import Alert from "@mui/material/Alert";
import Stack from "@mui/material/Stack";
const AlertErrors = () => {
  const errors = useSelector((state) => state.alertReducer);
  return (
    <div>
      {errors.map((e) => (
        <Stack sx={{ width: "100%" }} spacing={2}>
          <Alert severity={e.type}>{e.msg}</Alert>
        </Stack>
      ))}
    </div>
  );
};

export default AlertErrors;
