interface TabelaSerieAProps {
    times: string []
}

export default function TabelaSerieA(props: TabelaSerieAProps) {
    console.log(props.times)
    const itens: any[] = []
    
    // transformar uma string -> <li>
    for(let i = 0; i < props.times.length; i++){
        console.log(props.times[i])
        itens.push((
            <li key={props.times[i]} className="text-xl list-decimal"> 
             {props.times[i]}
            </li>
        ))
    }
    
     const itens2 = props.times.map((time, i) => {
        return (
            <li key={time} className={`text-xl list-decimal ${i % 2 === 0 ? 'text-blue-500' : 'text-gray-500'}`}>{time}</li>
        )
     })

    return (
    <div>
        <ol>
            {itens2}
        </ol>

    </div>
  )
}
