function Redirect() {
    alert("Message Submitted Successfully");
}

function Redeem()
{
    var docos = 1200;
    var res = window.confirm("Want to redeem your docos?");
    if (res && docos>=1000) 
    {
        let tot = docos-1000;
        document.getElementById("total").innerHTML=`${tot}`;
        displayMsg();
    }
    else
    {
        alert("Not enough docos, Try after earning few more");
    }
    
}

function displayMsg()
{
    document.getElementById("msg").innerHTML = `Docos Redeemed Successfully,Your Overall rating got increased by <b>1 ⭐</b>`;
    document.getElementById("msg").style.visibility = "visible";
}