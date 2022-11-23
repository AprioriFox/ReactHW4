import './App.css';
import ContactsPage from './pages/contactsPage/ContactsPage'
import PortfolioPage from "./pages/PortfolioPage/PortfolioPage"
import AboutUs from "./pages/aboutUs/AboutUs"

function App() {
  return (
    <div className="App">
        <AboutUs />
        <PortfolioPage />
        <ContactsPage />
    </div>
  );
}

export default App;
