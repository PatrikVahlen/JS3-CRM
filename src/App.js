import React, { createContext } from 'react'
import { Routes, Route } from 'react-router-dom'
import CompanyPage from './pages/CompanyPage';
import HomePage from './pages/HomePage';
import ListCompanyPage from './pages/ListCompanyPage';
import LoginPage from './pages/LoginPage';
import 'bootstrap/dist/css/bootstrap.css'
import './App.css'
import DetailPage from './pages/DetailPage';

const SelectionContext = createContext({})

function App() {
  return (

    <>
      <SelectionContext.Provider>
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
      </SelectionContext.Provider>
    </>
  );
}


export { SelectionContext }
export default App;