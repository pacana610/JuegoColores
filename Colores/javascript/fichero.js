function loadEvents()
{
    red=document.getElementById("box1");
    blue=document.getElementById("box2");
    yellow=document.getElementById("box3");
    red.addEventListener('click', colores);
    blue.addEventListener('click', colores);
    yellow.addEventListener('click', colores);
    red.style.backgroundColor = "red";
    blue.style.backgroundColor = "blue";
    yellow.style.backgroundColor = "yellow";
    reset=document.getElementById("reset");
    reset.addEventListener('click', resetear);
    acierto = 0;
    res=0;
    

    
}



function colores(colors)
{
    if (res<= 0)
    {
    if(colors.target.style.backgroundColor == "red")
    {
        colors.target.style.backgroundColor = "yellow";
    }
    else
    {
        if(colors.target.style.backgroundColor == "blue")
        {
            colors.target.style.backgroundColor = "red";
        }
        else
        {
            if(colors.target.style.backgroundColor == "yellow")
            {
                colors.target.style.backgroundColor = "blue";
            }
        }
    }
    if(red.style.backgroundColor == blue.style.backgroundColor && yellow.style.backgroundColor == red.style.backgroundColor)
    {
        alert ("Enhorabuena");
        acierto= acierto + 1;
        document.getElementById("numero").innerHTML=acierto;
        res= res+1;
    }
    }
    else
    {
        if (res=1)
        {
            document.getElementById("reset").addEventListener('click', resetear)
        }
    }
}

function resetear ()
{
    red.style.backgroundColor = "blue";
    blue.style.backgroundColor = "yellow";
    yellow.style.backgroundColor = "red";
    res=0;
    colores()
}