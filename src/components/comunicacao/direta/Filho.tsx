interface FilhoProps {
  nome: string, 
  sobrenome: string
}
export default function Filho(props: FilhoProps) {
  return (
    <div className="flex justify-center items-center bg-green-500 pd-5 ">
     <div className="flex flex-col gap-5 bg-green-500 text-white  rounded-md pd-5">
        <div className="flex flex-col justify-center gap-2 text-2xl bg-green-500">
          <span className="font-black bg-green-500">Filho</span>
          <span className= "bg-green-500">Nome: {props.nome}</span>
          <span className="bg-green-500">Sobrenome: {props.sobrenome}</span>
        </div>
      </div>
    </div>
  )
}
