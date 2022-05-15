import { Typography } from "@mui/material";
const MuiTypography = () => {
  return (
    <div>
      <Typography variant="h1">h1 heading</Typography>
      <Typography variant="h2">h2 heading</Typography>
      <Typography variant="h3">h3 heading</Typography>
      <Typography variant="h4" component="h1" gutterBottom>
        h4 heading
      </Typography>
      <Typography variant="h5">h5 heading</Typography>
      <Typography variant="h6">h6 heading</Typography>
      <Typography variant="subtitle1">Sub title 1</Typography>
      <Typography variant="subtitle2">Sub title 2</Typography>
      <Typography variant="body1">
        xt messages are used for personal, family, business and social purposes.
        Governmental and non-governmental organizations use text messaging for
        communication between colleagues. In the 2010s, the sending of short
        informal messages became an accepted part of many cultures, as happened
        earlier
      </Typography>
      <Typography variant="body2">
        xt messages are used for personal, family, business and social purposes.
        Governmental and non-governmental organizations use text messaging for
        communication between colleagues. In the 2010s, the sending of short
        informal messages became an accepted part of many cultures, as happened
        earlier
      </Typography>
    </div>
  );
};

export default MuiTypography;
