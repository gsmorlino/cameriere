<%--
<%@ page import="java.util.List" %>
<%@ page import="org.accademiadellevante.cameriere.model.Tavolo" %>
<%@ page language="java" contentType="text/html; charset=ISO-8859-1" pageEncoding="ISO-8859-1"%>
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1">
<title>Java Boss</title>
</head>
<body>
  <h1>Java Boss: Spring Boot - MVC web application</h1>
  <hr>

  <h2>${numeroTavoli} TAVOLI</h2>
  <% List<Tavolo> tavoli = (List<Tavolo>) request.getAttribute("tavoli");
    for (Tavolo t: tavoli)
    {
      %>
      <div><a href="tavoloselezionato?Id=<%=t.getId()%>">Tavolo <%=t.getId()%> - sala <%=t.sala.getId()%></a> </div>
  <%
    }
    %>
  &lt;%&ndash;    <%if (((List<Tavolo>) request.getAttribute("cazzo")).get(0).occupato) {%>
        <h3>Occupato</h3>
  <p>
    <%= ((List<Tavolo>) request.getAttribute("cazzo")).get(0).occupato %>
  </p>
  <%} else {%>
  <h3>Non occupato</h3>
<% } %>&ndash;%&gt;

</body>
</html>--%>

<%@ page import="java.util.List" %>
<%@ page import="org.accademiadellevante.cameriere.model.Tavolo" %>
<%@ page language="java" contentType="text/html; charset=ISO-8859-1" pageEncoding="ISO-8859-1"%>
<!DOCTYPE html>
<html>
<head>
  <meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1">
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min.js"></script>
  <script>
   /* $(document).ready(function() {
      $.ajax({
        url: "https://official-joke-api.appspot.com/random_joke"
      }).then(function(data) {
        $('.greeting-id').append(data.setup);
        $('.greeting-content').append(data.punchline);
      });
    });*/
   $(document).ready(function() {
     $.ajax({
       url: "listatavoli"
     }).then(function(data) {
       $('.greeting-id').append(data[0].id);
       $('.greeting-content').append(data[1].id);

       for (i in data)
       {
         $('#vagina').append('<div>'+data[i].id+'</div>');
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
<div>
  <p class="greeting-id">The ID is </p>
  <p class="greeting-content">The content is </p>
</div>

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
