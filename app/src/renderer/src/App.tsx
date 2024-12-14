import { Route, Routes } from "react-router";
import PrivateRoute from "./routes/PrivateRoute";
import Login from "./pages/login/login";
import Dashboard from "./pages/main";

function App(): JSX.Element {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route element={<PrivateRoute />}>
        <Route path="/" element={<Dashboard />} />
      </Route>
    </Routes>
  );
}

export default App;
