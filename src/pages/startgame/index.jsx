import Image from 'next/image'
import styles from './../startgame/styles.module.css'
import Link from "next/link";
import { useContext, useEffect, useState } from 'react'
import AppContext, { useAppContext } from '../classcontext/context'

export default function startGame(props){

  const swordImg = "https://img.icons8.com/external-justicon-lineal-color-justicon/25/000000/external-sword-pirates-justicon-lineal-color-justicon.png"
  const daggerImg = "https://img.icons8.com/external-soft-fill-juicy-fish/25/000000/external-katanas-ninja-soft-fill-soft-fill-juicy-fish.png"
  const fireImg = "https://img.icons8.com/color/25/000000/staff-stick.png"

  const contextValues = useContext(AppContext)
  const userName = contextValues.userClass.name
  const userClass = contextValues.userClass.class
  const setUserClass = contextValues.setUserClass

  const selectedColor = {
   border: '5px solid red',
  }

  const notselectedColor = {
    
   }

  const [selectedWarrior, setSelectedWarrior] = useState(false)
  const [selectedRogue, setSelectedRogue] = useState(false)
  const [selectedMage, setSelectedMage] = useState(false)
  const [selectedArray, setSelectedArray] = useState(false)
  const [inputValue, setInputValue] = useState()
  const [selected, setSelected] = useState()

  const useSelected = () =>{
    if(selectedWarrior){
      setSelected('WARRIOR')
    }

    if(selectedMage){
      setSelected('MAGE')
    }

    if(selectedRogue){
      setSelected('ROGUE')
    }
  }

  useEffect(() =>{
      useSelected()
  },[selectedWarrior, selectedMage, selectedRogue])


  const classesAndName = selectedWarrior || selectedRogue || selectedMage
  const inputTrueValue = inputValue

  const NameInput = (e) =>{
    setInputValue(e.target.value)
    
  }

  const setFalse = (func1, element1, func2, element2) =>{
    func1(element1 = false)
    func2(element2 = false)
  }

  const selectClassWarrior = () =>{
    if(selectedRogue  || selectedMage ){
      setFalse(setSelectedRogue,selectedRogue,setSelectedMage,selectedMage)
      setSelectedWarrior(!selectedWarrior)
    }else{
      setSelectedWarrior(!selectedWarrior)
    }
    
  }

  const selectClassRogue = () =>{
    if(selectedWarrior  || selectedMage ){
      setFalse(setSelectedWarrior,selectedWarrior,setSelectedMage,selectedMage)
      setSelectedRogue(!selectedRogue)
    }else{
      setSelectedRogue(!selectedRogue)
    }
    
  }

  const selectClassMage = () =>{
    if(selectedWarrior  || selectedRogue ){
      setFalse(setSelectedWarrior,selectedWarrior,setSelectedRogue,selectedRogue)
      setSelectedMage(!selectedMage)
    }else{
      setSelectedMage(!selectedMage)
    }
  }

  const submitClass = (inputName, classState) =>{
    setUserClass({
      name:inputName,
      class:classState
    })
  }

    return(
        
        <div  className={styles.container}>
              <div id='background' className={styles.classPhoto}>
              </div>
              <div className={styles.classSelect}>
                <ul>
                  <li onClick={selectClassWarrior} style={selectedWarrior ? selectedColor : notselectedColor }> <img src={swordImg}/> WARRIOR <img src={swordImg}/></li>
                </ul>
                <ul>
                  <li onClick={selectClassRogue} style={selectedRogue ? selectedColor : notselectedColor }>  <img src={daggerImg}/>ROGUE <img src={daggerImg}/></li>
                </ul>
                <ul>
                  <li onClick={selectClassMage} style={selectedMage ? selectedColor : notselectedColor }>  <img src={fireImg}/>MAGE <img src={fireImg}/></li>
                </ul>
                <ul>
                  <li>
                    <input className={styles.inputName}  onChange={NameInput} type={'text'} placeholder={'Insira o nome aqui'}/>
                  </li>
                </ul>
                <ul>
                  <li>
                    <button className={styles.applynw} onClick={() => submitClass(inputValue, selected)}>

                    {classesAndName && inputTrueValue ? (
                      <Link href={'/gamepage'}>
                      Enviar
                      </Link>
                    ) : '' }

                     
                 </button>
                 </li>
                </ul>
              </div>
            </div>
            
    )
}