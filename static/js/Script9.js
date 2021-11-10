async function GenerateAvtr(usrname) 
{    
      try 
      {
        document.getElementById("avtr").src = `https://avatars.dicebear.com/api/initials/"${usrname}".svg?backgroundColors=blueGrey&radius=12`;
      } 
      catch (error) 
      {
        console.error(error);
      }
}    

var usrname = localStorage.getItem("nameStorage"); 
var id = localStorage.getItem("usrEmail");
var phno = localStorage.getItem("phno");
var gen = localStorage.getItem("gen");
var genId = (gen=="Male")?1:2;
var city = localStorage.getItem("city");
document.getElementById("name").value=`${usrname}`;
document.getElementById("email").value=`${id}`;
document.getElementById("phno").value=`${phno}`;
document.getElementById("gen").selectedIndex=`${genId}`;
document.getElementById("city").value=`${city}`;
GenerateAvtr(usrname);