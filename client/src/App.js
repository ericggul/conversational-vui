import useResize from "@U/hooks/useResize";
import React, { useEffect, useMemo, Suspense } from "react";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import styled, { ThemeProvider } from "styled-components";
import { GlobalStyle, theme } from "@S/index";

import MainPage from "@P/MainPage";

import ChatInterface1 from "@P/ChatUIPage/ChatInterface1";
import ChatInterface2 from "@P/ChatUIPage/ChatInterface2";

import MetaPage from "@P/Meta";
import ChronologyPage from "@P/Chronology";
import PoeticWebTestPage from "@P/PoeticWeb/Test";

import SuspenseLoading from "@/foundations/chronology/Suspense";

function App() {
  useEffect(() => {
    console.warn = console.error = () => {};
  });
  const [windowWidth, windowHeight] = useResize();
  const themeWithWindowSize = useMemo(() => ({ ...theme, windowWidth, windowHeight }), [windowWidth, windowHeight]);

  return (
    <ThemeProvider theme={themeWithWindowSize}>
      <GlobalStyle />
      <Router>
        <Suspense fallback={<SuspenseLoading />}>
          <Switch>
            <Route exact={true} path="/" component={MainPage} />
            <Route path="/chat-interface-one" component={ChatInterface1} />
            <Route path="/chat-interface-two" component={ChatInterface2} />

            <Route path="/meta" component={MetaPage} />
            <Route path="/chronology" component={ChronologyPage} />
            <Route path="/poetic-web-test" component={PoeticWebTestPage} />
          </Switch>
        </Suspense>
      </Router>
    </ThemeProvider>
  );
}

export default App;
