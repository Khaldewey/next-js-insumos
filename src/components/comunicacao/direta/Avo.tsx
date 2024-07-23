import Pai from "./Pai";

interface AvoProps {
  nome: string, 
  sobrenome: string
}

export default function Avo(props: AvoProps) {
  return (
    <div className="flex flex-col gap-5 bg-purple-700 text-white pd-5 rounded-md">
      <div className="flex flex-col justify-center gap-2 text-2xl bg-purple-700">
        <span className="font-black bg-purple-700">Avô</span>
        <span className="bg-purple-700">Nome: {props.nome}</span>
        <span className="bg-purple-700">Sobrenome: {props.sobrenome}</span>
      </div>
      <Pai nome="Xico" sobrenome="Silva"/>
      <Pai nome="Jandson" sobrenome="Silveira"/> 
      <Pai nome="Silvio" sobrenome="Santos"/>
    </div>
  )
}
