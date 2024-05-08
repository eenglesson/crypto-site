import CryptoCard from './CryptoCard';
import Navbar from './Navbar';

function App() {
  return (
    <>
      <div className='flex bg-bg-1 w-[100vw] h-[100vh] justify-center items-center'>
        <Navbar />
        <CryptoCard />
      </div>
    </>
  );
}

export default App;
