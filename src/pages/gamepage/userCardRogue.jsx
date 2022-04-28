import { useContext, useEffect } from 'react'
import AppContext from '../classcontext/context'
import styles from './../gamepage/card.module.css'

export default function UserCardRogue(props) {

   

    return(
        <div className={styles.container}>
            <div id='fancyBorder' className={styles.fancyborderRogue}>
            <div className={styles.containerCard}>
                <div className={styles.cardName}>
                {props.name}
                </div>
                <div className={styles.cardBody}>
                
                </div>
                <div className={styles.status}>
                </div>
            </div>
            </div>

            
        </div>
    )
}