
const LugarItem = ({nombre}) => {
  return (
    <div className="items-center justify-center flex-col flex cursor-pointer">
    <div className="w-48 h-32 bg-slate-900 rounded-lg hover:bg-elm-700 transition-colors"></div>
    <h3 className="font-bold">{nombre}</h3>
    </div>
  )
}

export default LugarItem