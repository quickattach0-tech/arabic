function core(){
return(
    <MemoryRouter>
    <Routes>
      
 
      <Route path="arabic/state" element={<Element />} />
      <Route path="arabic/pool" element={<App />} />
      <Route path="*" element={<div>not found</div>}/>
      <Route path="arabic/" element={<> <div>💱 Menu </div>  <div><Link to="state">🍭 -- State </Link> </div> <div><Link to="pool">🎲 --- Pool </Link> </div> <div><Link to="core">🌋 - Core </Link></div> </>}/>
    </Routes>
    <> <div>💱 Menu </div>  <div><Link to="state">🍭 -- State </Link> </div> <div><Link to="pool">🎲 --- Pool </Link> </div> <div><Link to="core">🌋 - Core </Link></div> </>
  </MemoryRouter>
);
}