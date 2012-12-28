package com.maclaren.bank.staff.bean;

public class AccountCombo {
	public String getAccount_id() {
		return account_id;
	}

	public String getAccountName() {
		return accountName;
	}

	public void setAccount_id(String accountId) {
		account_id = accountId;
	}

	public void setAccountName(String accountName) {
		this.accountName = accountName;
	}

	private String account_id;
	
	private String accountName;
}
