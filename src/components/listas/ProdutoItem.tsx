import Produto from "@/model/Produto"
import Image from "next/image"
import { FaShoppingCart } from "react-icons/fa"

interface ProdutoItemProps {
    produto: Produto
    comprar: (produto: Produto) => void
}

export default function ProdutoItem(props: ProdutoItemProps) {
  const { produto } = props
  return (
    <div className={`
     flex flex-col rounded-md 
     border border-zinc-300
     pd-1
    `}>
        <Image src={produto.imagem} width={300} height={200} alt="Imagem do produto" className="rounded-md"/> 
        <div className="flex flex-col p-3 gap-3">
           
           <div className="flex items-center justify-between">
            <div className="text-2xl font-black"> {produto.nome} </div>
            <div className="text-lime-500 font-bold"> R$ {produto.preco} </div>
           </div> 

           <div>
             <div className="text-gray-500">{produto.descricao}</div>
           </div> 

           <div>
             <button className="botao flex w-full justify-center gap-2 items-center"
             onClick={() => props.comprar(produto)}>
                <FaShoppingCart/>
                Comprar
            </button>
           </div>
           
        </div>
    </div>
  )
}
