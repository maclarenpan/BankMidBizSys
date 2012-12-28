package com.maclaren.bank.auth.service;

import com.maclaren.bank.auth.bean.CustomAuth;

public interface CustomAuthService 
{	
	public String queryAllCustomAuth(String root);
	
	public String queryCustomAuthByConditions(String auth_id, String operator_id, String root);
	
	public String updateCustomAuth(CustomAuth customAuth);
	
	public String deleteCustomAuth(CustomAuth customAuth);
	
	public String insertCustomAuth(CustomAuth customAuth);
	
}
