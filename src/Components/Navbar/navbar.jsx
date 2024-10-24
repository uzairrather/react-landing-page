import './navbar.css'

 const navbar = () => {
  return (
    <div className='nav'>
        <div className="nav-logo">Ethical Hacker</div>
        <p>created by uzair</p>
        <ul className="nav-menu">
            <li>Home</li>
            <li>About</li>
            <li>Support</li>
            <li className='nav-contact'>Contact Us</li>
        </ul>
    </div>
  )
}
export default navbar