interface CirculoProps {
    text: string
    quasePerfeito?: boolean
}

export default function Circulo( props: CirculoProps) {
    console.log(props)
  return (
    <div className={`h-64 w-64 bg-cyan-200 flex justify-center items-center text-black text-3xl font-black ${props.quasePerfeito ? 'rounded-md' : 'rounded-full'}`}>
        {props.text}
    </div>
  )
}
