// jadi disini kita tidak menggunakan footer.mdoule.css dikarenakan kita disni sudah menggunakan Refactor styled components
// jadi bisa di gunakan hanya di file Footer.jsx hanya memanggil class nya saja
import styled from "styled-components";


const Container = styled.div`
  background-color: #4361ee;
  color: #fff;
  padding: 1rem;
  text-align: center;
`;

const FooterWrapper = styled.footer``;

const Title = styled.h2`
  margin-bottom: 1rem;
`;

const Author = styled.p`
  margin-bottom: 1rem;
`;

function Footer() {
  return (
    <Container>
      <FooterWrapper>
        <Title>Movie App</Title>
        <Author>Created by smrna23</Author>
      </FooterWrapper>
    </Container>
  );
}

export default Footer;
