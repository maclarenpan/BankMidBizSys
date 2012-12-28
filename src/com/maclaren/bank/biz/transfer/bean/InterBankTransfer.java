package com.maclaren.bank.biz.transfer.bean;

public class InterBankTransfer 
{
	private String id;
	
	private String guest_id;
	
	private String fromSubbank_id;
	
	private String toSubbank_id;
	
	private String currencyType_id;
	
	private double amount;
	
	private String createtime;
	
	private int status;

	public String getId() {
		return id;
	}

	public void setId(String id) {
		this.id = id;
	}

	public String getGuest_id() {
		return guest_id;
	}

	public void setGuest_id(String guestId) {
		guest_id = guestId;
	}

	public String getFromSubbank_id() {
		return fromSubbank_id;
	}

	public void setFromSubbank_id(String fromSubbankId) {
		fromSubbank_id = fromSubbankId;
	}

	public String getToSubbank_id() {
		return toSubbank_id;
	}

	public void setToSubbank_id(String toSubbankId) {
		toSubbank_id = toSubbankId;
	}

	public String getCurrencyType_id() {
		return currencyType_id;
	}

	public void setCurrencyType_id(String currencyTypeId) {
		currencyType_id = currencyTypeId;
	}

	public double getAmount() {
		return amount;
	}

	public void setAmount(double amount) {
		this.amount = amount;
	}

	public String getCreatetime() {
		return createtime;
	}

	public void setCreatetime(String createtime) {
		this.createtime = createtime;
	}

	public int getStatus() {
		return status;
	}

	public void setStatus(int status) {
		this.status = status;
	}
	
	
}
