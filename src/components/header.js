import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import logo from "../images/logo-designcode.svg"
import "./Header.css"
// const Header = ({ siteTitle }) => (

// )
class Header extends React.Component {
  constructor(props) {
    super(props)
    this.state = { hasScrolled: false }
  }
  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll)
  }
  handleScroll = e => {
    const scrollTop = window.pageYOffset
    if (scrollTop > 50) {
      this.setState({
        hasScrolled: true,
      })
    } else {
      this.setState({ hasScrolled: false })
    }
  }
  render() {
    return (
      <div
        className={this.state.hasScrolled ? "Header HeaderScrolled" : "Header"}
      >
        <div className="HeaderGroup">
          <Link to="/">
            <img src={logo} alt="Logo" />
          </Link>
          <Link to="/courses">Courses</Link>
          <Link to="/downloads">Downloads</Link>
          <Link to="/workshops">Workshops</Link>
          <Link to="/buy">
            <button>Buy</button>
          </Link>
        </div>
      </div>
    )
  }
}
Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
