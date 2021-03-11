<%@ page language="java" contentType="text/html; utf-8"
    pageEncoding="utf-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<title>Scontrino</title>
<link rel="stylesheet" href="Style.css">
</head>
<body>

  <div id="invoice-POS">
    
    <center id="top">
      <div class="logo">
      <img src="https://www.ricettapizzanapoletana.it/wp-content/uploads/2019/07/pizza-napoletana.jpg" width="80" height="60" alt="">  
      </div>
      <span id="titolo">Pizzeria <br> GENERATION</span>
      <div class="info"> 
      
      </div><!--End Info-->
    </center><!--End InvoiceTop-->
    
    <div id="mid">
      <div class="info">
        
        <p style="text-align: center;"> 
        	
            Via Giuseppe Mazzini, 45<br>
            Bari<br>
            Tel.080 3030330<br>
            Mail: pizzeriageneration@gmail.com<br>
            P.Iva 01465321456
        </p>
      </div>
    </div><!--End Invoice Mid-->
    
    <div id="bot">

					<div id="table">
						<table>
							<tr class="tabletitle">
								<td class="item"><h2></h2></td>
								<td class="Hours"><h2>Quantità</h2></td>
								<td class="Rate"><h2>Euro</h2></td>
							</tr>

							<tr class="service">
								<td class="tableitem descrizionescontrino"><p class="itemtext">Communication</p></td>
								<td class="tableitem quantita"><p class="itemtext">5</p></td>
								<td class="tableitem"><p class="itemtext">$375.00</p></td>
							</tr>

							<tr class="service">
								<td class="tableitem"><p class="itemtext">Asset Gathering</p></td>
								<td class="tableitem"><p class="itemtext">3</p></td>
								<td class="tableitem"><p class="itemtext">$225.00</p></td>
							</tr>

							<tr class="service">
								<td class="tableitem"><p class="itemtext">Design Development</p></td>
								<td class="tableitem"><p class="itemtext">5</p></td>
								<td class="tableitem"><p class="itemtext">$375.00</p></td>
							</tr>

							<tr class="service">
								<td class="tableitem"><p class="itemtext">Animation</p></td>
								<td class="tableitem"><p class="itemtext">20</p></td>
								<td class="tableitem"><p class="itemtext">$1500.00</p></td>
							</tr>

							<tr class="service">
								<td class="tableitem"><p class="itemtext">Animation Revisions</p></td>
								<td class="tableitem"><p class="itemtext">10</p></td>
								<td class="tableitem"><p class="itemtext">$750.00</p></td>
							</tr>


							<tr class="tabletitle">
								<td></td>
								<td class="Rate"><h2>Iva</h2></td>
								<td class="payment"><h2>$419.25</h2></td>
							</tr>

							<tr class="tabletitle">
								<td></td>
								<td class="Rate"><h2>Totale</h2></td>
								<td class="payment"><h2>$3,644.25</h2></td>
							</tr>

						</table>
					</div><!--End Table-->

					<div id="legalcopy">
						<p class="legal">---------------------------- <br> Tavolo N. 2 <br> ---------------------------- </p>
						<P style="color:#000"><b>GRAZIE E ARRIVEDERCI!</b></P>
					</div>

				</div><!--End InvoiceBot-->
  </div><!--End Invoice-->


</body>
</html>