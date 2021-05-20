
// stateless Functional components
const Navbar = ({totalCounters}) => {
    return ( 
        <nav className="navbar navbar-light bg-light">
        <div className="container-fluid">
            <a className="navbar-brand" >
                Navbar{" "}
                <span className="badge badge-pill badge-secondary m-2">
                    {totalCounters}
                </span>
            </a>
        </div>
    </nav>
     );
}
 
export default Navbar;

