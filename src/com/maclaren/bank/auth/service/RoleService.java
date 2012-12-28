package com.maclaren.bank.auth.service;

import com.maclaren.bank.auth.bean.Role;

public interface RoleService 
{	
	public String queryAllRole(String root);
	
	public String queryRoleByConditions(String role_id, String root);
	
	public String insertRole(Role role);
	
	public String deleteRole(Role role);
	
	public String updateRole(Role role);
	
	public int dealRole2Operator(String operator_id, String role_id, int method);
	
	public int RUDRole(Role role, int method);
	
	public String getRoleCombo(String root);

}
