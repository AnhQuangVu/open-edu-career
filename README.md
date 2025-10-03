# EduCareer Backend (FastAPI)

## Giới thiệu dự án

**EduCareer** là hệ thống hướng nghiệp sử dụng dữ liệu mở (RDF/JSON-LD) nhằm hỗ trợ tra cứu, phân tích mối liên hệ giữa trường học, ngành học, nghề nghiệp, kỹ năng và tuyển dụng. Backend được xây dựng bằng **FastAPI** để cung cấp các API RESTful phục vụ cho frontend (React, web/mobile) và hỗ trợ truy vấn dữ liệu linh hoạt qua SPARQL. Hệ thống dễ mở rộng, tích hợp nguồn dữ liệu thực tế và phù hợp cho demo, thi, phát triển sản phẩm thực.

---

## Các chức năng chính

1. **Tra cứu trường học, ngành học, địa điểm**  
   - Hiển thị danh sách trường học, ngành đào tạo, địa chỉ, vị trí.
2. **Khám phá nghề nghiệp, kỹ năng**  
   - Xem chi tiết nghề nghiệp, kỹ năng yêu cầu, ngành học liên quan.
3. **Quản lý và truy vấn tin tuyển dụng**  
   - Kết nối tin tuyển dụng với nghề, kỹ năng, địa điểm, nhà tuyển dụng.
4. **Thống kê, báo cáo xu hướng ngành/nghề/kỹ năng**  
   - Biểu đồ, bảng số liệu trực quan, hỗ trợ định hướng học tập/nghề nghiệp.
5. **Truy vấn dữ liệu mở bằng SPARQL**  
   - Cho phép tìm kiếm nâng cao, kiểm chứng tính chất dữ liệu RDF.

---

## Cấu trúc thư mục

```
backend/
├── app/
│   ├── main.py           # Khởi động FastAPI, cấu hình route
│   ├── models.py         # Định nghĩa schema dữ liệu (Pydantic)
│   ├── routes/           # Các endpoint RESTful chia theo chức năng
│   │   ├── schools.py
│   │   ├── skills.py
│   │   ├── occupations.py
│   │   ├── sparql.py
│   │   ├── statistics.py
│   ├── services/         # Logic xử lý, truy vấn Fuseki/SPARQL, tiện ích
│   │   ├── fuseki.py
│   │   ├── utils.py
│   ├── config.py         # Biến môi trường, thông số hệ thống
│   └── __init__.py
├── requirements.txt      # Danh sách package Python cần cài
└── README.md             # Tài liệu dự án (file này)
```

---

## Hướng dẫn cài đặt & chạy dự án

### 1. Cài đặt môi trường Python

- Yêu cầu Python 3.8+
- Cài các package cần thiết:
```bash
pip install -r requirements.txt
```

### 2. Khởi động FastAPI

```bash
uvicorn app.main:app --reload
```

- Truy cập docs API tự động tại: [http://localhost:8000/docs](http://localhost:8000/docs)

### 3. Tích hợp Fuseki/SPARQL (nếu dùng dữ liệu RDF)

- Cấu hình endpoint của Fuseki trong `app/config.py`
- Sử dụng thư viện [SPARQLWrapper](https://pypi.org/project/SPARQLWrapper/) hoặc [rdflib](https://pypi.org/project/rdflib/) để kết nối và truy vấn SPARQL

---

## **Hướng dẫn sử dụng API**

### 1. **Tra cứu trường học, ngành học, địa điểm**
- **Endpoint:** `GET /schools`
- **Mô tả:** Nhận danh sách trường học, mỗi trường gồm thông tin ngành học và địa điểm.
- **Ví dụ sử dụng:**  
  Truy cập trực tiếp:  
  ```
  http://localhost:8000/schools
  ```
  Hoặc dùng fetch/Axios từ frontend để lấy dữ liệu hiển thị.

### 2. **Khám phá nghề nghiệp, kỹ năng**
- **Endpoint:** `GET /occupations` và `GET /skills`
- **Mô tả:** Nhận danh sách nghề nghiệp, kỹ năng. Có thể mở rộng filter theo tên, id...
- **Ví dụ sử dụng:**  
  ```
  http://localhost:8000/occupations
  http://localhost:8000/skills
  ```

### 3. **Quản lý và truy vấn tin tuyển dụng**
- **Endpoint:** `GET /jobs`
- **Mô tả:** Nhận danh sách tin tuyển dụng, kèm thông tin nghề nghiệp, địa điểm, nhà tuyển dụng.
- **Ví dụ sử dụng:**  
  ```
  http://localhost:8000/jobs
  ```

### 4. **Thống kê, báo cáo xu hướng**
- **Endpoint:** `GET /statistics`
- **Mô tả:** Nhận dữ liệu tổng hợp để vẽ biểu đồ, bảng thống kê về ngành/nghề/kỹ năng/tuyển dụng.
- **Ví dụ sử dụng:**  
  ```
  http://localhost:8000/statistics
  ```

### 5. **Truy vấn dữ liệu RDF bằng SPARQL**
- **Endpoint:** `POST /sparql`
- **Mô tả:** Gửi truy vấn SPARQL dạng text, nhận kết quả JSON trả về.
- **Ví dụ sử dụng:**
  ```bash
  curl -X POST "http://localhost:8000/sparql" -H "Content-Type: application/json" -d "{\"query\": \"SELECT ?s ?p ?o WHERE {?s ?p ?o} LIMIT 10\"}"
  ```
  Hoặc sử dụng từ frontend để nhận dữ liệu động.

---

## Hướng dẫn phát triển & mở rộng

- **Thêm route mới:** Tạo file trong `app/routes/` và import vào `main.py`
- **Thêm tính năng nâng cao:** Bổ sung logic ở `app/services/`
- **Thay đổi dữ liệu:** Có thể dùng dữ liệu mock để test hoặc chuyển sang dữ liệu thật/RDF dễ dàng
- **Tích hợp với frontend:** Frontend gọi API RESTful để nhận dữ liệu và hiển thị

---

## Các lưu ý khi demo/thuyết trình

- **Dữ liệu mẫu (mock) được sử dụng minh họa các mối quan hệ ngành học–nghề nghiệp, kỹ năng, tuyển dụng.**
- **Hệ thống sẵn sàng mở rộng, tích hợp dữ liệu thật bất cứ lúc nào.**
- **Tính năng báo cáo/thống kê, truy vấn SPARQL đều hoạt động được với cả dữ liệu mẫu và dữ liệu thực.**
- **Đảm bảo các API có kiểm tra dữ liệu đầu vào, lọc null/trùng, trả về kết quả rõ ràng.**

---

## Đóng góp & liên hệ

- Để đóng góp hoặc báo lỗi, vui lòng gửi pull request hoặc issue trên repository.
- Liên hệ: 23a1001d0025@gmail.com
  

---

## License

MIT License
