interface DisplayProps {
    valor: number
}
export default function Display(props: DisplayProps) {
  return (
    <div className=" flex justify-center flex-1 items-center text-5xl font-black bg-zinc-800 rounded-lg p-5">
        {props.valor}
    </div>
  )
}
