import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Layout/Navbar';
import Footer from './components/Layout/Footer';
import NganhTruong from './pages/NganhTruong';
import KyNang from './pages/KyNang';
import NgheNghiep from './pages/NgheNghiep';
import TimKiemSPARQLPage from './pages/TimKiemSPARQL';
import ThongKePage from './pages/ThongKePage';

function Router() {
  return (
    <BrowserRouter>
      <Navbar />

        <Routes>
          <Route path="/" element={<NganhTruong />} />
          <Route path="/kynang" element={<KyNang />} />
          <Route path="/nghe" element={<NgheNghiep />} />
          <Route path="/sparql" element={<TimKiemSPARQLPage />} />
          <Route path="/thongke" element={<ThongKePage />} />
        </Routes>

      <Footer />
    </BrowserRouter>
  );
}
export default Router;
