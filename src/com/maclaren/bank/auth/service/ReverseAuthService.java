package com.maclaren.bank.auth.service;

import com.maclaren.bank.auth.bean.ReverseAuth;

public interface ReverseAuthService 
{	
	public String queryAllReverseAuth(String root);
	
	public String queryReverseAuthByConditions(String role_id, String auth_id, String root);
	
	public String insertReverseAuth(ReverseAuth ReverseAuth);
	
	public String updateReverseAuth(ReverseAuth ReverseAuth);
	
	public String deleteReverseAuth(ReverseAuth ReverseAuth);
}
