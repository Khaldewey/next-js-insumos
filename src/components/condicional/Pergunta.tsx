import { useState } from "react"
import If from "./If"
interface PerguntaProps {
  indice: number
  texto: string 
  resposta: string
  aberta: boolean
  alternarVisibilidade: (indice: number) => void
}
export default function Pergunta(props: PerguntaProps) {
  
  // const [aberta, setAberta] = useState<boolean>(false)

  return (
    <div className="border border-zinc-300 rounded-md pd-5 overflow-hidden">
       <div className="bg-zinc-700 p-5 cursor-pointer select-none flex justify-between" onClick={ () => props.alternarVisibilidade(props.indice)}><span> { props.texto }</span>  </div>
       {/* {aberta ? "Sim" : "Não"} */}
       
       <If teste={props.aberta}>
        <div className="p-5"> {props.resposta} </div>
       </If>
       {/* {aberta && (
        <div className="p-5"> {props.resposta} </div>
       )} */}
       
    </div>
  )
}
