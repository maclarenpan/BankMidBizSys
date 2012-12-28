package com.maclaren.bank.orga.bean;

public class Subbank 
{
	private String id;
	
	private String subbankName;
	
	private String subbankNo;
	
	private String address;
	
	private String parentBank_id;
	
	private String parentBankName;

	public String getId() {
		return id;
	}

	public void setId(String id) {
		this.id = id;
	}

	public String getSubbankName() {
		return subbankName;
	}

	public void setSubbankName(String subbankName) {
		this.subbankName = subbankName;
	}

	public String getSubbankNo() {
		return subbankNo;
	}

	public void setSubbankNo(String subbankNo) {
		this.subbankNo = subbankNo;
	}

	public String getAddress() {
		return address;
	}

	public void setAddress(String address) {
		this.address = address;
	}

	public String getParentBank_id() {
		return parentBank_id;
	}

	public void setParentBank_id(String parentBankId) {
		parentBank_id = parentBankId;
	}

	public String getParentBankName() {
		return parentBankName;
	}

	public void setParentBankName(String parentBankName) {
		this.parentBankName = parentBankName;
	}
	
	
}
