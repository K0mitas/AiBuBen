import React, { useState } from 'react'
import {haybar} from "./../Components/Data"
import { DataHayID } from '../Components/Type'

interface HaybarerProps {
  haybarer: DataHayID
  setCorrectAnswers: React.Dispatch<React.SetStateAction<number>>;
  setDontCorrect: React.Dispatch<React.SetStateAction<number>>;
}

export default function Hayrus(props: HaybarerProps) {
  const { setCorrectAnswers, setDontCorrect } = props;
  const [num, setNum] = useState(0)
  const [inp, setInp] = useState(``)
  const [info, setInfo] = useState(false)

  function next () {

    if (inp === haybar[num].rusbar) {
      setCorrectAnswers(prev => prev + 1)
      setNum(num + 1);
      setInp("")
    }

    if (inp != haybar[num].rusbar) {
      setDontCorrect(prev => prev + 1)
    }

    if (num === haybar.length -1) {
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

            <h1 className='h1-rusarm'>Попробуйте написать предложенные армянские слова русскими буквами</h1>

            <h2 className='rusarm-text'>{haybar[num].haybar}</h2>

        </div>

        <div className='input-rusarm-block'>

            <input className='input-rusarm' value={inp} onChange={addInp} type="text" />

        </div>
            
        <button className='next-button' onClick={next}>Дальше</button>
        <button className='info-button' onClick={infoText}>!</button>

        {info && (
          
          <p className='info-text-p'>{haybar[num].rusbar}</p>

        )}

    </div>
  )
}
