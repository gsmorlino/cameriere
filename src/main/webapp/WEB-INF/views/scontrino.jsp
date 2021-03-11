<%@ page import="org.accademiadellevante.cameriere.model.Ordine" %>
<%@ page import="java.util.List" %>
<%@ page import="java.util.Map" %>
<%@ page import="java.util.HashMap" %>
<%@ page import="org.accademiadellevante.cameriere.model.Piatto" %>
<%@ page import="java.util.ArrayList" %>
<%@ page language="java" contentType="text/html; utf-8"
		 pageEncoding="utf-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<title>Scontrino</title>
<link rel="stylesheet" href="resources/css/style.css">
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
							<%!
								public HashMap<Integer, Piatto> generaMappaPiatti(ArrayList<Piatto> piatti)
								{
									HashMap<Integer, Piatto> out = new HashMap<>();
									for (Piatto p: piatti)
									{
										out.put(p.getId(), p);
									}
									return out;
								}
							%>
<%
	List<Ordine> ordini = (List<Ordine>) request.getAttribute("lista-ordini");
	HashMap<Integer, Piatto> piatti = generaMappaPiatti((ArrayList<Piatto>) request.getAttribute("piatti"));
	%>
							<%double totale = 0.0; %>
							<% java.util.Formatter formatter2 = new java.util.Formatter();
								for (Ordine o: ordini){
								Piatto piatto = piatti.get(o.getId_piatto());
									java.util.Formatter formatter = new java.util.Formatter();
								%>
							<tr class="service">
								<td class="tableitem descrizionescontrino"><p class="itemtext"><%=piatto.getNome()%></p></td>
								<td class="tableitem quantita"><p class="itemtext"><%=o.getQuantita()%></p></td>
								<%double x = (piatto.getPrezzo()*o.getQuantita());%>
								<td class="tableitem"><p class="itemtext">€ <%=formatter.format("%.2f", x)%></p></td>
								<% totale+= piatto.getPrezzo()*o.getQuantita();%>
							</tr>
							<%}%>

							<tr class="tabletitle">
								<td></td>
								<td class="Rate"><h2>Iva</h2></td>
								<td class="payment"><h2>€ <%=totale*22/100.0%></h2></td>
							</tr>

							<tr class="tabletitle">
								<td></td>
								<td class="Rate"><h2>Totale</h2></td>
								<td class="payment"><h2>€ <%=formatter2.format("%.2f", totale)%></h2></td>
							</tr>

						</table>
					</div><!--End Table-->

					<div id="legalcopy">
						<p class="legal">---------------------------- <br> Tavolo N. <%=request.getAttribute("id-tavolo")%> <br> ---------------------------- </p>
						<P style="color:#000"><b>GRAZIE E ARRIVEDERCI!</b></P>
					</div>

				</div><!--End InvoiceBot-->
  </div><!--End Invoice-->


</body>
</html>