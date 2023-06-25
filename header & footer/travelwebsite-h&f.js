window.onscroll = function()
{
    let r = document.getElementById("return")
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20)
    {
    	r.style.display = "block";
        document.getElementById("box").classList.remove("togglebox");
        document.getElementById("search").classList.remove("togglesearch");
        document.getElementById("home").classList.remove("toggleheader");
        document.getElementById("logo-header").classList.remove("hide");
        document.getElementById("title-header").classList.remove("hide");
        document.getElementById("login-header").classList.remove("hide");
        document.getElementById("search-button").classList.remove("togglebutton");
    }
    else
    {
    	r.style.display = "none";
    }
    if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80)
    {
        document.getElementById("login-menu").classList.remove("updown");
    }
}
function scrollToTop()
{
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}
function show(){
    document.getElementById("mainMenu").classList.add("changeM");
    document.getElementById("background").classList.add("changeM");
    document.getElementById("closeMenu").classList.add("change");
    document.getElementById("options").classList.add("change");
}
function hide(){
    document.getElementById("mainMenu").classList.remove("changeM");
    document.getElementById("background").classList.remove("changeM");
    document.getElementById("closeMenu").classList.remove("change");
    document.getElementById("options").classList.remove("change");
}
function searchbox(){
    document.getElementById("box").style.width="5%";
    document.getElementById("box").classList.toggle("togglebox");
    document.getElementById("search").classList.toggle("togglesearch");
    document.getElementById("home").classList.toggle("toggleheader");
    document.getElementById("logo-header").classList.toggle("hide");
    document.getElementById("title-header").classList.toggle("hide");
    document.getElementById("login-header").classList.toggle("hide");
    document.getElementById("search-button").classList.toggle("togglebutton");
}
function togglemenu(){
  document.getElementById("login-menu").classList.toggle("updown");
}
function removemenu(){
  document.getElementById("login-menu").classList.remove("updown");
}
$(document).ready(function(){
    $("#sign").click(function(){
        var email = $("#email").val();
        var password = $("#password").val();
        if (email == "")
        {
            $("#error-email").css("display", "block");
            $(".input.email").css("border-color", "red");
        }
        else
        {
            $("#error-email").css("display", "none");
            $(".input.email").css("border-color", "gray");
        }
        if (password == "")
        {
            $("#error-password").css("display", "block");
            $(".input.password").css("border-color", "red");
        }
        else
        {
            $("#error-password").css("display", "none");
            $(".input.password").css("border-color", "gray");
        }
    });
});