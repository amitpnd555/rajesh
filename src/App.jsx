import { Route, Routes } from "react-router-dom";
import { Home, NotFound } from "./pages";
import { MainContainerOutlet } from "./components/outlet";

export default function App() {
  return (
    <div className="font-rubik">
      <Routes>
        <Route path="/" element={<MainContainerOutlet />}>
          <Route path="/" element={<Home />} />
        </Route>

        {/* Catch-all route for unmatched paths */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}
