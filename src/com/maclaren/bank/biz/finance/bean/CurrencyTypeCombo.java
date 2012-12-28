package com.maclaren.bank.biz.finance.bean;

public class CurrencyTypeCombo {
	private String currencyType_id;
	
	private String currencyTypeName;

	public String getCurrencyType_id() {
		return currencyType_id;
	}

	public String getCurrencyTypeName() {
		return currencyTypeName;
	}

	public void setCurrencyType_id(String currencyTypeId) {
		currencyType_id = currencyTypeId;
	}

	public void setCurrencyTypeName(String currencyTypeName) {
		this.currencyTypeName = currencyTypeName;
	}
}
