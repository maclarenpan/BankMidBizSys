package com.maclaren.bank.auth.bean;

public class CustomAuth 
{
	private String id;
	
	private String auth_id;
	
	private String operator_id;

	public String getId() {
		return id;
	}

	public String getAuth_id() {
		return auth_id;
	}

	public String getOperator_id() {
		return operator_id;
	}

	public void setId(String id) {
		this.id = id;
	}

	public void setAuth_id(String authId) {
		auth_id = authId;
	}

	public void setOperator_id(String operatorId) {
		operator_id = operatorId;
	}

	
}
