import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import logo from "../images/logo-designcode.svg"
import "./Header.css"
import StripeCheckout from "react-stripe-checkout"
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
  handlePurchase = token => {
    const amount = 5000
    const description = "My product"
    const bodyObject = {
      tokenId: token.id,
      email: token.email,
      name: token.name,
      description,
      amount,
    }
    fetch("http://localhost:9000/stripe-charge", {
      method: "POST",
      body: JSON.stringify(bodyObject),
    })
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
          <StripeCheckout
            amount={5000}
            image={logo}
            token={this.handlePurchase}
            stripeKey={
              "pk_test_51H1EiXEv3D34zHMV5vp84nujfmyzO6LnSt4egJr87xEU2jPKltNzABxdTdqkoIIXKdpwaiAcZmv7WphsPeLXNdlX00ecIHDR2g"
            }
          >
            <button>Buy</button>
          </StripeCheckout>
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
