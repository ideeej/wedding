'use client'
import React from 'react'
import { useState, useEffect } from 'react';


function CalendarCounter() { 

  const updateTime = () => {
    let d = new Date()
    let ano = d.getFullYear()
    let mes = d.getMonth()
    let dia = d.getDate()
    let utc_hora = d.getHours()
    let utc_minuto = d.getMinutes()
    let utc_segundo = d.getSeconds()

    let tempo = (Date.UTC(2023, 9, 7, 16, 30, 0) - Date.UTC(ano, mes, dia, utc_hora, utc_minuto, utc_segundo)) / 1000
    let segundos = Math.floor(tempo % 60);
    let minutos = Math.floor(tempo / 60 % 60);
    let horas = Math.floor(tempo / 60 / 60 % 24);
    let dias = Math.floor(tempo / 60 / 60 / 24);
    return { dias, horas, minutos, segundos}
  }
  
  let tempo = updateTime();
  const [segundos, setSegundos] = useState(tempo.segundos)
  const [minutos, setMinutos] = useState(tempo.minutos)
  const [horas, setHoras] = useState(tempo.horas)
  const [dias, setDias] = useState(tempo.dias)

  useEffect(() => {
    tempo = updateTime()
    console.log(tempo)

    setTimeout(() => {setSegundos(tempo.segundos)}, 1000)
    setTimeout(() => {setMinutos(tempo.minutos)}, 1000)
    setTimeout(() => {setHoras(tempo.horas)}, 1000)
    setTimeout(() => {setDias(tempo.dias)}, 1000)
  })

  return (
    <div>
      <h1>Faltam</h1>
      <span>{dias} Dias<br/></span>
      <span>{horas}:</span>
      <span>{minutos}:</span>
      <span>{segundos}.</span>
    </div>
  )
}

export default CalendarCounter