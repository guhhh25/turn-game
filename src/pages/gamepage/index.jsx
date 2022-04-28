import { useContext, useEffect } from 'react'
import AppContext, { useAppContext } from '../classcontext/context'
import styles from '../gamepage/styles.module.css'
import UserCard from './userCardWarrior'
import GarenImg from './../../assets/GarenImg.jpg'
import UserCardWarrior from './userCardWarrior'
import UserCardRogue from './userCardRogue'
import UserCardMage from './userCardMage'

export default function gamePage(){


    const value = useContext(AppContext)
    

    const values = useContext(AppContext)
    const contextValues = useContext(AppContext)
    const userName = contextValues.userClass.name
    const userClass = contextValues.userClass.class
    const setUserClass = contextValues.setUserClass
   console.log(values)


    return(
        <div className={styles.container}>
        {userClass === 'WARRIOR' ? <UserCardWarrior name={userName}/> : ''}
        {userClass === 'ROGUE' ? <UserCardRogue name={userName}/> : ''}
        {userClass === 'MAGE' ? <UserCardMage name={userName}/> : ''}
            
        </div>
    )
}