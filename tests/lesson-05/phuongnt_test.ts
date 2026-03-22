// function task(a,b) {
//     console.log(a,b);
//     const Tong = a + b;
//     console.log(Tong);
//     // Tinh trung binh cong cua 2 so
//     const TBC = Tong / 2;
//     console.log('Tong cua 2 so ' + a + ' va ' + b+ ' la: ' + Tong);
//     console.log('TBC cua 2 so ' + a + ' va ' + b+ ' la: ' + TBC);


// };

// task(10,20);

//In ra 100 dòng là To do 1 đến To do 100
// const task1 = {
//     lan1 : 1,
//     ten1: 'To do 1',
// };

// const task2 = {
//     lan2 : 2,
//     ten2: 'To do 2',
// };

// function InTask(lan) {
//     const ten = 'To do ' + lan;
//     console.log(ten);
// };

// InTask(1);
// InTask(2);
// InTask(3);
// InTask(4);
// InTask(5);
// InTask(6);
// InTask(7);

// for (let i = 0; i < 100; i++) {
//     i +=1
//     console.log('To do ' + i);
// };



//Lần 1: i = 0

for (let i = 0; i < 100; i ++) {
    i +=1
    const btnXpath = '//button[@onclick="deleteTask(' + i + ')"]' ; // xpath = //button[@onclick="deleteTask(i+1)"]
    // console.log(btnXpath); In ra xpath của các nút Delete cần nhấn vào
    const Delete = page.locator()


}

