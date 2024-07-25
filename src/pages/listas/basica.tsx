import TabelaSerieA from "@/components/listas/TabelaSerieA"

export default function PaginaListaBasica () {
   const times = [
     'Botafogo',
     'Flamengo', 
     'Palmeiras', 
     'Fortaleza', 
     'Cruzeiro', 
     'São Paulo',
     'Bahia', 
     'Athletico-PR',
     'Bragantino',
     'Atlético-MG',
     'Vasco da Gama',
     'Juventude',
     'Internacional',
     'Criciúma',
     'Corinthians',
     'Cuiabá',
     'Vitória',
     'Grêmio',
     'Fluminense',
     'Atlético Goianiense'
   ]
    return (
       <div className="bg-black h-screen text-slate-200 flex flex-col justify-center items-center">
         <h1 className="text-5xl font-black">Tabela Série A</h1>
         <TabelaSerieA times={times}/>
       </div>
    )
}