var tomb = []

function Tárol()
{
    var rendszam = document.getElementById("rendszama").value 

 
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
    var dizel = 0
    var benzin = 0
    var elektromos = 0
    var ujrendszam = 0
    var regirendszam = 0

    document.getElementById("táblázat").style.display = "flex"
    for(var i = 0;i<tomb.length;i++)
    {
        if(tomb.típus[i]==1)
        {
            benzin++
        }
        
        if(tomb.típus[i]==2)
        {
            dizel++
        }
        
        if(tomb.típus[i]==3)
        {
            elektromos++
        }

        document.getElementById("oksi1").innerHTML = benzin
        
        document.getElementById("oksi2").innerHTML = dizel
        
        document.getElementById("oksi3").innerHTML = elektromos
    }
}