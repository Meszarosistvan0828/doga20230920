var tomb = []

function Tárol()
{
    var rendszam = document.getElementById("rendszama").value 
    var dizel = 0
    var benzin = 0
    var elektromos = 0
 
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
            típus : document.getElementById("valaszt").value,
            elsotulaj : elsotulaj,
            haromajtos : haromajtos,
            otajtos : otajtos,
        }
    ]

tomb.push(obj)
console.log(tomb)

}


function stat()
{
    
}