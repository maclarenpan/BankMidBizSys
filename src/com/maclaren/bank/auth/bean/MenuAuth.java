package com.maclaren.bank.auth.bean;

public class MenuAuth {
	private String operator_id;
	
	private String authCode;

	public String getOperator_id() {
		return operator_id;
	}

	public String getAuthCode() {
		return authCode;
	}

	public void setOperator_id(String operatorId) {
		operator_id = operatorId;
	}

	public void setAuthCode(String authCode) {
		this.authCode = authCode;
	}

	
}
