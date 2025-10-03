import React, { useState } from 'react';
import DanhSachNghe from './DanhSachNghe';
import ChiTietNghe from './ChiTietNghe';
import duLieu from './duLieu';

function KhamPhaNghe() {
  const [chon, setChon] = useState(null);
  return (
    <div className="card shadow mb-4">
      <div className="card-header bg-warning text-dark">
        <h2 className="mb-0"><i className="bi bi-briefcase"></i> Khám phá nghề nghiệp</h2>
      </div>
      <div className="card-body">
        <div className="row">
          <div className="col-md-5">
            <DanhSachNghe data={duLieu} onSelect={setChon} />
          </div>
          <div className="col-md-7">
            {chon && <ChiTietNghe item={chon} />}
          </div>
        </div>
      </div>
    </div>
  );
}
export default KhamPhaNghe;
