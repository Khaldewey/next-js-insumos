import Filho from "./Filho";
interface PaiProps {
  nome: string, 
  sobrenome: string
}
export default function Pai(props: PaiProps) {
  return (
    
    <div className="flex gap-5 bg-blue-500 text-white border border-white rounded-md pd-5">
      <div className="flex flex-col justify-center gap-2 text-2xl bg-blue-500">
        <span className="font-black bg-blue-500">Pai</span>
        <span className= "bg-blue-500">Nome: {props.nome}</span>
        <span className="bg-blue-500">Sobrenome: {props.sobrenome}</span>
      </div>
      <Filho nome="João" sobrenome="Silva"/> 
     
    </div>
  )
}
