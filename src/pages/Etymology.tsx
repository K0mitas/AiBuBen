import React from 'react'
import { grabar } from '../Components/Data'
import Word from '../Components/Word'

// interface WordProps {
//   colors: boolean;
//   FavoritColor: boolean;
// }

export default function Etymology() {
  return (
    <div>
        {grabar.map(grabar => <Word  grabar={grabar} key={grabar.id} />)}
    </div>
  )
}

// FavoritColor={props.FavoritColor} colors={props.colors}