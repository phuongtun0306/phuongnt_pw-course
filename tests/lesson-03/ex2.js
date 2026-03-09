let ChieuCao = 170;

let CanNangLyTuong = 10;
let CanNangToiDa = 10;
let CanNangToiThieu = 10;

CanNangLyTuong = (ChieuCao - 100) * 9 / 10;
CanNangToiDa = (ChieuCao - 100);
CanNangToiThieu = (ChieuCao - 100) * 8 / 10;

if (ChieuCao > 100 && ChieuCao < 200) {
    console.log("Cân nặng lý tưởng của bạn là: " + CanNangLyTuong + ", Cân nặng tối đa của bạn là: " + CanNangToiDa + ", Cân nặng tối đa của bạn là: " + CanNangToiThieu );
}