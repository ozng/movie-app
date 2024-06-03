import RootLayout from "@/layouts/RootLayout";
import Home from "@/pages/home/Home";
import Detail from "@/pages/movie-detail/Detail";
import PeopleDetail from "@/pages/people-detail/PeopleDetail";
import Search from "@/pages/search/Search";
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
      <Route
        path="/search"
        element={
          <RootLayout>
            <Search />
          </RootLayout>
        }
      />
    </Routes>
  );
};

export default RootNavigation;
