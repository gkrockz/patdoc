function Search() 
{
    FetchData();
}
function clearDocument()
{
  
}
async function FetchData() 
{
    var medName = document.getElementById("medicineName").value
    try 
    {
      var found = true;
      const response = await fetch(`https://api.fda.gov/drug/event.json?search=\"${medName}\"`);
      const data = await response.json();
      var len= data.results[0].patient.drug.length;
      for(var i=0;i<len;i++)
      {
        if(data.results[0].patient.drug[i].medicinalproduct.toLowerCase().includes(medName.toLowerCase()))
        {
          document.getElementById("medname").innerHTML=`<b>Medicine name</b>: ${data.results[0].patient.drug[i].medicinalproduct.toLowerCase()}`;
          document.getElementById("dostxt").innerHTML=`<b>Dosage Text</b>: ${data.results[0].patient.drug[i].drugdosagetext.toLowerCase()}`;
          document.getElementById("indication").innerHTML=`<b>Medicine Indication:</b> ${data.results[0].patient.drug[i].drugindication}`;
          document.getElementById("manf-name").innerHTML=`<b>Manufacturer Name:</b> ${data.results[0].patient.drug[i].openfda.manufacturer_name[0]}`;
          document.getElementById("gen-name").innerHTML=`<b>Generic Name:</b> ${data.results[0].patient.drug[i].openfda.generic_name[0]}`;
          document.getElementById("substance").innerHTML=`<b>Substance Name:</b> ${data.results[0].patient.drug[i].openfda.substance_name[0]}`;
          document.getElementById("pill-type").innerHTML=`<b>Medicine Type:</b> ${data.results[0].patient.drug[i].openfda.product_type}`;
          document.getElementById("note").innerHTML=" ";
          found = true;
          break;
        }
        else
        {
           found = false
        }
      }
      if(found == false)
      {
        document.getElementById("end").innerHTML=`<b>No match found, Similar tablet to your search is</b>: ${data.results[0].patient.drug[0].medicinalproduct}`;
      }   
    } 
    catch 
    {
      console.log("No matches found");
    }
}

