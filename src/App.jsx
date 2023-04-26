import LeftSlide from "./components/LeftSlide/LeftSlide";
import "./App.css";
import logo from "./assets/logoncc.png";
import DescFile from "./components/DescFile/DescFile";
import cssPhoto from "./assets/css.png";
import dwPhoto from "./assets/dw.png";
import urlPhoto from "./assets/url.png";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <LeftSlide />
      <div className="mainContainer">
        <img className="logo" src={logo} />
        <div className="description">
          <p className="description--title">
            Lorem ipsum dolor sit asmet?
          </p>
          <p className="description--text" >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tristique consequat placerat. Vestibulum auctor pellentesque sem, eu posuere erat hendrerit quis. Maecenas vel consequat turpis. Nam facilisis, ligula in mattis sodales, augue justo tristique nulla, sed lacinia ante eros ut mi. Morbi vitae diam augue. Aliquam vel mauris a nibh auctor commodo. Praesent et nisi eu justo eleifend convallis. Quisque suscipit maximus vestibulum. Phasellus congue mollis orci, sit amet luctus augue tristique eu. Donec vulputate odio neque, sed semper turpis pellentesque a.</p>
        </div>
        <div className="group-items">
          <DescFile image={cssPhoto} />
          <DescFile image={dwPhoto} />
          <DescFile image={urlPhoto} />
        </div>
        <Footer/>
      </div>
 

    </>
  );
}

export default App;
