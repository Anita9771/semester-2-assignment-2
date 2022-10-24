import {BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import { Accessibility, APILoadingStates, ErrorBoundaryDesc, ErrorPage, NestedRoutes, Pagination, ReactRouter } from './components/Blogs';
import DisabledState from './components/Blogs/DisabledState';
import { MainHeader } from './components/Header';
import Page404 from './components/Page404';
import { Home, Blogs, Users } from "./Pages";

function App() {
  return (
    <div className="App">
      <Router>
        <MainHeader />

        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='users' element={<Users />} />
          <Route path='blogs' element={<Blogs />}>
          <Route path='accessibility' element={<Accessibility />} />
          <Route path='apiloadingstates' element={<APILoadingStates />} />
          <Route path='disabledstate' element={<DisabledState />} />
          <Route path='errorboundary' element={<ErrorBoundaryDesc />} />
          <Route path='errorpage' element={<ErrorPage />} />
          <Route path='nestedroutes' element={<NestedRoutes />} />
          <Route path='pagination' element={<Pagination />} />
          <Route path='reactrouter' element={<ReactRouter />} />
          </Route>
          <Route path='*' element={<Page404 />} /> 
        </Routes>
      </Router>
    </div>
  );
}

export default App;
