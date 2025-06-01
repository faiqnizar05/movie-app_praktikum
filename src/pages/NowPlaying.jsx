import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import Heading from '../components/UI/Typography/Heading';
import Paragraph from '../components/UI/Typography/Paragraph';

function NowPlaying() {
  return (
    <>
      <Navbar /> 
       <Heading level={2}>Now Playing</Heading>
        <Paragraph>
        Daftar film yang sedang tayang di bioskop saat ini.
      </Paragraph>
       <Footer />
    </>
  );
}

export default NowPlaying;