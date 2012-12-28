package com.maclaren.bank.biz.finance.bean;

public class ExchangeRate 
{
	private String id;
	
	private String currencyType1_id;
	
	private String currencyType2_id;
	
	private String rate;

	public String getId() {
		return id;
	}

	public void setId(String id) {
		this.id = id;
	}

	public String getCurrencyType1_id() {
		return currencyType1_id;
	}

	public void setCurrencyType1_id(String currencyType1Id) {
		currencyType1_id = currencyType1Id;
	}

	public String getCurrencyType2_id() {
		return currencyType2_id;
	}

	public void setCurrencyType2_id(String currencyType2Id) {
		currencyType2_id = currencyType2Id;
	}

	public String getRate() {
		return rate;
	}

	public void setRate(String rate) {
		this.rate = rate;
	}

}
