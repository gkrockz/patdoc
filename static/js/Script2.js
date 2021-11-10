function logout()
{
    window.location.href = '../DocLogin.html';
}


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
    

function displayHeader()
{
    var name = localStorage.getItem("nameStorage");
    document.getElementById("header").innerHTML=` ${name}`;  
}

displayHeader();
