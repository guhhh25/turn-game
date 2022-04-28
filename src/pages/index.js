import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import gladImg from '../assets/dravenImg.jpg'
import { useContext, useEffect } from 'react'
import AppContext from './classcontext/context'

export default function Home(props) {

  const values = useContext(AppContext)
  const userName = values.userClass.name



  const testando = () =>{
    window.location.href = "http://localhost:3000/startgame";
   }

    useEffect(() =>{
        if(userName === ''){
            testando()
        }
    },[])

  return (
    <div>
      
    </div>
  )
}
