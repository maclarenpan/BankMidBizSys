package com.maclaren.bank.biz.finance.bean;

public class SubbankTotalAmount 
{
	private String id;
	
	private String currency_id;
	
	private String subbank_id;
	
	private float amount;
	
	private String modifytime;

	public String getId() {
		return id;
	}

	public void setId(String id) {
		this.id = id;
	}

	public String getCurrency_id() {
		return currency_id;
	}

	public void setCurrency_id(String currencyId) {
		currency_id = currencyId;
	}

	public String getSubbank_id() {
		return subbank_id;
	}

	public void setSubbank_id(String subbankId) {
		subbank_id = subbankId;
	}

	public float getAmount() {
		return amount;
	}

	public void setAmount(float amount) {
		this.amount = amount;
	}

	public String getModifytime() {
		return modifytime;
	}

	public void setModifytime(String modifytime) {
		this.modifytime = modifytime;
	}
}
