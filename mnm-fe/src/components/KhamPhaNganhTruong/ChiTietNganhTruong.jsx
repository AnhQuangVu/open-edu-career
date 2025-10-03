import React from 'react';
function ChiTietNganhTruong({ item }) {
  if (!item) return null;
  return (
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">{item.ten}</h5>
        <p className="card-text">{item.moTa}</p>
        <p><b>Trường:</b> {item.truong}</p>
        <p><b>Ngành:</b> {item.nganh}</p>
      </div>
    </div>
  );
}
export default ChiTietNganhTruong;
