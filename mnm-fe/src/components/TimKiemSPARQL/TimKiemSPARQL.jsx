import React, { useState } from 'react';

function TimKiemSPARQL() {
  const [query, setQuery] = useState('');
  const [result, setResult] = useState('');

  const handleSearch = async () => {
    // Mock fetch, chỉ cần thay bằng API thật là chạy
    setResult('Kết quả truy vấn SPARQL sẽ hiển thị ở đây.');
  };

  return (
    <div className="card shadow mb-4">
      <div className="card-header bg-primary text-white">
        <h2 className="mb-0"><i className="bi bi-search"></i> Tìm kiếm & Truy vấn SPARQL</h2>
      </div>
      <div className="card-body">
        <div className="mb-3">
          <textarea
            className="form-control"
            rows={4}
            value={query}
            onChange={e => setQuery(e.target.value)}
            placeholder="Nhập SPARQL query..."
          />
        </div>
        <button className="btn btn-primary" onClick={handleSearch}><i className="bi bi-play-circle"></i> Thực hiện truy vấn</button>
        <div className="mt-3">
          <pre>{result}</pre>
        </div>
      </div>
    </div>
  );
}
export default TimKiemSPARQL;
