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
//
function leftdate()
    {
        nightnum = document.getElementById("nightnum").value;
        godate = document.getElementById("godate").value;
        godateyear= godate.slice(0,4);
        godatemonth= godate.slice(5,7);
        godateday= godate.slice(8,10);
        day = parseInt(godateday)+ parseInt(nightnum);
        if (godatemonth == "01" || godatemonth == "03" || godatemonth == "05" || godatemonth == "07" || godatemonth == "08" || godatemonth == "10" || godatemonth == "12")
        {
        if (day>31)
        {
        day = day - 31;
        if (day<10) {day= "0"+ day;}
        godatemonth =parseInt(godatemonth)+1;
        godatemonth = "0" + godatemonth;
        }
        }
        else 
        if (day >30) {
            day=day-30;
            day= "0"+ day;
            if (day<10)
            {day= "0"+ day;}
            godatemonth =parseInt(godatemonth)+1;
            godatemonth = "0" + godatemonth;};
        document.getElementById("dayleft").innerHTML= day + "/" + godatemonth+"/"  + godateyear;
    }
    function bill(){
        guestname = document.getElementById("name");
        phone = document.getElementById("phone");
        if ( guestname.value=="" || phone.value=="")
    {
        document.getElementById("incorrect").style.display = "block";
    }
    else document.getElementById("incorrect").style.display = "none";
    }
    //
function book()
{
    hotelnhouse = document.getElementById("hotelnhouse").value;
    numofroom = document.getElementById("numofroom").value;
    price =0 ;
    total =0;
    switch (hotelnhouse) {
      case "0":
          price = 1850000;
        break;
      case "1":
          price = 3900000;
        break;
      case "2":
          price = 2400000;
        break;
      case "3":
          price = 5500000;
        break;
      case "4":
          price = 200000;
        break;
      case "5":
          price = 225000;
        break;
      case "6":
          price = 259000;
          break;
      case "7":    
          price = 405000;
          break;
    }
    total = price * 50/100 * numofroom;
    internationalNumberFormat = new Intl.NumberFormat('en-US');
    document.getElementById("price").innerHTML = internationalNumberFormat.format(total) + "đ";
}