import { FC } from "react";
import { AnimatePresence, AnimateSharedLayout } from "framer-motion";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import Map from "./pages/map";
import Home from "./pages/home";
import LandFill from "./pages/landfill";
import About from "./pages/about";
import Blog from "./pages/blog";
import AsideMenu from "./template/AsideMenu";
import MapNav from "./template/MapNav";
import Nav from "./template/Nav";
import ContactUs from "./pages/contact-us";
import { useState } from "react";
const App: FC = () => {
  const [open, setOpen] = useState(false);
  const closeFn = () => setOpen(false);
  return (
    <AnimateSharedLayout type="switch">
      <Router>
        <div
          style={{ height: "100%" }}
          className="sm:relative fixed top-0 bottom-0"
        >
          <AsideMenu closeFn={closeFn} open={open} />
          <section className="h-full sm:h-screen w-screen bg-gray-200 flex flex-col-reverse sm:flex-row min-h-0 min-w-0 overflow-hidden">
            <main className="sm:h-full flex-1 flex flex-col min-h-0 min-w-0 overflow-hidden">
              <Route
                render={({ location }) => (
                  <AnimatePresence exitBeforeEnter initial={false}>
                    <Switch location={location} key={location.pathname}>
                      <Route exact path="/" component={MapNav} />
                      <Route path="/" component={Nav} />
                    </Switch>
                  </AnimatePresence>
                )}
              />
              <div className="flex flex-1 overflow-hidden ">
                <Route
                  render={({ location }) => (
                    <AnimatePresence exitBeforeEnter initial={false}>
                      <Switch location={location} key={location.pathname}>
                        <Route exact path="/" component={Map} />
                        <Route exact path="/about" component={About} />
                        <Route exact path="/contact_us" component={ContactUs} />
                        <Route exact path="/landfill" component={LandFill} />
                        <Route exact path="/home" component={Home} />
                        <Route
                          exact
                          path={["/blog/:id", "/blog"]}
                          component={Blog}
                        />
                      </Switch>
                    </AnimatePresence>
                  )}
                />
              </div>
            </main>
          </section>
        </div>
      </Router>
      <div
        className="fixed top-2 start-5 w-12 h-10 z-50 border-2 transition-colors text-orange-600 duration-200 border-gray-300 hover:bg-gray-200 cursor-pointer bg-white rounded-md  flex items-center justify-center "
        onClick={() => setOpen((val) => !val)}
      >
        <HiOutlineMenuAlt3 size={24} />
      </div>
    </AnimateSharedLayout>
  );
};

export default App;
