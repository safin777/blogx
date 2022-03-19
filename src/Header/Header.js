import './Header.css'

const Header = () => {
  return (
    <div className="header">
      <div className="headerTitles">
        <span className="headerTitleSmall">React and Node</span>
        <span className="headerTitleLarge">Blog</span>
      </div>

      <img className="headerImage" src="/images/header/nature-4.png" alt="" />
    </div>
  )
}

export default Header
