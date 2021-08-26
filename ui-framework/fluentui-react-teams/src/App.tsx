import { Provider as RTProvider, themeNames } from "@fluentui/react-teams";

import Welcome from "components/Communication/Welcome";
import Error from "components/Communication/Error";

export default function App() {
  return (
    <RTProvider themeName={themeNames.Default} lang="en-US">
      <Welcome />
      <hr />
      <Error />
      <hr />
    </RTProvider>
  );
}
