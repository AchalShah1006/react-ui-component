import React from "react";
import Button from "./components/Button";
import { ReactComponent as PlusIcon } from "./asset/svg/plus.svg";
import "./styles.scss";
import Typography from "./components/Typography";

function App() {
  return (
    <Button variant="success" icon={<PlusIcon />}>
      <Typography.Title>Submit</Typography.Title>
    </Button>
  );
}
export default App;
