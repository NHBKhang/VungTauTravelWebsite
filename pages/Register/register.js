function check()
{
    firstname = document.getElementById("first_name").value;
    lastname = document.getElementById("last_name").value;
    phone = document.getElementById("phone").value;
    email = document.getElementById("email").value;
    password = document.getElementById("password").value;
    address = document.getElementById("address").value;
    if (firstname == ""|| lastname == "" || phone == "" || email == "" || password == "" || address == "")
    {
        document.getElementById("incorrect").style.display="block";
    }
    else document.getElementById("incorrect").style.display="none";
}