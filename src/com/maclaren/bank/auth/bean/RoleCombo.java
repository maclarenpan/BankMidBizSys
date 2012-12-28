package com.maclaren.bank.auth.bean;

public class RoleCombo {
	private int role_id;
	
	private String roleName;

	public int getRole_id() {
		return role_id;
	}

	public String getRoleName() {
		return roleName;
	}

	public void setRole_id(int roleId) {
		role_id = roleId;
	}

	public void setRoleName(String roleName) {
		this.roleName = roleName;
	}
}
