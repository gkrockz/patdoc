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
        window.location.href = '../templates/Dashboard-Pat/Dashboard.html';
        
	}
	else
	{
		alert("Please Enter Correct User Credentials");
	}
}

function showDate()
{
    var today = new Date();
    var dd = today.getDate();
    var mm = today.getMonth() + 1; 
    var yyyy = today.getFullYear();
    if (dd < 10) {
    dd = '0' + dd
    }
    if (mm < 10) {
    mm = '0' + mm
    }

    today = yyyy + '-' + mm + '-' + dd;
    document.getElementById("datepicker").setAttribute("min", today);
}