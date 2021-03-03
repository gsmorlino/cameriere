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
      <div><a href="tavoloselezionato?Id=<%=t.getId()%>">Tavolo <%=t.getId()%></a> </div>
  <%
    }
    %>
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