import React, { useState } from 'react';
import DanhSachNganhTruong from './DanhSachNganhTruong';
import ChiTietNganhTruong from './ChiTietNganhTruong';
import duLieu from './duLieu';

function KhamPhaNganhTruong() {
  const [chon, setChon] = useState(null);
  return (
    <div className="card shadow mb-4">
      <div className="card-header bg-info text-white">
        <h2 className="mb-0"><i className="bi bi-building"></i> Khám phá ngành học / trường học</h2>
      </div>
      <div className="card-body">
        <div className="row">
          <div className="col-md-5">
            <DanhSachNganhTruong data={duLieu} onSelect={setChon} />
          </div>
          <div className="col-md-7">
            {chon && <ChiTietNganhTruong item={chon} />}
          </div>
        </div>
      </div>
    </div>
  );
}
export default KhamPhaNganhTruong;
