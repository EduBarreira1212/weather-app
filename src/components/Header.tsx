import styled from "styled-components";

const P = styled.p`
    font-size: larger;
    margin: 3vh 0;
    font-weight: bold;
`;

const Header = () => {
    return(
        <div>
            <P>Weather App</P>
        </div>
    );
}

export default Header;