import { useEffect } from 'react';
import { Route, Routes } from 'react-router';
import NotFoundPage from './pages/NotFoundPage';
import AllVacancyPage from './pages/AllVacancyPage';
import VacancyPage from './pages/VacancyPage';
import Header from './components/Header';
import { useVacancyStore } from './store/vacancy';

export default function App() {
  const getAllVacancy = useVacancyStore(state => state.getAllVacancy);
  useEffect(() => {
    getAllVacancy();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  
  return (
    <div className={`d-flex flex-column w-100 vh-100 overflow-auto`}>
      <Header />
      <Routes>
        <Route path='/' element={<AllVacancyPage />} />
        <Route path='/vacancy' element={<VacancyPage />} />
        <Route path='*' element={<NotFoundPage />} />
      </Routes>
    </div>
  )
}