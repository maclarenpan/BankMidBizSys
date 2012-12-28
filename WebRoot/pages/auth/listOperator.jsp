<%@ page language="java" import="java.util.*" pageEncoding="ISO-8859-1"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>  
<%@ taglib uri="http://java.sun.com/jsp/jstl/fmt" prefix="fmt" %>  
<c:set var="ctx" value="${pageContext.request.contextPath}"/>
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
  <head>
    <title>listOperator</title>
	<meta http-equiv="pragma" content="no-cache">
	<meta http-equiv="cache-control" content="no-cache">
	<meta http-equiv="expires" content="0">    
	<meta http-equiv="keywords" content="keyword1,keyword2,keyword3">
	<meta http-equiv="description" content="This is my page">
	<!--
	<link rel="stylesheet" type="text/css" href="styles.css">
	-->

  </head>
  
  <body>
  	<a href="staff/operator.action?method=getByConditions&username=maclaren">lutbyConditions</a>
    <a href="staff/operator.action?method=getAll">listOperator</a>
    <a href="staff/test.action">test</a>
    <div align="right" style="width:300;background:grey">
    <form action="staff/operator.action?method=getByConditions" method="post">
    	username<input type="text" id="username" name="username"></input><br/>
    	userType_id<input type="text" id="userType_id" name="userType_id"></input><br/>
    	role_id<input type="text" id="role_id" name="role_id"></input><br/>
    	status<input type="text" id="status" name="status"></input><br/>
    	starttime<input type="text" id="starttime" name="starttime"></input><br/>
    	endtime<input type="text" id="endtime" name="endtime"></input><br/>
    	<input type="submit" value="submit"/><input type="reset" value="reset"/>
    </form>
    </div>
    <br/>
    <br/>
	<a href="auth/auth.action?method=getAll">allAuth</a><br/>
	<a href="auth/reverseAuth.action?method=getAll">allReverseAuth</a><br/>
	<a href="auth/customAuth.action?method=getAll">allCustomAuth</a><br/>
	<br/><br/>
	<a href="auth/role.action?method=getAll">allRole</a><br/>
	<a href="auth/proxyLimit.action?method=getAll">allProxyLimit</a><br/>
	<br/>
	<br/>
	<a href="orga/subbank.action?method=getAll">allsubbank</a><br/>
	<br/>
	<a href="staff/account.action?method=getAll">allaccount</a><br/>
	<a href="staff/accountType.action?method=getAll">allaccountType</a><br/>
	<a href="staff/guest.action?method=getAll">allGuest</a><br/>
	<a href="staff/guestType.action?method=getAll">allGuestType</a><br/>
	<a href="staff/proxyUser.action?method=getAll">allProxyUser</a><br/>
	<a href="staff/proxyUserType.action?method=getAll">allProxyUserType</a><br/>
	<div id="addRole" style="width:800;background:grey">
	<fieldset>
		<legend>updateRole2Operator</legend>
		<form action="auth/dealRole2Operator.action?method=update" method="post">
		operId<input type="text" id="operator_id" name="operator_id"/><br/>
		roleId<input type="text" id="role_id" name="role_id"/><br/>
		<input type="submit"/><input type="reset"/>
		</form>
	</fieldset>
	</div>
	<div id="deleteRole" style="width:800;background:grey">
	<fieldset>
		<legend>deleteRole4Operator</legend>
		<form action="auth/dealRole2Operator.action?method=del" method="post">
		operId<input type="text" id="operator_id" name="operator_id"/><br/>
		<input type="submit"/><input type="reset"/>
		</form>
	</fieldset>
	</div>
	
	<div id="addAuth2Role" style="width:800;background:grey">
	<fieldset>
		<legend>addAuths2Role</legend>
		<form action="auth/dealAuth2Role?method=add" method="post">
		authIds<input type="text" id="authIds" name="authIds"/><br/>
		roleId<input type="text" id="role_id" name="role_id"/><br/>
		<input type="submit"/><input type="reset"/>
		</form>
	</fieldset>
	</div>
	<div id="deleteAuths4Role" style="width:800;background:grey">
	<fieldset>
		<legend>deleteAuths4Role</legend>
		<form action="auth/dealAuth2Role?method=del" method="post">
		authIds<input type="text" id="authIds" name="authIds" /><br/> 
		roleId<input type="text" id="role_id" name="role_id"/><br/>
		<input type="submit"/><input type="reset"/>
		</form>
	</fieldset>
	</div>
	
	<div id="addCustomAuth" style="width:800;background:grey">
	<fieldset>
		<legend>addCustomAuth</legend>
		<form action="auth/dealAuth2Operator?method=addCustom" method="post">
		authIds<input type="text" id="authIds" name="authIds"/><br/>
		operatorId<input type="text" id="operator_id" name="operator_id"/><br/>
		<input type="submit"/><input type="reset"/>
		</form>
	</fieldset>
	</div>
	<div id="deleteCustomAuth" style="width:800;background:grey">
	<fieldset>
		<legend>deleteCustomAuth</legend>
		<form action="auth/dealAuth2Operator?method=delCustom" method="post">
		authIds<input type="text" id="authIds" name="authIds" /><br/> 
		operator_id<input type="text" id="operator_id" name="operator_id"/><br/>
		<input type="submit"/><input type="reset"/>
		</form>
	</fieldset>
	</div>
		<div id="addRerverAuth" style="width:800;background:grey">
	<fieldset>
		<legend>addRerverAuth</legend>
		<form action="auth/dealAuth2Operator?method=addReverse" method="post">
		authIds<input type="text" id="authIds" name="authIds"/><br/>
		operator_id<input type="text" id="operator_id" name="operator_id"/><br/>
		<input type="submit"/><input type="reset"/>
		</form>
	</fieldset>
	</div>
	<div id="deleteReverseAuth" style="width:800;background:grey">
	<fieldset>
		<legend>deleteReverseAuth</legend>
		<form action="auth/dealAuth2Operator?method=delReverse" method="post">
		authIds<input type="text" id="authIds" name="authIds" /><br/> 
		operator_id<input type="text" id="operator_id" name="operator_id"/><br/>
		<input type="submit"/><input type="reset"/>
		</form>
	</fieldset>
	</div>
  </body>
</html>
