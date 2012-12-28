package com.maclaren.bank.auth.bean;

public class AuthCombo {
	private int auth_id;
	
	private String authName;

	public int getAuth_id() {
		return auth_id;
	}

	public String getAuthName() {
		return authName;
	}

	public void setAuth_id(int authId) {
		auth_id = authId;
	}

	public void setAuthName(String authName) {
		this.authName = authName;
	}
}
