import React from 'react';
import './App.css';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar';


function App() {
  return (
    // <Router>
      <>
      <div style={{ textAlign: 'center' }}>
        <h1 style={{ display: 'inline-block' }}>NFT Marketplace</h1>
      </div>
      {/* <Wallet_cart /> */}
        <Navbar />
      
        {/* <div className="container">
          <Routes>
            <Route path="/MintNFT" element={<MintNFT />} />
            <Route path="/Buy_Nft" element={<Buy_Nft />} />
            <Route path="/NFTList" element={<NFTList/>} />
          </Routes>
        </div> */}
      </>
    // </Router>
  );
}

export default App;





