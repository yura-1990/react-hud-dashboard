import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Theme from "./components/Theme";
import Dashboard from "./pages/Dashboard";
import useSettingsStore from "./store/settings";
import Menus from "./pages/Menus";
import Footer from "./components/Footer";
import NotFound from "./pages/NotFound";

function App() {
  const {state: {toggleMenu, toggleSearch}} = useSettingsStore(state=>state)

  return (
      <>
          <div className={`app ${toggleMenu ? 'app-sidebar-collapsed' : 'app-sidebar-toggled'} ${toggleSearch ? 'app-header-menu-search-toggled' : ''}`}>
              <Header/>
              <Sidebar/>
              <button className="app-sidebar-mobile-backdrop"></button>
              <div className="app-content ">
                  <Routes>
                      <Route path="/" element={<Dashboard/>}/>
                      <Route path="/menus" element={<Menus/>}/>
                      <Route path="*" element={<NotFound/>} />
                  </Routes>
              </div>

              <Theme/>
              <Footer/>
          </div>

      </>

  );
}

export default App;
