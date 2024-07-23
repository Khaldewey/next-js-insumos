import Image from 'next/image'
import React, { useState } from 'react'

export default function ImagemAleatoria() {
const [pesquisa, _alterarPesquisa] = useState<string>('')
const [count, setCount] = useState<number>(0)
const [tamanho, setTamanho] = useState<number>(300)
// const url = 'https://picsum.photos/200/200'
// let pesquisa: string = ''

// function urlImagem () {
//     return `${url}${pesquisa}`
// }

function renderizarBotao (valor: string) {
    return (
        <button className={`bg-blue-600 px-4 py-2 rounded-md`} onClick={ () => {
            setCount(count + 1)
            _alterarPesquisa(valor)
            console.log(valor)
        }}>
            Image
        </button>
    )
}
  
return (
    <div className='flex flex-col gap-3 border border-zinc-500 p-7 rounded-md'>
        


        <Image src={pesquisa} height={300} width={300} alt="Imagem" className='rounded-md'/>
        
        <div className='flex justify-center gap-5'>
            {renderizarBotao(`https://picsum.photos/${tamanho}/${tamanho}?random=${count}`)}
        </div>
        
        <div className='flex justify-center'>
            <input type='number' value={tamanho} className='bg-zinc-800 p-2 rounded-md outline-none' onChange={
                e => {
                    setTamanho( +e.target.value)
                    console.log(e.target.value)}
            }/>
        </div>
       
    </div>
  )
}
