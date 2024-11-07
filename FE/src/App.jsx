import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import { publicRoutes } from "./routes";
import homeLayout from "./layouts/homeLayout";
import { Fragment  } from "react";

function App() {

  return (
    <Router>
      <div className="App">
        <Routes>
            {publicRoutes.map((route, index) => {
              const Page = route.component;
              let Layout = homeLayout;

              if(route.layout) {
                Layout = route.layout;
              } else if (route.layout === null) {
                Layout = Fragment;
              }

              return (
                <Route  
                  key={index}
                  path={route.path}
                  element={
                    <Layout>
                      <Page/>
                    </Layout>
                  }
                />
              );
            })}
        </Routes>
      </div>
    </Router>
  )
}

export default App
