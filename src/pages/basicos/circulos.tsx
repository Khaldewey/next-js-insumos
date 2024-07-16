import Circulo from "@/components/basicos/Circulo";

export default function PaginaCirculos() {
  return (
    <div className=" flex justify-around items-center h-screen ">
        <Circulo text="#1" quasePerfeito></Circulo>
        <Circulo text="#2"></Circulo> 
        <Circulo text= "#3"></Circulo>
    </div>
  )
}
