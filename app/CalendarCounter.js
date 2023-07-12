'use client'
import React from 'react'
import { useState, useEffect } from 'react';

function CalendarCounter() { 
  const updateTime = (d=new Date()) => {
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
  
  let tempo = updateTime(new Date());
  const [segundos, setSegundos] = useState(String(tempo.segundos).padStart(2, "0"))
  const [minutos, setMinutos] = useState(String(tempo.minutos).padStart(2, "0"))
  const [horas, setHoras] = useState(String(tempo.horas).padStart(2, "0"))
  const [dias, setDias] = useState(String(tempo.dias).padStart(2, "0"))

  useEffect(() => {
    tempo = updateTime(new Date())

    setTimeout(() => {setSegundos(String(tempo.segundos).padStart(2, "0"))}, 1000)
    setTimeout(() => {setMinutos(String(tempo.minutos).padStart(2, "0"))}, 1000)
    setTimeout(() => {setHoras(String(tempo.horas).padStart(2, "0"))}, 1000)
    setTimeout(() => {setDias(String(tempo.dias).padStart(2, "0"))}, 1000)
  })

  return (
    <div className="text-center font-black w-4/5 bg-yellow-300 pb-8">
      <h1 className="text-6xl pt-8">FALTAM</h1>
      <div className="flex gap-1 align-center justify-center">
        <div className="w-20 bg-slate-50 border-2 border-solid border-slate-900">
          <span className="text-5xl text-slate-800 font-black block">{dias}</span>
          <span className="text-sm">dias</span>
        </div>
        <div className="w-20 bg-slate-50 border-2 border-solid border-slate-900">
          <span className="text-5xl text-slate-800 font-black block">{horas}</span>
          <span className="text-sm">horas</span>
        </div>
        <div className="w-20 bg-slate-50 border-2 border-solid border-slate-900">
          <span className="text-5xl text-slate-800 font-black block">{minutos}</span>
          <span className="text-sm">minutos</span>
        </div>
        <div className="w-20 bg-slate-50 border-2 border-solid border-slate-900">
          <span className="text-5xl text-slate-800 font-black block">{segundos}</span>
          <span className="text-sm">segundos</span>
        </div>
      </div>
      
    </div>
  )
}

export default CalendarCounter