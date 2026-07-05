import {BrowserRouter as Router , Routes , Route} from 'react-router-dom'
import UploadForm from './pages/createpost'
import Feed from './pages/Feed'

const App = () => {
  return (
    <div>

    <Router>
      <Routes>
        <Route path="/create-post" element={<UploadForm />} />
        <Route path="/feed" element={<Feed />} />
      
      </Routes>
    </Router>
   </div> 
  )
}

export default App