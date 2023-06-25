//Thiết lập giá tiền và tổng giá tiền
function book()
{
    numofpp = document.getElementById("peoplenum").value;
    tour = document.getElementById("tours").value;
    price =0 ;
    switch (tour) {
      case "0":
          price = 4000000;
        break;
      case "1":
          price = 2500000;
        break;
      case "2":
          price = 2000000;
        break;
      case "3":
          price = 2100000;
        break;
      case "4":
          price = 2999000;
        break;
      case "5":
          price = 3000000;
        break;
      case "6":
          price = 2550000;
          break;
      case "7":    
          price = 2250000;
          break;
    }
    if (tour != -1)
    {
      total = numofpp * price;
      internationalNumberFormat = new Intl.NumberFormat('en-US');
      document.getElementById("price").innerHTML ="(Giá tiền: " + internationalNumberFormat.format(price) + "đ)";
      document.getElementById("total").innerHTML = internationalNumberFormat.format(total) + "đ";
    }
}
// Thiết lập ngày về không thẻ chọn những ngày trước đó của ngày đi
function minbackday()
    {
        godate = document.getElementById("godate").value;
        document.getElementById("backdate").setAttribute("min",godate);

    }
// Thiết lập đơn từ những gì đã điền
function bill(){
    var tour = document.getElementById("tours");
    var guestname = document.getElementById("name");
    var phone = document.getElementById("phone");
    var backdate = document.getElementById("backdate");
    if ( guestname.value=="" || phone.value=="" || backdate.value =="")
    {
        document.getElementById("incorrect").style.display = "block";
    }
    else
    {
    document.getElementById("incorrect").style.display = "none";
    }
    
}
// Thiết lập tự động điền ngày đi vào ngày hiện tại lúc mở trang
$(document).ready( function() {
    var now = new Date();
    var month = (now.getMonth() + 1);               
    var day = now.getDate();
    if (month < 10) 
        month = "0" + month;
    if (day < 10) 
        day = "0" + day;
    var today = now.getFullYear() + '-' + month + '-' + day;
    document.getElementById("godate").setAttribute("min",today);
    $('#godate').val(today);
});
// Chọn tour tự động chỉnh
function picktour(){
  select = document.getElementById("tours");
  select.value = '0';
  document.body.scrollTop = 260;
  document.documentElement.scrollTop = 260;
}
function picktour1(){
    select = document.getElementById("tours");
    select.value = '1';
    document.body.scrollTop = 260;
    document.documentElement.scrollTop = 260;
}
function picktour2(){
  select = document.getElementById("tours");
  select.value = '2';
  document.body.scrollTop = 260;
  document.documentElement.scrollTop = 260;
}
function picktour3(){
  select = document.getElementById("tours");
  select.value = '3';
  document.body.scrollTop = 260;
  document.documentElement.scrollTop = 260;
}
function picktour4(){
  select = document.getElementById("tours");
  select.value = '4';
  document.body.scrollTop = 260;
  document.documentElement.scrollTop = 260;
}
function picktour5(){
  select = document.getElementById("tours");
  select.value = '5';
  document.body.scrollTop = 260;
  document.documentElement.scrollTop = 260;
}
function picktour6(){
  select = document.getElementById("tours");
  select.value = '6';
  document.body.scrollTop = 260;
  document.documentElement.scrollTop = 260;
}
function picktour7(){
  select = document.getElementById("tours");
  select.value = '7';
  document.body.scrollTop = 260;
  document.documentElement.scrollTop = 260;
}