import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import AddMovieForm from "../components/AddMovie/AddMovie";
import Heading from "../components/UI/Typography/Heading";
import Paragraph from "../components/UI/Typography/Paragraph";
import Hero from "../components/Hero/Hero";

function CreateMovie() {
  return (
    <>
      <Navbar />
      <Hero />
      <main style={{ padding: "2rem" }}>
        <Heading level={2}>Create Movie</Heading>
        <Paragraph>Gunakan formulir di bawah ini untuk menambahkan film baru ke daftar.</Paragraph>
        <AddMovieForm />
      </main>
      <Footer />
    </>
  );
}

export default CreateMovie;
