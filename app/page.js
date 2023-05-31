import MenuNav from "./Componentes/MenuNav"
import estilo from "./Styles/home.module.css"
import LugarItem from "./Componentes/LugarItem"

//importamos el estilo del modulo
export default function Home() {
  return (
    <main className=" flex flex-col w-full items-center">

    <section className={estilo.hero}>
      <div className="contenedor">
      <div className="md:max-w-lg text-white  flex flex-col gap-3 md:items-start items-center">
      <h1 className="md:text-5xl text-3xl">Conoce los mejores lugares del Huila</h1>
      <p>Descubre a donde ir según tus gustos.</p>
      <button className={estilo.botonAccion}>Encuentra tu destino ideal</button>
      </div>
      </div>
    </section>
    <section className={estilo.divpopulares +" contenedor"}>
      <h1 className="text-lg">Sitios Populares</h1>
      <LugarItem nombre="Desierto Tatacoa"/>
      <LugarItem nombre="San Agustin"/>
      <LugarItem nombre="Cascada Isnos"/>
      <LugarItem nombre="Mano del gigante"/>
    </section>
    </main>
  )
}
