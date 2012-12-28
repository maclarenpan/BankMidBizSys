package com.maclaren.bank.staff.bean;

public class Account 
{
	private String id;
	
	private String accountType_id;
	
	private String username;
	
	private String password;
	
	private String bank_id;
	
	private String modifytime;

	public String getId() {
		return id;
	}

	public String getAccountType_id() {
		return accountType_id;
	}

	public String getUsername() {
		return username;
	}

	public String getPassword() {
		return password;
	}

	public String getBank_id() {
		return bank_id;
	}

	public String getModifytime() {
		return modifytime;
	}

	public void setId(String id) {
		this.id = id;
	}

	public void setAccountType_id(String accountTypeId) {
		accountType_id = accountTypeId;
	}

	public void setUsername(String username) {
		this.username = username;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public void setBank_id(String bankId) {
		bank_id = bankId;
	}

	public void setModifytime(String modifytime) {
		this.modifytime = modifytime;
	}

	
}
