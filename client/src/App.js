import useResize from "@U/hooks/useResize";
import React, { useEffect, useMemo, Suspense } from "react";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { GlobalStyle, theme } from "@S/index";

import MainPage from "@P/MainPage";

import ChatInterface1 from "@/pages/chat/ChatInterface1";
import ChatInterface2 from "@/pages/chat/ChatInterface2";

import MetaPage from "@P/Meta";
import ChronologyPage from "@P/Chronology";
import CalendarPage from "@P/compositions/Calendar";
import causalityRoutes from "@/pages/CausalityRouter";

import SuspenseLoading from "@F/chronology/Suspense";
import poeticRoutes from "@/pages/newsAndMedia/Router";

import AnEchoPage from "@P/AnEcho";
import AnEchoInstruction from "@C/AnEcho/Instructions";
import AnEchoIntro from "@C/AnEcho/Intro";

import { Helmet, HelmetProvider } from "react-helmet-async";

import "@ST/font/font.css";

function App() {
  const [windowWidth, windowHeight] = useResize();
  const themeWithWindowSize = useMemo(() => ({ ...theme, windowWidth, windowHeight }), [windowWidth, windowHeight]);

  return (
    <HelmetProvider>
      <ThemeProvider theme={themeWithWindowSize}>
        <GlobalStyle />
        <Router>
          <Suspense fallback={<SuspenseLoading />}>
            <Switch>
              <Route exact={true} path="/" component={MainPage} />
              <Route exact path="/chat-interface-one" component={ChatInterface1} />
              <Route exact path="/chat-interface-two" component={ChatInterface2} />

              <Route exact path="/meta" component={MetaPage} />
              <Route exact path="/chronology" component={ChronologyPage} />
              <Route exact path="/calendar" component={CalendarPage} />

              <Route exact path="/an-echo" component={AnEchoPage} />
              <Route exact path="/an-echo/instructions" component={AnEchoInstruction} />
              <Route exact path="/an-echo/intro" component={AnEchoIntro} />

              {poeticRoutes.map((route, i) => (
                <Route exact key={i} path={route.path} component={route.component} />
              ))}
              {causalityRoutes.map((route, i) => (
                <Route exact key={i} path={`/causality${route.path}`} component={route.component} />
              ))}
            </Switch>
          </Suspense>
        </Router>
      </ThemeProvider>
    </HelmetProvider>
  );
}

export default App;
