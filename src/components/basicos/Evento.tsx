
export default function Evento() {
   let contador = 0
    function incrementar () {
        console.log(contador++)
    }
   return (
    <button className={`flex justify-center text-4xl items-center h-72 w-72 bg-green-600`} onClick={incrementar}>Evento</button>
  )
}
