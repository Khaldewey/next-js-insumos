import { useState } from "react";
import Pergunta from "./Pergunta";

export default function Faq() {
  const [ativo, setAtivo] = useState<number>(0)

  function alternarVisibilidade(indice: number) {
    if (indice === ativo){
        setAtivo(-1)
    } else {
        setAtivo(indice)
    }
  }
  return (
    <div className="flex flex-col gap-2 w-[90%] md:w-3/4">
        <Pergunta aberta={ativo === 0} indice={0} alternarVisibilidade={alternarVisibilidade} texto=" O que é React? " resposta="React é um framework JavaScript criado pelo Facebook (atual Meta) que é usado para criar interfaces de usuário (UI) em aplicativos web. "/>
        <Pergunta aberta={ativo === 1} indice={1} alternarVisibilidade={alternarVisibilidade} texto="O que é Spring Boot?" resposta="Spring Boot é uma estrutura Java de código aberto usada para programar aplicativos autônomos e de nível de produção baseados em Spring com esforço mínimo."/> 
     
    </div>
  )
}
