import Switch from "@mui/material/Switch";
const label = { inputProps: { "aria-label": "Switch demo" } };

export default function Mix() {
  return (
    <div>
      <Switch {...label} defaultChecked size="small" />
      <Switch {...label} defaultChecked />
    </div>
  );
}
