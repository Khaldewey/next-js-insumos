import Grid from "@/components/layout/Grid";


export default function PaginaLayout() {
  return (
    <div className="flex justify-center items-center h-screen bg-slate-600 ">
        <Grid cols={1} sm={2} md={4} lg={8}>
            <div className="bg-slate-200 h-36 w-36"></div>
            <div className="bg-green-200 h-36 w-36"></div> 
            <div className="bg-cyan-200 h-36 w-36"></div> 
            <div className="bg-rose-200 h-36 w-36"></div>
            <div className="bg-yellow-200 h-36 w-36"></div>
            <div className="bg-blue-200 h-36 w-36"></div> 
            <div className="bg-red-200 h-36 w-36"></div> 
            <div className="bg-zinc-200 h-36 w-36"></div>
        </Grid>
    </div>
  )
}
