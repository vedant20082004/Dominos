function call()
{
    var pii = piz.options[piz.selectedIndex].text
    var price = parseFloat(piz.options[piz.selectedIndex].value)

    var top = topings.options[topings.selectedIndex].text
    var topprice = parseFloat(topings.options[topings.selectedIndex].value)
    var gst = parseFloat(price*18/100)
    var sta = parseFloat(price*5/100)
    var total = parseFloat(price+topprice+gst+sta)
    


    var disc = ''
    if(fi.checked)
    {
        disc=10
    }
    if(se.checked)
    {
        disc=15
    }
    if(th.checked)
    {
        disc=20
    }

    var total2 = parseFloat(total-((price+topprice+gst+sta)*disc/100))
    

    var htm="<table border='1' cellspacing='0' width='30%'>"
     htm+="<caption<b><h3> ORDER RECEIPT </h3></b></caption>"
     htm+="<tr><th><img src='logo.png' width=200/></th><tr>"
     htm+="<tr><th><h3>"+ pii+"</h3></th><tr>"
     htm+="<tr><th><img src='"+ pii+".png' width=200 hieght=150/></th><tr>"
     htm+="</table>"
     htm+="<table border='1' cellspacing='0' width='30%'>"
     htm+="<tr><th> BASE PRICE :</th> <th> &#8377; "+ price+"</th></tr>"
     htm+="<tr><th>TOPINGS ["+top+"] :</th> <th> &#8377; "+ topprice+"</th></tr>"
     htm+="<tr><th> GST ON BEVERAGES :</th> <th> &#8377; "+ gst+"</th></tr>"
     htm+="<tr><th> SERVICE TAX :</th> <th> &#8377; "+ sta+"</th></tr>"
     htm+="<tr><th> TOTAL :</th> <th> &#8377;"+ total+"</th></tr>"
     htm+="<tr><th> DISCOUNT :</th> <th> "+disc+ "%</th></tr>"
     htm+="<tr><th> DISCOUNTED PRICE :</th> <th> &#8377;"+ total2+"</th></tr>"
     htm+="</table>" 

     result.innerHTML=htm


    
}