import '../../styles.css'



export const Navbar = () => {
    return (
        <div className="navbar mb-4 px-4 color-navbar">
            <span className='navbar-brand'>
                <i className='fas fa-calendar-alt'></i>
                &nbsp; {/* esto es para la separación */}
                Chema Ferrandez
            </span>

            <button className='btn btn-color-sign-out'>
                <i className='fas fa-sign-out-alt'></i>
                &nbsp;
                <span>Sign Out</span>
            </button>
        </div>
    )
}
