
import Header from './Header'
const Layout = ({children}) => {
    return (
        <div >
        <div className="header-page">
         <Header />   
        </div> 
        {children}
        </div>
    )
}

export default Layout
