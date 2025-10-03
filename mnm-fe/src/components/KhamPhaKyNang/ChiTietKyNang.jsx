import React from 'react';
function ChiTietKyNang({ item }) {
  if (!item) return null;
  return (
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">{item.ten}</h5>
        <p className="card-text">{item.moTa}</p>
        <p><b>Ngành liên quan:</b> {item.nganhLienQuan.join(', ')}</p>
        <p><b>Nghề liên quan:</b> {item.ngheLienQuan.join(', ')}</p>
      </div>
    </div>
  );
}
export default ChiTietKyNang;
