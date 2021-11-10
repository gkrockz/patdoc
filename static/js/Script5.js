function Redirect()
{
    alert("Payment Done Successfully");
}

function RatedMsg()
{
    document.getElementById("msg").style.visibility="visible";
}

function ConfirmStatus()
{
    var code = localStorage.getItem("code").toLowerCase();
    var rdmCode = document.getElementById("rdmcode").value.toLowerCase();
    console.log(code,rdmCode);
    if(code === rdmCode)
    {
        window.location.href = '../PaymentStatus.html'; 
    }
    else
    {
        document.getElementById("check").style.visibility="visible";
    }
}

function ConfirmCardStatus()
{
    window.location.href = '../PaymentStatus.html';
}