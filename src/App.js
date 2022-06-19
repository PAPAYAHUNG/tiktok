import { Routes, Route } from 'react-router-dom'
import MainZone from './Layout/Component/MainZone';
import DefautLayout from './Layout/DefaultLayout';
import Upload from './Layout/UploadLayout';
import Following from './Pages/Following';
import Home from './Pages/Home';
import { publicRoutes } from './Routes';


// function App() {
//   return (
//     <div className="App">
//       <Routes>
//         <Route path='/home' element={<DefautLayout/>}/>
//         {publicRoutes.map((item, index) => {
//           const Page = item.component
//           return <Route key={index} path={item.path} element={<Page />} />
//         })}
    
//       </Routes>
//     </div>
//   );
// }

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<DefautLayout/>}>
          <Route path='upload' element={<Upload/>}/>
          <Route index element={<MainZone/>}/>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
