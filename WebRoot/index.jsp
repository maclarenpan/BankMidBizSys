<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<c:set var="ctx" value="${pageContext.request.contextPath}"/>
<html>
<head>
	<title>CRUD ExtJS Grid</title>
	
	<!-- ExtJS css -->
	<link rel="stylesheet" type="text/css" href="${ctx}/ext-4.0.0/resources/css/ext-all.css" />
	
	<!-- Row Editor plugin css -->
	<link rel="stylesheet" type="text/css" href="${ctx}/ext-4.0.0/examples/ux/css/rowEditorCustom.css" />
	<link rel="stylesheet" type="text/css" href="${ctx}/ext-4.0.0/examples/shared/example.css" />
	<link rel="stylesheet" type="text/css" href="${ctx}/ext-4.0.0/examples/ux/css/RowEditor.css" />

	<!-- App custom css -->
	<link rel="stylesheet" type="text/css" href="${ctx}/style/crudgrid.css" />
	
	<!-- ExtJS js -->
	<script src="${ctx}/ext-4.0.0/ext-all.js"></script>
	
	<!-- Row Editor plugin js -->
	<script src="${ctx}/ext-4.0.0/examples/ux/RowEditor.js"></script>
	
	<!-- App js -->
	<script src="${ctx}/js/crud-grid.js"></script>
	
</head>
<body>
	<div id="crud-grid"></div>
</body>
</html>