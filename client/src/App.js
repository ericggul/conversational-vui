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

import SuspenseLoading from "@/foundations/chronology/Suspense";

function App() {
  // useEffect(() => {
  //   console.log("제작 의도");
  //   console.log(
  //     "Authorized Personnel Only는 개방성을 골자로 하는 WWW(World-Wide Web)의 기본 가정에 반대되는 선언문이다."
  //   );
  //   console.log(
  //     "미국 유명 대학원의 추천제도와 사교클럽의 가입요건을 연상시키는 이 문구는 enclosed society 내부의 구성원 만이 들어갈 수 있는 허구의 웹사이트를 가정한다."
  //   );
  //   console.log(
  //     "강제적이고 배타적인 이 문구는 그러나, 화면을 줌아웃해서 화면 속 3D 세계를 벗어날 경우, (시각적으로) 사라지게 된다."
  //   );
  //   console.log(
  //     "이는 개방적인 웹 속의 배타적인 성질의 추구 자체가 허구임을 우회적으로 시사하고, 이러한 배타적인 성질을 넘어 더욱 개방적인 웹을 사용자들이 능동적으로 만들어 나갈 수 있음을 함축적으로 보여주고 있다."
  //   );
  //   console.log(
  //     "보들리야르적인 의미에서 시뮬라시옹을 벗어나는 한가지의 방법, 그것은 대상이 시뮬라시옹을 인지하는데에서 출발한다."
  //   );
  //   console.log(
  //     "이 프로젝트는 The Truman Show와 2001: A Space Odyssey로 부터 직접적인 영향을 받았다."
  //   );
  // }, []);

  useEffect(() => {
    console.warn = console.error = () => {};
  });
  const [windowWidth, windowHeight] = useResize();
  const themeWithWindowSize = useMemo(
    () => ({ ...theme, windowWidth, windowHeight }),
    [windowWidth, windowHeight]
  );

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
          </Switch>
        </Suspense>
      </Router>
    </ThemeProvider>
  );
}

export default App;
