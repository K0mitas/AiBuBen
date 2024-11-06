import React, { useState } from 'react'
import {barer} from "./../Components/Data"
import { DataID } from '../Components/Type'

interface BarerProps {
  barer: DataID
  setCorrectAnswers: React.Dispatch<React.SetStateAction<number>>;
  setDontCorrect: React.Dispatch<React.SetStateAction<number>>;
}

export default function Rusarm(props: BarerProps) {
  const { setCorrectAnswers, setDontCorrect } = props;
  const [num, setNum] = useState(0)
  const [inp, setInp] = useState(``)
  const [info, setInfo] = useState(false)

  function next () {
    if (inp === barer[num].hay) {
      setCorrectAnswers(prev => prev + 1);
      setNum(num + 1);
      setInp("")
    }

    if (inp !== barer[num].hay) {
      setDontCorrect(prev => prev + 1)
    }

    if (num === barer.length -1) {
      setNum(0)
    }
  }

  const addInp = (e: { target: { value: React.SetStateAction<string> } }) => {
    setInp(e.target.value)
  }

  function infoText () {
    setInfo(!info)
  }

  return (
    <div>

        <div className='wrap-rusarm'>

            <h1 className='h1-rusarm'>Попробуйте написать предложенные русские слова армянскими буквами</h1>

            <h2 className='rusarm-text'>{barer[num].rus}</h2>

        </div>

        <div className='input-rusarm-block'>

            <input className='input-rusarm' value={inp} onChange={addInp} type="text" />

        </div>
            
        <button className='next-button' onClick={next}>Дальше</button>
        <button className='info-button' onClick={infoText}>!</button>

        {info && (
          
          <p className='info-text-p'>{barer[num].hay}</p>

        )}

    </div>
  )
}
