import { useGlobalContext } from './Context';
import Navbar from './Navbar';
import Hero from './Hero';
import Sidebar from './Sidebar';
import Submenu from './Submenu';
const App = () => {
  const { isSidebarOpen } = useGlobalContext();
  return (
    <main>
      <Navbar />
      <Hero />
      <Sidebar />
      <Submenu />
    </main>
  );
};
export default App;
