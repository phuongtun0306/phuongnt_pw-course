# I. DOM
## 1. DOM là gì? (Document Object Model)
Bên trong DOM là các phần tử, được gọi là Element
Thẻ mở, thẻ đóng và thẻ tự đóng
### 1.1 Thẻ mở, thẻ đóng

    VD: 

    <option value = "usa" > United State</option>

    Trong đó: 
    option value = "usa" là thẻ mở (ở đầu) và /option là thẻ đóng (ở cuối)

    Thử tự đóng (<img/>

    VD:

    <img scr = "image.img" alt = "Image description" />

    Đây là thẻ tự đóng

    Text nằm ở giữa thẻ mở và thẻ đóng

    <option value = "usa" > United State</option>

### 1.2 Thuộc tính
    VD:
    <div class="Phuong" id="k22-demo" is-heading> </div>

    Trong đó: 

    - Có 3 thuộc tính ở thẻ mở
    - Có thể có thuộc tính chỉ có tên, không có giá trị (is-heading)

Thẻ có thể nằm trong thẻ khác, mỗi thẻ được thể hiển ở 1 dòng và thẻ con thì nằm thụt lùi vào bên phải so với thẻ cha 

## 2. Các thẻ HTML thường gặp 
Trên thực tế, có rất nhiều loại thẻ khác nhau:
- Thẻ tiêu chuẩn : thẻ do tổ chức uy tín mozilla định nghĩa 
- Thẻ tự định nghĩa: do lập trình viên/ website tự định nghĩa

Các thẻ tiêu chuẩn thường gặp: 

    1. Cấu trúc khung trang

    <html> : thẻ gốc của trang
    <head> chứa metadata: tiêu đề website, hiển thị Google
    <body> nội dung của cả website hiển thị

    2. Thẻ bố cục và ngữ nghĩa

    <div> : khối/container chung 
    <header>, <footer>,<nav>,<section>: thẻ ngữ nghĩa

    3. Các thẻ nội dung
    <h1> đến <h6>: Tiêu đề 
    <p> - paragraph> đoạn văn
    <ul>, <ol>, <li>: danh sách (ul: danh sách không có thứ tự, ol: danh sách có thứ tự, li: list item)

    VD:

    <ol>
    <li> Cơm rang </li>
    <li> Cá chiên </li>
    <li> Canh cua </li>
    </ol>

    4. Thẻ tương tác và Media 
    <a> : liên kết
    <img> : hình ảnh 

    5. Thẻ Form (Quan trọng cho Testing)

    <form> biểu mẫu
    <input> ô nhập liệu (textbox, password, checkbox, radio button,...)
    <button> nút
    <select> và <option> dropdown
    <textarea> vùng văn bản nhiều dòng

    HTML và các thẻ thường dùng: https://material.playwrightvn.com/035-DOM-elements.html

# II. SELECTOR
## II.1 Khái niệm
Automation = tương tác với các phần tử trên trang web
- Input
- Click
...
- Để tương tác được, ta cần tìm các phần tử này bằng Selector (công cụ tìm phần tử)

## II.2 Các loại Selector thường dùng

    - Xpath: dùng hầu hết các trường hợp
    - CSS Selector: dùng cho các trường hợp dễ tìm, không linh hoạt bằng Xpath
    - Playwright selector : chỉ dùng riêng cho Playwright, cú pháp ngắn gọn, không phụ thuộc vào cấu trúc DOM , hướng tới giống người dùng đang nhìn thấy gì

    Khi nào thì dùng gì?

    Playwright Selector > CSS Selector > Xpath

## II.3 Xpath Selector
    Có 2 loại Xpath:
    - Tuyệt đối: đi dọc theo cây DOM, bắt đầu bởi 1 dấu gạch chéo /
    - Tương đối (nên dùng) : tìm dựa vào đặc tính , bắt đầu bởi 2 dấu gạch chéo//

    1. Xpath tuyệt đối
    - Bắt đầu từ gốc, dùng 1 dấu gạch chéo /
    VD: /html/body/div/input

    Đặc điểm: 
    - Bắt đầu bằng /
    - Phải viết đầy đủ đường dẫn từ gốc
    - Dễ bị lỗi khi cấu trúc HTML thay đổi, ít linh hoạt 

    2. Xpath tương đối 
    - bắt đầu từ bất kỳ đâu trong DOM, dùng 2 dấu gạch chéo //
    //input[@id='user'] 

    Đặc điểm:
    - Bắt đầu bằng dấu //
    - Tìm element ở bất kỳ vị trí nào 
    - Linh hoạt, ít bị ảnh hưởng khi HTML thay đổi
    - Nên dùng trong thực tế

    Mẹo: hầu hết các trường hợp thường dùng Xpath tương đối, luôn luôn kết hợp với attributes để Xpath chính xác hơn

# III. Playwright Basic Syntax
Automation = tương tác + verify
-*/ Trong bài này, ta học cách tương tác với các phần tử 

- Viết 1 test
- Tổ chức thành các step
- Tương tác cơ bản
   + Navigation
   + Click
   + Fill

## III.1 Test và Step
### III.1.1 Khái niệm
    Test và Step

    */ Test: đơn vị cơ bản để khai báo 1 test (1 testcase)

    */ Step: đơn vị nhỏ hơn test, để khai báo từng step của testcase
    Lưu ý: Step nên được map 1-1 với testcase để dễ dàng maintain

### III.1.2 Cú pháp
*/ Test
                                                                                                                                                                                
    import {test} from '@playwright/test';
    test ('<Ten test>' , async ({page} => {
            // Doan code
    });

*/ Step

    await test.step('Ten step', async () => {
    // Doan code
    )};

*/ Navigate
       
    await 
    page.goto('<link>');

*/ Locate (sử dụng locator để chọn phần tử trên trang)

    page.locator("//input[@id='username']")

*/ Click

    1. Single click

    await page.locator("//button").click();

    2. Double click

    await page.locator("//button").dblclick();

    3. Click chuột phải

    page.locator("//button").click({
                    button:'right'
    });

    4. Click chuột kèm bấm phím khác

    page.locator("").click({
                    modifiers:['Shift'],
    });

*/ Input

    Bạn muốn paste 1 đoạn content vào ô input, hãy dùng đoạn lệnh sau:

    page.locator("//input).fill('Đoạn text cần paste');

    Bạn muốn màn hình hiển thị nhảy từng chữ được nhập vào ô input, hãy gõ lệnh sau:

    page.locator("//input).pressSequentially('Đoạn text cần nhập', {
                    delay: 100,
    });

*/ Radio/ checkbox

    Lấy giá trị hiện tại đang là check hay không

    const isChecked = 
    page.locator("//input").isChecked();

    Thực hiện chọn trạng thái là Check hoặc Uncheck cho checkbox 

    page.locator("//input").check();

    page.locator("//input").setChecked(false);

*/ Select

    await page.locator('<xpath của tối tượng cần chọn>').selectOption({label: <tên trường>'});

*/ Upload file

    await page.locator("<xpath của input upload>").setInputFiles("<file-path>");

*/ Hàm text()

    VD DOM: 

    <div @class=”playwright”>This is a text</div>

    //div[text()='This is a text'] -- chọn phần tử div mà có text là This is a text

*/ Hàm contains()

    //div[contains(text(),'<Đoạn text cần tìm>')]