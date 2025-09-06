import { Route, Routes } from 'react-router'
import NavigationBar from './components/navigationBar'
import Portfolio from './pages/portfolio'
import Footer from './components/footer'
import Photoshop from './pages/Photoshop'
import NotFound from './pages/PageNotFound'

const App=()=>{

    return(
    <><header>
    <NavigationBar />
    </header>
    <main>
    <Routes>
        <Route path='/' element={<Portfolio />}/>
        <Route path='/Photoshop' element={<Photoshop />} />
        <Route path='*' element={<NotFound/>}/>
    </Routes>
    </main>
    <Footer />
    </>)
}

export default App