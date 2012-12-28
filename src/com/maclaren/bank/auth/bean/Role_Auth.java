package com.maclaren.bank.auth.bean;

public class Role_Auth 
{
	private String id;
	
	private String auth_id;
	
	private String operator_id;

	public String getId() {
		return id;
	}

	public void setId(String id) {
		this.id = id;
	}

	public String getAuth_id() {
		return auth_id;
	}

	public void setAuth_id(String authId) {
		auth_id = authId;
	}

	public String getOperator_id() {
		return operator_id;
	}

	public void setOperator_id(String operatorId) {
		operator_id = operatorId;
	}
	
	
}
