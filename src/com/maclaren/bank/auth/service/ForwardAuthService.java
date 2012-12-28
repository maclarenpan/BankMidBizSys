package com.maclaren.bank.auth.service;

import com.maclaren.bank.auth.bean.ForwardAuth;

public interface ForwardAuthService 
{	
	public String queryAllForwardAuth(String root);
	
	public String queryForwardAuthByConditions(String role_id, String auth_id, String root);
	
	public String insertForwardAuth(ForwardAuth forwardAuth);
	
	public String updateForwardAuth(ForwardAuth forwardAuth);
	
	public String deleteForwardAuth(ForwardAuth forwardAuth);
	
}
