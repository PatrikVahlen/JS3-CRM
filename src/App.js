import React, { useState, createContext } from 'react'
import { Routes, Route } from 'react-router-dom'
import CompanyPage from './pages/CompanyPage';
import HomePage from './pages/HomePage';
import ListCompanyPage from './pages/ListCompanyPage';
import LoginPage from './pages/LoginPage';
import 'bootstrap/dist/css/bootstrap.css'
import './App.css'
import DetailPage from './pages/DetailPage';
import LatestAddedPage from './pages/LatestAddedPage';
import CreateUserPage from './pages/CreateUserPage';
import LoginUserPage from './pages/LoginUserPage';

const UserInformation = createContext({})

function App() {
  const [userFirstName, setUserFirstName] = useState("")
  const [companyList, setCompanyList] = useState(null)
  return (

    <>
      <UserInformation.Provider value={{ userFirstName, setUserFirstName, companyList, setCompanyList }}>
        <header className='App-header'>
          <Routes>
            <Route path="/" element={<CreateUserPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/home" element={<CompanyPage />} />
            <Route path="/mypage" element={<HomePage />} />
            <Route path="/list" element={<ListCompanyPage />} />
            <Route path="/:id" element={<DetailPage />} />
            <Route path="/latest" element={<LatestAddedPage />} />
            <Route path="/userlogin" element={<LoginUserPage />} />
          </Routes>
        </header>
      </UserInformation.Provider>
    </>
  );
}

export { UserInformation }
export default App;