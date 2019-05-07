var xo,p,turn = 0,velha = 9, x = [0,0,0,0,0,0,0,0,0], o = [0,0,0,0,0,0,0,0,0], win = false;


function mostrarXO(xo,p)
{
    console.log(win);
    
    if(win == false)
    {
        xo = xo + turn; 
        if(xo == 0)
        {
            document.getElementById("area"+p).innerHTML = "<img class='imgXO'src='x.png'>"+ "</img>"; 
            x[p-1] = 1;
            checkVitoriaX(x);
            turn = 1;
            velha -= 1;
        }
        else
        {
            document.getElementById("area"+p).innerHTML = "<img class='imgXO'src='circle.png'>"+ "</img>"; 
            o[p-1] = 1;
            checkVitoriaO(o);
            turn = 0;
            velha -= 1;
        }
        checkVelha();
    }
    
    

}

function checkVitoriaX(x)
{
    if(x[0] == 1 &&  x[1]== 1 && x[2] == 1 || x[3] == 1 &&  x[4]== 1 && x[5] == 1 || x[6] == 1 &&  x[7]== 1 && x[8] == 1)
    {
        alert("O X Venceu!");
        win = true;
    }
    else if(x[0] == 1 &&  x[3]== 1 && x[6] == 1 || x[1] == 1 &&  x[4]== 1 && x[7] == 1 || x[2] == 1 &&  x[5]== 1 && x[8] == 1)
    {    
        alert("O X Venceu!");
        win = true;
    }
    else if(x[0] == 1 &&  x[4]== 1 && x[8] == 1 || x[2] == 1 &&  x[4]== 1 && x[6] == 1)
    {
        alert("O X Venceu!");
        win = true;
    }
}

function checkVitoriaO(o)
{
    if(o[0] == 1 &&  o[1]== 1 && o[2] == 1 || o[3] == 1 &&  o[4]== 1 && o[5] == 1 || o[6] == 1 &&  o[7]== 1 && o[8] == 1)
    {    
        alert("O Círculo Venceu!");
        win = true;
    }
    else if(o[0] == 1 &&  o[3]== 1 && o[6] == 1 || o[1] == 1 &&  o[4]== 1 && o[7] == 1 || o[2] == 1 &&  o[5]== 1 && o[8] == 1)
    {    
        alert("O Círculo Venceu!");
        win = true;
    }
    else if(o[0] == 1 &&  o[4]== 1 && o[8] == 1 || o[2] == 1 &&  o[4]== 1 && o[6] == 1)
    {    
        alert("O Círculo Venceu!");
        win = true;
    }
}

function checkVelha()
{
    if(velha == 0)
        alert("O jogo deu velha!");
}
function novoJogo()
{
    document.location.reload(true);
}