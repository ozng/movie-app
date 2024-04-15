import RootLayout from "@/layouts/RootLayout";
import Home from "@/pages/home/Home";
import Detail from "@/pages/movie-tv-detail/Detail";
import { Route, Routes } from "react-router-dom";

const RootNavigation = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <RootLayout>
            <Home />
          </RootLayout>
        }
      />
      <Route
        path="/detail/:id"
        element={
          <RootLayout>
            <Detail />
          </RootLayout>
        }
      />
    </Routes>
  );
};

export default RootNavigation;
