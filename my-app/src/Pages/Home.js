// import React from 'react';
// import { useState } from 'react';
// function Home(){
//     const[error , SetError] = useState(null);
//     const [showAddress, SetShowAddress]= useState(null);
//     const loginMetamask = ()=>{
//         if(window.ethereum){
//             window.ethereum.request({method: 'eth_requestAccounts'}).then(result =>{
//                 fetchAllData(result[0]);
//             })
//         }else{
//             SetError('Please Install MetaMask')
//         }
//     }
// }

// const fetchAllData =(fetch) => {
//     SetShowAddress(fetch);
// }

// function Home() {
//   return (
//     <div>
//         METAMASK ADDRESS : {showAddress}
//         <button onClick={ loginMetamask}> Lets login to Meta Mask</button>
//         { error}
//     </div>
//   )
// }
//  export default Home;




import React, { useState } from 'react';
import './Home.css';

function Home() {
  const [error, setError] = useState(null);
  const [showAddress, setShowAddress] = useState(null);

  const loginMetamask = () => {
    if (window.ethereum) {
      window.ethereum.request({ method: 'eth_requestAccounts' }).then(result => {
        fetchAllData(result[0]);
      });
    } else {
      setError('Please Install MetaMask');
    }
  };

  const fetchAllData = (fetch) => {
    setShowAddress(fetch);
  };

  return (

    <div className="container">
    <div className="address">METAMASK ADDRESS: {showAddress}</div>
    <button className="button" onClick={loginMetamask}>
      Let's login to Meta Mask
    </button>
    {error && <div className="error">{error}</div>}
  </div>
);


//     <div>
//       METAMASK ADDRESS: {showAddress}
//       <button onClick={loginMetamask}>Lets login to Meta Mask</button>
//       {error}
//     </div>
//   );
}

export default Home;
