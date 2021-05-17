import { Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Loading from "@/components/loading";
import routes from "@/routes";

const App = () => (
  <Suspense fallback={<Loading />}>
    <Router>
      <Routes>
        {routes.map(({ path, element: Element }) => (
          <Route key={path} path={path} element={<Element />} />
        ))}
      </Routes>
    </Router>
  </Suspense>
);

export default App;
