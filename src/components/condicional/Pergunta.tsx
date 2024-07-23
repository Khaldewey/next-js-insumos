import { useState } from "react"

export default function Pergunta() {
  
  const [aberta, setAberta] = useState<boolean>(false)

  return (
    <div className="border border-white rounded-md pd-5 overflow-hidden">
       <div className="bg-zinc-700 p-5 cursor-pointer" onClick={ () => setAberta(!aberta)}> Pergunta </div>
       {/* {aberta ? "Sim" : "Não"} */}
       {aberta && (
        <div className="p-5"> Resposta </div>
       )}
       
    </div>
  )
}
