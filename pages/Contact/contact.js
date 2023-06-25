function openform()
{
    form= document.getElementById("contactform").style.display="block";
    info= document.getElementById("contactinfo").style.display="none";
}
function openinfo()
{
    info= document.getElementById("contactinfo").style.display="block";
    form= document.getElementById("contactform").style.display="none";
}
function check()
{
    name = document.getElementById("name").value;
    phone = document.getElementById("phone").value;
    address = document.getElementById("address").value;
    topic = document.getElementById("topic").value;
    if (name == "" || phone == "" || address == "" || topic == "")
    {
        document.getElementById("incorrect").style.display="block";
    }
    else document.getElementById("incorrect").style.display="none";
}