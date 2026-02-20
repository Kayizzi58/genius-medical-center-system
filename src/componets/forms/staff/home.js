import { useLocation } from "preact-iso"

function Home({req}){
    var {url} = useLocation();
    return (
        <div id="bg">
        <div className="container p-2 bg-light" id="bordered">
            <div>
                <h1 className="header ui blue larger">Genius Medical Center</h1>
            <p className="ui label large">Lorem ipsum doll lorem ipsum doll lorem</p>
            <br></br>
            <br></br>
            <hr></hr>
            <h3 className="header ui blue tag label">Log into your account</h3>
            
            <p>Lorem ipsum doll</p>
            <div className="card p-2 bg-light ui fluid raised">
           
                <form className="ui form" onSubmit={req}>
                    
                    <hr></hr>
                    <input type="text" placeholder="Personal Number"/>
                    <br></br>
                    <br></br>
                    
                    <input type="password" placeholder="Password"/>
                    <br></br>
                    <br></br>
                    <a href="/admin" className={url == "/admin" && 'active'}><button className="ui blue button">Log In</button></a>
                </form>
            </div>
            
            </div>
            <div id="rt" className="p-2">
                <div className="header ui label fluid large green">OUR SERVICES</div>
                <ul className="list-group card p-2">
                     <i className="list-group-item">Pharmacy</i>
                     <i className="list-group-item">Pharmacy</i>
                     <i className="list-group-item">Pharmacy</i>
                     <i className="list-group-item">Pharmacy</i>
                     <i className="list-group-item">Pharmacy</i>
                     <i className="list-group-item">Pharmacy</i>
                     <i className="list-group-item">Pharmacy</i>
                     <i className="list-group-item">Pharmacy</i>
                     <i className="list-group-item">Pharmacy</i>
                </ul>
                
            </div>
            
        </div>
        <br></br>
        <p className="ui label blue large p-3">P.O.Box 333 Kampala-Uganda, Kyambogo. || Tell: 256000000000 || genius@email.com || www.geniusmedicalcenter.com</p>
        </div>
    )
}

export default Home