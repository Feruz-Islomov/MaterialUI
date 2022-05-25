import * as React from "react";
import Alert from "@mui/material/Alert";
import AlertTitle from "@mui/material/AlertTitle";
import Stack from "@mui/material/Stack";
import { Button } from "@mui/material";

export default function DescriptionAlerts() {
  return (
    <Stack sx={{ width: "100%" }} spacing={2}>
      <Alert severity="error">
        <AlertTitle>Error</AlertTitle>
        This is an error alert — <strong>check it out!</strong>
      </Alert>
      <Alert severity="warning">
        <AlertTitle>Warning</AlertTitle>
        This is a warning alert — <strong>check it out!</strong>
      </Alert>
      <Alert severity="info">
        <AlertTitle>Info</AlertTitle>
        This is an info alert — <strong>check it out!</strong>
      </Alert>
      <Alert severity="success">
        <AlertTitle>Success</AlertTitle>
        This is a success alert — <strong>check it out!</strong>
      </Alert>
      <Stack sx={{ width: "100%" }} spacing={2}>
        <Alert onClose={() => {}}>
          This is a success alert — check it out!
        </Alert>
        <Alert
          action={
            <Button color="inherit" size="small">
              UNDO
            </Button>
          }
        >
          This is a success alert — check it out!
        </Alert>
      </Stack>
    </Stack>
  );
}
