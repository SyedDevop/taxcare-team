import { Route, Routes } from "react-router";
import PrivateRoute from "./routes/PrivateRoute";
import Login from "./pages/login/login";
import Dashboard from "./pages/main";
import Custom404 from "./pages/notFound";

function App(): JSX.Element {
  return (
    <Routes>
      <Route element={<PrivateRoute />}>
        <Route index path="/" element={<Dashboard />} />
      </Route>
      <Route path="login" element={<Login />} />
      <Route path="*" element={<Custom404 />} />
    </Routes>
  );
}

export default App;
