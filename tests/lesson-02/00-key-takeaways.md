#1	Git và Github
##1.1. 3 vùng làm việc với git
"Working Directory: vùng chứa các file mới hoặc các file mới thay đổi
Staging Area: các file đưa vào vùng chuẩn bị commit (tạo ra các phiên bản)
Repository: vùng chứa các commit (phiên bản)"
##1.2. Các câu lệnh cơ bản với git
    git add <tên file> : đưa file từ Working Directory ->> Staging
    git add . ->> đưa các file còn lại từ Working Directory ->> Staging
    git commit -m"note" : đưa các file có trong vùng Staging ->> Repository

Tổng kết:
git init: Làm 1 lần duy nhất lúc khởi tạo folder dự án
git remote add origin <url>: Tạo repo github và liên kết với repo local 
git add . : thêm file vào staging (Làm mỗi khi có thay đổi)
git commit -m"msg": commit file (Làm mỗi khi có thay đổi)
git push origin main: push code

##1.3. 1 số câu lệnh khác:
git status: xem trạng thái của file
    Màu xanh: file đang ở vùng Staging
    Màu đỏ: file đang ở vùng Working Dirctory"
git log: kiểm tra danh sách commit
	
##1.4. Quy tắc đặt msg khi commit code
Cú pháp: <type>:  <short_description>
    Trong đó: 
            <type> là loại commit
            - chore: sửa nhỏ lẻ, chỉnh sửa file, xóa file không dùng tới
            - feat: thêm tính năng mới, testcase mới
            - fix: sửa tính năng, tcs"
	
#2	Lệnh cài đặt user.name và user.email
##2.1. Cài đặt cho tất cả các repo trên máy tính

git config --global user.name ""Phuong Nguyen""
git config --global user.email ""nguyenphuongtb3696@gmail.com""

##2.2. Trường hợp mỗi repo cần cài đặt 1 tên khác nhau (cần  thao tác tại terminal của repo đó)

git config user.name ""Phuong Nguyen""
git config user.email ""nguyenphuongtb3696@gmail.com"