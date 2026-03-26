# Các Xpath Axes cơ bản
## 1. child (chọn tất cả node con trực tiếp)

    child::node

    VD: //div/child::p

    ->> Tất cả các thẻ p là con trực tiếp của thẻ <div>

## 2. descendant (Tất cả các node là con cháu)

    descendant::node

    VD: 
    //div/descendant::span

    ->> Tất cả các thẻ span là con cháu của thẻ div

## 3. parent (node cha trực tiếp)

    parent::node

    VD: //p/parent::div

    -> lấy thẻ div là cha của thẻ <p>

## 4. ancestor (lấy tất cả node tổ tiên, ông, cha)

        ancestor::node

        VD: 
        //span/ancestor::div

    -> Lấy tất cả thẻ div là cha, ông của thẻ span

## 5. following-sibling (Anh em cùng cấp đứng sau)

    following-sibling::node

    VD: 
    //h2/following-sibling::p

    ->> Lấy tất cả thẻ <p> là anh em đứng sau cùng cấp của <h2>

## 6. preceding-sibling (anh em cùng cấp đứng trước)

    preceding::node

    VD: 
    //h3/preceding-sibling::h2

    ->> Lấy tất cả các thẻ h2 là anh em cùng cấp đứng trước của thẻ <h3>

## 7. following (chọn tất cả node sau trong document)

    following::node

    VD: 
    //h1/following::p

    -> Lấy tất cả các thẻ <p> đứng sau h1

## 8. preceding (chọn tất cả node trước trong document)

    preceding::node

    VD: //footer/preceding::div

    -> Lấy tất cả các thẻ <div> xuất hiện trước footer

## 9. attribute (thuộc tính của node)

    attribute::name

    VD: //div/attribute::class hoặc //div/class

    ->> Thuộc tính class của div 

## 10. self (chọn chính node hiện tại)

    self::node

    VD:
    //p/self::p
    ->> Lấy chính node <p>

## 11. descendant-or-self (chọn node hiện tại + tất cả con cháu)
    descendant-or-self::node

    VD: //div/descendant-or-self::*

    -> Lấy thẻ div hiện tại và tất cả các thẻ con cháu của thẻ div

## 12. ancestor-or-self (chọn node hiện tại và tất cả tổ tiên)

    ancestor-or-self::node

    VD: 
    //span/ancestor-or-self::div

    -> Lấy node hiện tại và tất cả thẻ div là tổ tiên của thẻ span

## 13. namespace (hiếm dùng)