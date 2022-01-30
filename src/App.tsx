import { BrowserRouter, Route } from "react-router-dom";
import { QueryParamProvider } from "use-query-params";

const App = () => (
  <BrowserRouter>
    <QueryParamProvider ReactRouterRoute={Route}>
      <p>App</p>
    </QueryParamProvider>
  </BrowserRouter>
);

export default App;
