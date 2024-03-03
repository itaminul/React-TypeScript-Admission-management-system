import './App.css'
import Login from './components/layout/Login'
import { Routes, Route} from "react-router-dom";
import NoMatch from './components/layout/NoMatch';
import {useSelector} from 'react-redux';
import { RootState } from './redux/store';
import PrivateRoute from './route/PrivateRoute';
import StudentInformationIndex from './components/students/StudentInformationIndex';
import Layouts from './components/layout/Layouts';
import DepartmentSetupIndex from './components/setup/department/DepartmentSetupIndex';
import Breadcrumbs from './components/layout/Breadcrumbs';

function App() {
  const isAuthenticated = useSelector((state: RootState) => state.auth.isAuthenticate);
  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<NoMatch />} />
        {/* <Route path="/" element={<Layout />}> */}
        <Route path="/" element={<PrivateRoute />}>
          {/* <Breadcrumbs /> */}
        <Route path="*" element={<NoMatch />} />
          <Route path="/dashboard" element={<Layouts children={undefined} />} />
          <Route path='/student-info' element={<StudentInformationIndex />} />
          <Route path='/department-setup' element={<DepartmentSetupIndex />}/>
        </Route>
        {/* <Route path="*" element={<NoMatch />} /> */}
        {/* </Route> */}
      </Routes>
    </>
  );
}

export default App
