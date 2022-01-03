function compute()
{
    var p,t,r,year,si;
    p = document.getElementById ("principal").value;
    t = document.getElementById ("years").value;
    r = document.getElementById ("rate").value;
    si = parseInt((p*t*r)/100 );
    year = new Date().getFullYear()+parseInt(years);
    document.getElementById('num').innerHTML="if you deposit" +p+ <br>"at an interest rate of" +r+</br> 
    "you will receive an amount of " +si+ "in the year" +year;

}
function updateRate() 
{
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText=rateval;
}




