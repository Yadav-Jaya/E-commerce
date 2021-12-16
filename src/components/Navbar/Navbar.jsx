import styled from 'styled-components';



const Navbar = () => {
    return (
        <Header>
            <div className="logo">E-Commerce Store</div>
            <input type="text" />
            <img src="" alt="" />
        </Header>
    )
}

export default Navbar


// ---------------*  STYLES

const Header = styled.header`
    z-index: 99;
    position: sticky;
    top: 0;
    height: 60px;
    display:flex;
    align-items: center;
    justify-content: space-around;
    box-shadow: 0px 0px 20px 4px rgba(231, 198, 135, 0.198);
    .logo{
        color: black;
        font-size: 1.6rem;
        font-weight: 700;
    }
    
`