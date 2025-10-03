import React from 'react';
import { Bar, Pie } from 'react-chartjs-2';
import { Chart, CategoryScale, LinearScale, BarElement, ArcElement, Tooltip, Legend } from 'chart.js';

Chart.register(CategoryScale, LinearScale, BarElement, ArcElement, Tooltip, Legend);

// Dữ liệu mẫu
const dataNgheTheoNganh = {
  labels: ['CNTT', 'QTKD', 'Marketing', 'Mỹ thuật'],
  datasets: [
    {
      label: 'Số lượng nghề nghiệp',
      data: [12, 8, 5, 3],
      backgroundColor: '#1976d2',
    },
  ],
};

const dataNgheTheoKyNang = {
  labels: ['Lập trình', 'Quản lý dự án', 'Giao tiếp', 'Thiết kế'],
  datasets: [
    {
      label: 'Số lượng nghề nghiệp',
      data: [10, 7, 6, 4],
      backgroundColor: ['#1976d2', '#00bcd4', '#ff9800', '#8bc34a'],
    },
  ],
};

const dataPie = {
  labels: ['Lập trình viên', 'Quản lý dự án', 'Designer', 'Nhân viên kinh doanh'],
  datasets: [
    {
      data: [6, 4, 3, 2],
      backgroundColor: ['#1976d2', '#00bcd4', '#ff9800', '#8bc34a'],
    },
  ],
};

function ThongKeNgheNghiep() {
  return (
    <div className="container my-5">
      <h2 className="mb-4">Báo cáo thống kê nghề nghiệp</h2>
      <div className="row g-4">
        <div className="col-md-6">
          <div className="card p-3">
            <h5 className="mb-3">Thống kê nghề theo ngành học</h5>
            <Bar data={dataNgheTheoNganh} options={{responsive:true}} />
          </div>
        </div>
        <div className="col-md-6">
          <div className="card p-3">
            <h5 className="mb-3">Thống kê nghề theo kỹ năng</h5>
            <Bar data={dataNgheTheoKyNang} options={{responsive:true}} />
          </div>
        </div>
        <div className="col-md-6">
          <div className="card p-3">
            <h5 className="mb-3">Tỉ lệ nghề nghiệp (Pie chart)</h5>
            <Pie data={dataPie} options={{responsive:true}} />
          </div>
        </div>
      </div>
    </div>
  );
}
export default ThongKeNgheNghiep;
