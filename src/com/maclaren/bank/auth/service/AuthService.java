package com.maclaren.bank.auth.service;

public interface AuthService 
{	
	public String getMenuForwardAuth(String operator_id, String root);
	
	public String getMenuReverseAuth(String operator_id, String root);
	
	public String getMenuCustomAuth(String operator_id, String root);
	
	public String queryAllAuth();
	
	public String queryAuthCombo(String root);
	
	public int addAuth2Role(String auth_id, String role_id);
	
	public int delAuth4Role(String auth_id, String role_id);
	
	public int dealAuthOperator2(String authIds, String operator_id, int method);
	
	public int dealAuthOperator(String authIds, String operator_id, int method);
	
}
