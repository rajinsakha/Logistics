
const Navbar = () => {
  return (
    <header className="padding-x py-4 w-full">
    <nav className="flex justify-between items-center">

      <div>
        <p className="text-sim-blue font-lato text-2xl font-light">Ship<span className="text-sim-orange font-lato text-2xl font-black">Up</span></p>
      </div>

      <ul className="flex justify-center items-center gap-16 max-lg:hidden">
      <li>Company</li>
      <li>Services</li>
      <li>Solutions</li>
      <li>Industries</li>
      <li>Insights</li>
      <li>News</li>
      </ul>

      <div className="flex gap-3">
        <button className="border border-sim-blue border-solid rounded-xl px-8 py-4 font-extrabold text-sm text-center capitalize cursor-pointer">Request Quote</button>
      </div>





    </nav>
    </header>
  )
}

export default Navbar
