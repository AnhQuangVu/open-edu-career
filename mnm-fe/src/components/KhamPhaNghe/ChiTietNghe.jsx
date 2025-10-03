import React from 'react';
function ChiTietNghe({ item }) {
  if (!item) return null;
  return (
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">{item.ten}</h5>
        <p className="card-text">{item.moTa}</p>
        <p><b>Kỹ năng:</b> {item.kyNang.join(', ')}</p>
        <p><b>Ngành học:</b> {item.nganhHoc.join(', ')}</p>
        <p><b>Job posting:</b> {item.jobPosting}</p>
      </div>
    </div>
  );
}
export default ChiTietNghe;
