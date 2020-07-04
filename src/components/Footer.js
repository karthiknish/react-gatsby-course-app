import React from "react"
import styled from "styled-components"
const FooterGroup = styled.div`
  background-color: #f1f3f5;
  padding: 50px 20px;
  display: grid;
  grid-gap: 20px;
`
const Text = styled.p`
  font-size: 24px;
  font-weight: 600;
  color: #486791;
  text-align: center;
  line-height: 1.5;
  margin: 0 auto;
`
const Button = styled.button`
  background: linear-gradient(102deg, #9b51e0 0%, #3436e7 100%);
  box-shadow: 0px 10px 20px rgba(101, 41, 255, 0.15);
  border-radius: 30px;
  color: white;
  border: none;
  padding: 16px 60px;
  font-weight: 600;
  font-size: 24px;
  justify-self: center;
  cursor: pointer;
  transition: 0.8s cubic-bezier(0.075, 0.82, 0.165, 1);
  &:hover {
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
    transform: translateY(-3px);
  }
`
const LinkGroup = styled.div`
  margin: 50px auto;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-gap: 50px;
  text-align: center;
  @media (max-width: 640px) {
    grid-template-columns: repeat(5, 1fr);
    grid-gap: 10px;
    margin-bottom: 10px;
  }
  @media (max-width: 400px) {
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 20px;
    text-align: end;
    justify-items: center;
  }
  a {
    transition: 0.8s;
  }
  a:hover {
    color: black;
  }
`
const Copyright = styled.div`
  color: #486791;
  max-width: 500px;
  margin: 0 auto;
  padding: 0 20px;
  text-align: center;
`
const Footer = ({ data, children }) => (
  <FooterGroup>
    <Text>
      Tweet 'Prototype and build apps with React and Swift,
      <br />
      New courses coming soon...
    </Text>
    <Button>Tweet</Button>
    <LinkGroup>
      {data.allContentfulLink.edges.map(edge => (
        <a key={edge.node.title} href={edge.node.url}>
          {edge.node.title}
        </a>
      ))}
    </LinkGroup>
    <Copyright>{children}</Copyright>
  </FooterGroup>
)
export default Footer
