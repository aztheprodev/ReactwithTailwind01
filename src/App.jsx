

function App() {

  return (
    <>
      <h1 className="text-[52px] text-4xl font-bold bg-gradient-to-r from-blue-500 to-white-600 text-white">Hello</h1>
      <h1 className="text-xs">Hello</h1>
      <h1 className="text-sm font-bold text-red-600">Hello</h1>

      <div className="bg-gradient-to-r from-blue-500 to-red-600 p-4 box-border size-180 border-4 rounded-tr-3xl border-b-dashed m-10 flex items-center justify-center relative hover:from-white hover:to-white transition-all duration-10000">
      <div className="bg-gradient-to-r from-red-500 to-blue-600 p-4 h-90 box-border size-90 border-4 rounded-tr-3xl border-b-dashed m-10">
        <p className="text-gray-800 p-10">Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati vero, praesentium iure a tempore reiciendis. Cupiditate, cum voluptatibus beatae, amet ratione assumenda hic odit ut facilis sequi eius a doloribus.</p>
      </div>
      </div>
    </>
  )
}

export default App
