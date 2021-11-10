async function getInteraction()
{
    document.getElementById("info").style.visibility="hidden";
    var drug1 = document.getElementById("drug1").value;
    var drug2 = document.getElementById("drug2").value;
    const response = await fetch(`https://rxnav.nlm.nih.gov/REST/interaction/list.json?rxcuis=${drug1}+${drug2}`);
    const data = await response.json();
    console.log(data);

    document.getElementById("srcname").innerHTML=`<b>SourceName: </b> ${data.fullInteractionTypeGroup[0].sourceName}`;
    document.getElementById("desc").innerHTML=`<b>Description: </b> ${data.fullInteractionTypeGroup[0].fullInteractionType[0].interactionPair[0].description}`;
    document.getElementById("sev").innerHTML=`<b>Severity: </b> ${data.fullInteractionTypeGroup[1].fullInteractionType[0].interactionPair[0].severity}`;
    document.getElementById("comment").innerHTML=`<b> Comment: </b> ${data.fullInteractionTypeGroup[0].fullInteractionType[0].comment}`;
    
}
