import styled from 'styled-components';

const Container = styled.div`
  width: 75%;
  height: 100%;
  background: #487BA7;
  float: right;
  margin-block: 0px;
`;

const ContainerTitle = styled.h1`
	padding-top: 100px;
	text-align: center;
`;

const ContainerText = styled.p`
	text-align: center;
	padding: 50px;
`;

function Main() {
	return (
		<Container>
			<ContainerTitle id="AboutMe">ABOUT ME</ContainerTitle>
			<ContainerText>
				"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
			</ContainerText>
			<ContainerTitle id="TechnicalExpertise">TECHNICAL EXPERTISE</ContainerTitle>
			<ContainerText>
				"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
			</ContainerText>
			<ContainerTitle id="ContactMe">CONTACT ME</ContainerTitle>
			<ContainerText>
				"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
			</ContainerText>
		</Container>
	);
}

export default Main;