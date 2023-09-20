var tomb = []

function Tárol()
{
    var rendszam = document.getElementById("rendszama").value 
    var dizel = 0
    var benzin = 0
    var elektromos = 0
    if(document.getElementById("valaszt").value = 1)
    {
        dizel+=1
    }
    if(document.getElementById("valaszt").value = 2)
    {
      benzin+=1
    }  
    if(document.getElementById("valaszt").value = 3)
    {
       elektromos+=1
    }
    
    var haromajtos = 0
    var otajtos = 0
    if(document.getElementById("3ajto").checked)
    {
        haromajtos++
    }
    if(document.getElementById("5ajto").checked)
    {
        otajtos++
    }
    
    var elsotulaj = 0
    if(document.getElementById("csecs").checked)
    {
        elsotulaj++
    }
    
    var obj = [
        {
            rendszam : rendszam,
            dizel : dizel,
            benzin : benzin,
            elektromos : elektromos,
            elsotulaj : elsotulaj,
            haromajtos : haromajtos,
            otajtos : otajtos,
        }
    ]
    tomb.push(obj)
console.log(tomb)

}