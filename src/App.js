import "./App.css";
import Navbar from "./Components/Navbar";
import SearchBar from "./Components/SearchBar";
import Sidebar from './Components/Sidebar';
import DashBoard from './Components/DashBoard';
import ContentPage from "./ContentPage";
import { useState } from "react";
function App() {
  const [openSideBar, setOpenSideBar] = useState(false);
  const openOnclickFun=()=>{
    setOpenSideBar(!openSideBar)
  }
  return (
    <div className="App">
      <div className="nav-item">
      <Navbar onClickFun={openOnclickFun}>
        <SearchBar />
      </Navbar >
      </div>
      <div className="side-item">
      <Sidebar openSideBar={openSideBar}/>
      </div>
      <div className="content-item">
      <ContentPage >
      <DashBoard/>
      </ContentPage>
      </div>
    </div>
  );
}
export default App;
