package com.maclaren.bank.biz.proxy.bean;

public class OrderProxyBargain {
	private String id;
	
	private String Service_id;
	
	private String guest_id;
	
	private String proxyUser_id;
	
	private String subbank_id;
	
	private Double amount;
	
	private String createtime;
	
	private String operator_id;
	
	private String currencyType_id;
	
	private String status;

	public String getId() {
		return id;
	}

	public String getService_id() {
		return Service_id;
	}

	public String getGuest_id() {
		return guest_id;
	}

	public String getProxyUser_id() {
		return proxyUser_id;
	}

	public String getSubbank_id() {
		return subbank_id;
	}

	public Double getAmount() {
		return amount;
	}

	public String getCreatetime() {
		return createtime;
	}

	public String getOperator_id() {
		return operator_id;
	}

	public String getCurrencyType_id() {
		return currencyType_id;
	}

	public String getStatus() {
		return status;
	}

	public void setId(String id) {
		this.id = id;
	}

	public void setService_id(String serviceId) {
		Service_id = serviceId;
	}

	public void setGuest_id(String guestId) {
		guest_id = guestId;
	}

	public void setProxyUser_id(String proxyUserId) {
		proxyUser_id = proxyUserId;
	}

	public void setSubbank_id(String subbankId) {
		subbank_id = subbankId;
	}

	public void setAmount(Double amount) {
		this.amount = amount;
	}

	public void setCreatetime(String createtime) {
		this.createtime = createtime;
	}

	public void setOperator_id(String operatorId) {
		operator_id = operatorId;
	}

	public void setCurrencyType_id(String currencyTypeId) {
		currencyType_id = currencyTypeId;
	}

	public void setStatus(String status) {
		this.status = status;
	}
	
	
}
