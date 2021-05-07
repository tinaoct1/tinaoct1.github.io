import styled from 'styled-components';

const StyledSidebar = styled.div`
	position: fixed;
  width: 25%;
  height: 100vh;
  background: #BC85A3;
  font-size: 0.65em;
`

const Photo = styled.img`
	border-radius: 80px;
	padding: 18%;
	position: relative;
	margin-top: 0px;
`

const Link = styled.a`
	font-size: 15px;
	text-decoration: none;
	padding: 20px;
	margin: 20px;
  content: '';
  width: 80%;
  height: 0.2em;
  color: linear-gradient(to right, #5e42a6, #b74e91);
  transition: all ease-out 800ms;
  &:hover {
    color: white;
  }

`

const SideBarLinks = styled.div`
	text-align: center;
`

const LinkSeparator = styled.hr`
	width: 80%;
  border-top: 3px solid linear-gradient(to right, #5e42a6, #b74e91);
  background-image: linear-gradient(to right, #5e42a6, #b74e91);
  border-radius: 5px;
`

function scrollTo(scrollLocation) {
	console.log(document.getElementById(scrollLocation))
	// document.getElementById(scrollLocation).scrollIntoView();
}

function SidebarWrapper() {
	return (
		<StyledSidebar>
			<Photo src='./images/profile-pic.jpeg' />
			<SideBarLinks>
				<div>
					<Link href="/about-me" onClick={scrollTo("AboutMe")}>ABOUT ME</Link>
					<LinkSeparator />
				</div>
				<div>
					<Link href="/technical-expertise" onClick={scrollTo("TechnicalExpertise")}>TECHNICAL EXPERTISE</Link>
					<LinkSeparator />
				</div>
				<div>
					<Link href="/contact-me" onClick={scrollTo("ContactMe")}>GET IN TOUCH</Link>
					<LinkSeparator />
				</div>
			</SideBarLinks>
		
		</StyledSidebar>
		
	)
}

export default SidebarWrapper;