
import './App.css';
import NavBarFootor from './components/NavBarFootor';
import MainPage from'./components/MainPage';
function App() {
  return (
    <>
    {/* When clicked on header and footer links/navbar home about us and all then it should land on other page */}
    {/* Icons at footer */}
    {/* when clicked on Help-->campus nav then it should redirect to campus nav */}
    {/* MainPage.js component will be there or removed? As we r keeping different modules different looks/homepg design */}
<NavBarFootor/>
<MainPage/>
    </>
  );
}
export default App;
