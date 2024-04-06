import RootLayout from "@/layouts/RootLayout";
import Home from "@/pages/home/Home";
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
    </Routes>
  );
};

export default RootNavigation;
