import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import CreateMovie from './pages/Create';
import NowPlaying from './pages/NowPlaying';
import Counter from './components/Counter';
import Heading from './components/UI/Typography/Heading'; // Komponen lokal
import Paragraph from './components/UI/Typography/Paragraph';
import { Box, Heading as ChakraHeading, Text, Button } from '@chakra-ui/react';

function App() {
  return (
    <Box padding="6">
      {/* Gunakan ChakraHeading jika ingin pakai komponen dari Chakra */}
      <ChakraHeading size="xl" mb={4}/>

      {/* Komponen lokal Heading */}
      <Heading level={1} />
      <Paragraph />

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/movie/create' element={<CreateMovie />} />
        <Route path='/movie/now' element={<NowPlaying />} />
        <Route path='/movie/popular' element={<NowPlaying />} />
        <Route path='/counter' element={<Counter />} />
      </Routes>
    </Box>
  );
}

export default App;
