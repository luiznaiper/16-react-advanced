import React, { useContext } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { AppContext } from "./Context";
import { GlobalStyle } from "./styles/GlobalStyles";
import { Logo } from "./components/Logo";
import { NavBar } from "./components/NavBar/";
import { Home } from "./pages/Home";
import { Detail } from "./pages/Detail";
import { Favs } from "./pages/Favs";
import { User } from "./pages/User";
import { NotRegisteredUser } from "./pages/NotRegisteredUser";
import { NotFound } from "./pages/NotFound";

const App = () => {
  const { isAuth } = useContext(AppContext);
  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <GlobalStyle />
        <Logo />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pet/:id" element={<Home />} />
          <Route path="/detail/:detailId" element={<Detail />} />
          <Route
            path="/favs"
            element={isAuth ? <Favs /> : <Navigate replace to={"/login"} />}
          />
          <Route
            path="/user"
            element={isAuth ? <User /> : <Navigate replace to={"/login"} />}
          />
          <Route
            path="/login"
            element={
              !isAuth ? <NotRegisteredUser /> : <Navigate replace to="/" />
            }
          />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <NavBar />
      </BrowserRouter>
    </>
  );
};

export { App };
