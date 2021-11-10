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

function IsUserValid(username,password)
{
  for (var i = 0 ; i<database.length;i++)
{
   	if(database[i].id === username &&
   		database[i].pass === password)
   	{
        localStorage.setItem("nameStorage",database[i].name); 
        localStorage.setItem("usrEmail",database[i].id);  
        localStorage.setItem("phno",database[i].phone);
        localStorage.setItem("gen",database[i].gender);
        localStorage.setItem("city",database[i].city); 
   		return true;
   	}
}
return false;
}


function signIn()
{
    var username = document.getElementById("email").value;
    var password = document.getElementById("pass").value;

	if (IsUserValid(username,password))
	{ 
        window.location.href = '../templates/Dashboard-Doc/Dashboard.html';
        
	}
	else
	{
		alert("Please Enter Correct User Credentials");
	}
}

