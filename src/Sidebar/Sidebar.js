import './sidebar.css'

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebarItems">
        <span className="sidebarTitle">ABOUT ME</span>
        <img
          className="sidebarImage"
          src={require('../images/profile/about.jpg')}
          alt=""
        />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. In,
          architecto vitae alias voluptatum tempora ad corporis repellendus
        </p>
      </div>

      <div className="sidebarItems">
        <span className="sidebarTitle">CATEGORIES</span>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. In,
          architecto vitae alias voluptatum tempora ad corporis repellendus
        </p>
        <ul className="sidebarlist">
          <li className="sidebarListItem">LIFE</li>
          <li className="sidebarListItem">EDUCATION</li>
          <li className="sidebarListItem">TECH TALK</li>
          <li className="sidebarListItem">RESEARCH</li>
        </ul>
      </div>

      <div className="sidebarItems">
        <span className="sidebarTitle">FOLLOW ME</span>
        <div className="sidebarSocial">
          <i className="sidebarIcon fa-brands fa-facebook-square"></i>
          <i className="sidebarIcon fa-brands fa-linkedin"></i>
          <i className="sidebarIcon fa-brands fa-medium"></i>
          <i className="sidebarIcon fa-brands fa-github"></i>
          <i className="sidebarIcon fa-brands fa-instagram"></i>
        </div>
      </div>
    </div>
  )
}

export default Sidebar
