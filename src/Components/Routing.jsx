import { Route, Routes} from 'react-router-dom'
import Home from './Home'
import Details from './Details'
import Create from './Create'


const Routing = () => {
  
  return (
    <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/create' element={<Create />} />
        <Route path='/details/:id' element={<Details />}/>
    </Routes>
  )
}

export default Routing