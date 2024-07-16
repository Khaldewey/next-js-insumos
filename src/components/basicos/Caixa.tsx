

export default function Caixa(props: any) {
  return (
    <div className={
        "bg-purple-500 rounded-md flex justify-center items-center p-2 w-64 h-64 text-3xl font-thin"
        }>
        {props.children}
    </div>
  )
}
