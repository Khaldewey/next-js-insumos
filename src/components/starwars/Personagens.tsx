import useProcessando from "@/data/hooks/useProcessando"
import { resolve } from "path"
import { useState } from "react"


export default function Personagens() {
  
  const { processando, iniciarProcessamento, encerrarProcessamento} = useProcessando()

  async function simularChamadaApi(){
    return new Promise(resolve => {
     setTimeout(() => {
      resolve(1)
     }, 1000)
    })

  }

  async function obterPersonagens(){
    try {
      iniciarProcessamento()
      
      await simularChamadaApi()
    } finally {
      encerrarProcessamento()
     
    }
    
    
    
  }
  
  return (
    <div>
      {processando ? (
      <div>Processando ...</div>
      ) : (
      <h1> Conteúdo com os Personagens</h1>
      )}
      <button onClick={obterPersonagens} className="bg-blue-300 p-2"> Obter</button>
    </div>
  )
}
