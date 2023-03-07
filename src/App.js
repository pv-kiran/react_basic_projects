import './App.css';
import { AppProvider } from './Sidebar/context';
import Container from './Sidebar/Container';

// import Birthday from './Birtday/Birthday';
// import Main from './Tours/Main';
// import MainReview from './Reviews/MainReview';
// import MainQuestion from './Accordion/MainQuestion';
// import MainMenu from './Menu/MainMenu';
// import Tab from './Tab/Tab';
// import Slider from './Slider/Slider';
// import Lorem from './LoremGenerator/Lorem';
// import Groccery from './Grocery/Groccery';
// import Navbar from './NavBar/Navbar';







function App() {
  return (
    <div className="App">
      {/* <Birthday></Birthday> */}
      {/* <Main></Main> */}
      {/* <MainReview></MainReview> */}
      {/* <MainQuestion></MainQuestion> */}
      {/* <MainMenu></MainMenu> */}
      {/* <Tab></Tab> */}
      {/* <Slider></Slider> */}
      {/* <Lorem></Lorem> */}
      {/* <Groccery></Groccery> */}
      {/* <Navbar></Navbar> */}
      <AppProvider>
          <Container></Container>
      </AppProvider>
    </div>
  );
}

export default App;
