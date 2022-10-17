import {BrowserRouter, Routes, Route} from 'react-router-dom'

import Indonesia from './pages/indonesia/indonesia'
import Programming from './pages/programming/programming'
import Covid19 from './pages/covid19/covid19'
import Sports from './pages/sports/sports'
import Technology from './pages/technology/technology'
import Entertainment from './pages/entertainment/entertainment'
import Search from './pages/search/search'

import Saved from './pages/Saved';


export default () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Indonesia />} />  {/* Untuk Sementara */}
        <Route path="/programming" element={<Programming />} />
        <Route path="/covid19" element={<Covid19 />} />
        <Route path="/sports" element={<Sports />} />
        <Route path="/technology" element={<Technology />} />
        <Route path="/entertainment" element={<Entertainment />} />
        <Route path="/saved" element={<Saved />} />
        <Route path="/search" element={<Search />} />
      </Routes>
    </BrowserRouter>
  )
}