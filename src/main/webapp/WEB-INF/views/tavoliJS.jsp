<%@ page import="java.util.List" %>
       <%@ page import="org.accademiadellevante.cameriere.model.Tavolo" %>
       <%@ page language="java" contentType="text/html; charset=ISO-8859-1" pageEncoding="ISO-8859-1"%>
       <!DOCTYPE html>
       <html>
       <head>
       <meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1">
         <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min.js"></script>
         <script>
           var lista_tavoli;
           $(document).ready(function() {
             $.ajax({
               url: "/listatavoli"
             }).then(function(data) {
               for (t in data) {
                 $('.vagina').append('<div>' + data + '</div>');
               }
             });
           });
         </script>
       <title>Java Boss</title>
       </head>
       <body>
         <h1>Java Boss: Spring Boot - MVC web application</h1>
         <hr>

         <h2>${numeroTavoli} TAVOLI</h2>
         <div id="vagina"></div>

         <%--    <%if (((List<Tavolo>) request.getAttribute("cazzo")).get(0).occupato) {%>
               <h3>Occupato</h3>
         <p>
           <%= ((List<Tavolo>) request.getAttribute("cazzo")).get(0).occupato %>
         </p>
         <%} else {%>
         <h3>Non occupato</h3>
       <% } %>--%>

       </body>
       </html>