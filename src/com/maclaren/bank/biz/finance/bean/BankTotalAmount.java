package com.maclaren.bank.biz.finance.bean;

public class BankTotalAmount {
	private String id;
	
	private String bank_id;
	
	private String currencyType_id;
	
	private double amount;
	
	private String modifytime;

	public String getId() {
		return id;
	}

	public String getBank_id() {
		return bank_id;
	}

	public String getCurrencyType_id() {
		return currencyType_id;
	}

	public double getAmount() {
		return amount;
	}

	public String getModifytime() {
		return modifytime;
	}

	public void setId(String id) {
		this.id = id;
	}

	public void setBank_id(String bankId) {
		bank_id = bankId;
	}

	public void setCurrencyType_id(String currencyTypeId) {
		currencyType_id = currencyTypeId;
	}

	public void setAmount(double amount) {
		this.amount = amount;
	}

	public void setModifytime(String modifytime) {
		this.modifytime = modifytime;
	}

	
}
