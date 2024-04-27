import RootLayout from "@/layouts/RootLayout";
import Home from "@/pages/home/Home";
import Detail from "@/pages/movie-tv-detail/Detail";
import PeopleDetail from "@/pages/people-detail/PeopleDetail";
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
      <Route
        path="/people/detail/:id"
        element={
          <RootLayout>
            <PeopleDetail />
          </RootLayout>
        }
      />
    </Routes>
  );
};

export default RootNavigation;
