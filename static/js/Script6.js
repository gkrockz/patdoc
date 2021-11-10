var database = [
    {
        id:'rashid@gmail.com',
        name:'Ahmad Rashid',
        pass:'rashid',
        phone:'9787643767',
        gender:'Male',
        city:'Afghanistan'
    },
    {
        id:'vinay@gmail.com',
        name:'Vinay',
        pass:'vinay',
        phone:'9723623472',
        gender:'Male',
        city:'Tirupati'
    },
    {
        id:'kishore@gmail.com',
        name:'Kishore',
        pass:'kishore',
        phone:'7200172004',
        gender:'Male',
        city:'Sholinghur'
    },
    {
        id:'mudit@gmail.com',
        name:'Mudit',
        pass:'mudit',
        phone:'7868787891',
        gender:'Male',
        city:'Bihar'
    }  
]
function validateSearch(usrname)
{
    for (var i = 0 ; i<database.length;i++)
    {
        if(usrname === database[i].name.toLowerCase())
        {
            return true;
        }
    }
 return false;   
}


function Search()
{
    var usrname = document.getElementById("usrname").value.toLowerCase();
   	if(validateSearch(usrname))
    {
        document.getElementById("results").innerHTML=`<h3> Patient Found. Click to view patient details  📝 <a href='#'>${usrname}</a></h3>  `;
    }
    else
    {
        document.getElementById("results").innerHTML=`<h3> No patient found </h3>`;
    }  
}

function displayCode()
{
    var chars = "ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz123456789";  
    var len = 8;  
    var code = '';  
    for (var i=0; i<len; i++) 
    {  
        var char = Math.floor(Math.random() * chars.length);  
        code += chars.substring(char, char+1);  
    }   
    document.getElementById("msg").innerHTML = `Pacos Redeemed Successfully, Use the Code below to get a free appointment: <b>${code}</b>`;
    localStorage.setItem("code",code);
    document.getElementById("msg").style.visibility = "visible";
}


function Redeem()
{
    var pacos = 200
    var res = window.confirm("Want to redeem your pacos?");
    if (res && pacos>=100) 
    {
        let tot = pacos-100;
        document.getElementById("total").innerHTML=`${tot}`;
        displayCode();
    }
    else
    {
        alert("Not enough pacos, Try after earning few more");
    }
} 

function logout()
{
    window.location.href = '../PatLogin.html';
}