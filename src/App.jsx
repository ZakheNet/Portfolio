import { Route, Routes } from 'react-router'
import NavigationBar from './components/navigationBar'
import Portfolio from './pages/portfolio'
import Footer from './components/footer'
import NotFound from './pages/PageNotFound'

const App=()=>{

    return(
    <><header>
    <NavigationBar />
    </header>
    <main>
    <Routes>
        <Route path='/Portfolio/' element={<Portfolio />}/>
        <Route path='/' element={<Portfolio />}/>
        <Route path='*' element={<NotFound/>}/>
    </Routes>
    </main>
    <Footer />
    </>)
}

export default App