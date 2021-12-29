import React, { useState, createContext } from 'react'
import { Routes, Route } from 'react-router-dom'
import CompanyPage from './pages/CompanyPage';
import HomePage from './pages/HomePage';
import ListCompanyPage from './pages/ListCompanyPage';
import LoginPage from './pages/LoginPage';
import 'bootstrap/dist/css/bootstrap.css'
import './App.css'
import DetailPage from './pages/DetailPage';

const UserInformation = createContext({})

function App() {
  const [userFirstName, setUserFirstName] = useState("")
  const [companyList, setCompanyList] = useState(null)
  return (

    <>
      <UserInformation.Provider value={{ userFirstName, setUserFirstName, companyList, setCompanyList }}>
        <header className='App-header'>
          <Routes>
            <Route path="/" element={<LoginPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/home" element={<CompanyPage />} />
            <Route path="/mypage" element={<HomePage />} />
            <Route path="/list" element={<ListCompanyPage />} />
            <Route path="/:id" element={<DetailPage />} />
          </Routes>
        </header>
      </UserInformation.Provider>
    </>
  );
}

export { UserInformation }
export default App;