import React from 'react'

interface HomeProps {
  correctAnswers: number;
  dontCorrect: number;
}

export default function Home({correctAnswers, dontCorrect}: HomeProps) {
  return (
    
    <div className='home-wrap'>

      <h1 className='home-h1'>Ваша статистика</h1>

    <div className='home-block-wrapp'>

      <div className='home-block-course'>
        <h2 className='home-block-title'>Количество правильных ответов</h2>
        <p className='home-num'>{correctAnswers}</p>
      </div>


      <div className='home-block-course'>
        <h2 className='home-block-title'>Количество неправильных ответов</h2>
        <p className='home-num'>{dontCorrect}</p>
      </div>

    </div>
  </div>

  )
}
