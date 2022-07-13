import React, { useContext } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AppContext } from "./Context";
import { GlobalStyle } from "./styles/GlobalStyles";
import { Logo } from "./components/Logo";
import { NavBar } from "./components/NavBar/";
import { Home } from "./pages/Home";
import { Detail } from "./pages/Detail";
import { Favs } from "./pages/Favs";
import { User } from "./pages/User";
import { NotRegisteredUser } from "./pages/NotRegisteredUser";

const App = () => {
  const urlParams = new URLSearchParams(location.search);
  const detailId = urlParams.get("detail");
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
            element={isAuth ? <Favs /> : <NotRegisteredUser />}
          />
          <Route
            path="/user"
            element={isAuth ? <User /> : <NotRegisteredUser />}
          />
        </Routes>
        <NavBar />
      </BrowserRouter>
    </>
  );
};

export { App };
