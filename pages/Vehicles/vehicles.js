function destination(){
    var tour = document.getElementById("tours").value;
    var hide = document.getElementsByClassName("hide-option");
    var hide1 = document.getElementsByClassName("hide-option1");
    if (tour == 1){
        for (let i = 0; i < hide.length; i++){
            hide[i].style.display="none";
        }
        for (let i = 0; i < hide1.length; i++){
            hide1[i].style.display="block";
        }
    }
    else
    {
        for (let i = 0; i < hide.length; i++){
            hide[i].style.display="block";
        }
        for (let i = 0; i < hide1.length; i++){
            hide1[i].style.display="none";
        }
    }
}
$(document).ready(function(){
$("#types").change(function(){
    var value = $("#types option:selected").val();
    if (value >= 6 && value <= 8)
    {
        $("#name-number").css("display", "block");
        $("#number-of").html("Số ngày");
    }
    else 
    {
        $("#name-number").css("display","block");
        $("#number-of").html("Số vé");
    }
    
});
});
function bill(){
    guestname = document.getElementById("name");
    phone = document.getElementById("phone");
    if ( guestname.value=="" || phone.value=="")
{
    document.getElementById("incorrect").style.display = "block";
}
else document.getElementById("incorrect").style.display = "none";
}
function book()
{
    type = document.getElementById("types").value;
    num = document.getElementById("num").value;
    price =0 ;
    total =0;
    switch (type) {
      case "0":
          price = 150000;
        break;
      case "1":
          price = 210000;
        break;
      case "2":
          price = 145000;
        break;
      case "3":
          price = 205000;
        break;
      case "4":
          price = 200000;
        break;
      case "5":
          price = 250000;
        break;
      case "6":
          price = 1000000;
          break;
      case "7":    
          price = 1400000;
          break;
      case "8":    
          price = 1800000;
          break;
      case "9":    
          price = 800000;
          break;
      case "10":    
          price = 1200000;
          break;
      case "11":    
          price = 2100000;
          break;
      case "12":    
          price = 2100000;
          break;
      case "13":    
          price = 2000000;
          break;
      case "14":    
          price = 3200000;
          break;
    }
    total = price * num;
    internationalNumberFormat = new Intl.NumberFormat('en-US');
    document.getElementById("total").innerHTML = internationalNumberFormat.format(total) + "đ";
}