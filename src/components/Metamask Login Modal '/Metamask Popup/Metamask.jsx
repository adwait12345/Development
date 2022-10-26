import React from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import detectEthereumProvider from '@metamask/detect-provider';
export default function Metamask() {
// var notify ;  
    (async () => {

        const provider = await detectEthereumProvider();

        if (provider) {
            //  console.log("hi") 
            // From now on, this should always be true:
            // provider === window.ethereum

            // startApp(provider); // initialize your app
            console.log('MetaMask! is Installed');

        } else {
            console.log('please');
            toast("Please install MetaMask!");
        }
    })();


    
  return (
      <div>
          {/* <button onClick={notify}>Notify !</button> */}
          <ToastContainer
              position="bottom-right"
              autoClose={5000}
              hideProgressBar={false}
              newestOnTop={false}
              closeOnClick
              rtl={false}
              pauseOnFocusLoss
              draggable
              pauseOnHover
          
          />
      </div>
  )
}
