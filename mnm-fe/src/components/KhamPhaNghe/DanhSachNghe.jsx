import React, { useState } from 'react';

const PAGE_SIZE = 5;

function DanhSachNghe({ data, onSelect }) {
  const [page, setPage] = useState(1);
  const totalPages = Math.ceil(data.length / PAGE_SIZE);
  const startIdx = (page - 1) * PAGE_SIZE;
  const currentData = data.slice(startIdx, startIdx + PAGE_SIZE);

  return (
    <>
      <ul className="list-group mb-3">
        {currentData.map((item) => (
          <li key={item.id} className="list-group-item list-group-item-action" onClick={() => onSelect(item)}>
            {item.ten}
          </li>
        ))}
      </ul>
      <nav>
        <ul className="pagination justify-content-center">
          <li className={`page-item${page === 1 ? ' disabled' : ''}`}>
            <button className="page-link" onClick={() => setPage(page - 1)} disabled={page === 1}>&laquo;</button>
          </li>
          {[...Array(totalPages)].map((_, idx) => (
            <li key={idx} className={`page-item${page === idx + 1 ? ' active' : ''}`}>
              <button className="page-link" onClick={() => setPage(idx + 1)}>{idx + 1}</button>
            </li>
          ))}
          <li className={`page-item${page === totalPages ? ' disabled' : ''}`}>
            <button className="page-link" onClick={() => setPage(page + 1)} disabled={page === totalPages}>&raquo;</button>
          </li>
        </ul>
      </nav>
    </>
  );
}
export default DanhSachNghe;
