import '../styles/globals.css'
import { useState } from "react";
import AppContext from './classcontext/context';
import garenImg from './../assets/GarenImg.jpg'

function MyApp({ Component, pageProps }) {

  interface userProps {
    name: string
    class: string
    userGold: number
    
  }

  const [userClass, setUserClass] = useState<userProps>({
    name: '',
    class:'',
    userGold:0,
    
    

    

  });
  return(
    <AppContext.Provider value={{userClass, setUserClass}}>
    <Component {...pageProps} />
    </AppContext.Provider>)
  
}

export default MyApp
