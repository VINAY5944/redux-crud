import { BrowserRouter, Route, Routes } from 'react-router-dom';
import logo from './logo.svg';
import View from './components/View';
import Create from './components/Create';
import Edit from './components/Edit';
import { Provider } from 'react-redux';
import store from './reduxcomponents/store';


function App() {
  return (
   <div>
<BrowserRouter>

<Routes>
<Route element={<View/>} path='/' />
<Route element={<Create/>} path='/create'/>
<Route element={<Edit/>}   path='/edit/:id'/>
</Routes>

</BrowserRouter>

   </div>
  );
}

export default App;
