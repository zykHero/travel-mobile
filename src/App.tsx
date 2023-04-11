import './App.less';
import {Menus} from './component/menus';
import {Outlet} from 'react-router-dom';
function App() {
  return (
    <div className="app">
      <div className='content'>
         <Outlet />
      </div>
      <div className='menus-bottom'>
        <Menus/>
      </div>
    </div>
  );
}

export default App;
