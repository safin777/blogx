import './Header.css'

const Header = () => {
  return (
    <div className="header">
      <div className="headerTitles">
        <span className="headerTitleSmall">React and Node</span>
        <span className="headerTitleLarge">Blog</span>
      </div>
      <img className="headerImage" src= {require('../images/header/wallhaven-3zgdd3.jpg')} alt="" />
    </div>
  )
}

export default Header
