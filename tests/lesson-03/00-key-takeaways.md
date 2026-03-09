#1.	Một số lệnh git cơ bản
	##1.1 Thay đổi git commit message mới nhất 
        git commint --amend -m"msg mới"

        VD: git commit --amend -m”feat: add feature”
	##1.2 Thay đổi git commit message cách đó vài commit
        Sẽ học ở bài 9
	##1.3 File ở vùng staging, đưa file về lại vùng Working Directory
        Unstage 1 file: 
            git restored --staged <tên file>
        Unstaged toàn bộ các file:
            git  restored --staged . (dấu chấm ở cuối)
	##1.4 Đưa file từ repo (đã commit) về các vùng trước đó
    ###1.4.1 Đưa nội dung commit cuối về staging 
        git reset --soft HEAD~1
    ###1.4.2 Đưa nội dung commit cuối về Working Directory 
        git reset HEAD~1
            Note:
            - Commit đầu tiên không thể bị reset
            - Muốn reset được phải xóa thư mục .git ở folder trên máy local rồi git init lại "
#2.	Git Branching
##2.1	Xem danh sách các nhánh
    git branch
##2.2	Tạo nhánh
##2.2.1 Tạo nhánh nhưng không chuyển sang nhánh đó
    git branch <tên nhánh>"
##2.2.2 Chuyển sang nhánh vừa tạo
    git checkout <tên nhánh cần chuyển>"
##2.2.3 Vừa tạo vừa chuyển sang nhánh vừa tạo
    git checkout -b <tên nhánh>
##2.2.4 Xóa nhánh
    git branch -D <tên nhánh>
    Lưu ý: Bắt buộc phải đứng ở 1 nhánh khác với nhánh đang cần xóa thì mới thực hiện xóa nhánh được
##2.3 Đưa nhánh lên online (remote)
    git push origin (tên nhánh>

##2.4 Xóa nhánh trên online (remote)
    git push -D origin (tên nhánh)"

#3.	Git Ignore
	
#4.	JavaScript (Câu điều kiện)
##4.1	Câu điều kiện
	Cú pháp:

if (<điều kiện>) {
      // code...
}


Ví dụ: 

let hour = 8;
If (hour >=6 && hour <=11) {
    console.log(""Good morning"")
}"
	
##4.2	Vòng lặp for (i)
	"Cú pháp vòng lặp for (i)

for (<điều kiện khởi tạo>; <điều kiện lặp>; <cập nhật>) {
       // code....
}

Trong đó:

    - Điều kiện khởi tạo: chạy 1 lần duy nhất, khi vòng lặp bắt đầu
    - Điều kiện lặp: nếu đúng thì chạy tiếp, sai thì dừng 
    - Cập nhật: chạy vào mỗi cuối vòng lặp, để thay đổi giá trị của biến đếm"