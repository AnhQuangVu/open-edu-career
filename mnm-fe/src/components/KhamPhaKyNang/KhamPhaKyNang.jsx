import React, { useState } from 'react';
import DanhSachKyNang from './DanhSachKyNang';
import ChiTietKyNang from './ChiTietKyNang';
import duLieu from './duLieu';

function KhamPhaKyNang() {
  const [chon, setChon] = useState(null);
  return (
    <div className="card shadow mb-4">
      <div className="card-header bg-success text-white">
        <h2 className="mb-0"><i className="bi bi-lightbulb"></i> Khám phá kỹ năng</h2>
      </div>
      <div className="card-body">
        <div className="row">
          <div className="col-md-5">
            <DanhSachKyNang data={duLieu} onSelect={setChon} />
          </div>
          <div className="col-md-7">
            {chon && <ChiTietKyNang item={chon} />}
          </div>
        </div>
      </div>
    </div>
  );
}
export default KhamPhaKyNang;
