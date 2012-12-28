package com.maclaren.bank.biz.proxy.bean;

public class ProxyClientAccountAmount {
	private String id;
	
	private String account_id;
	
	private String proxyClient_id;
	
	private String service_id;
	
	private String bank_id;
	
	private double amount;

	public String getId() {
		return id;
	}

	public String getAccount_id() {
		return account_id;
	}

	public String getProxyClient_id() {
		return proxyClient_id;
	}

	public String getService_id() {
		return service_id;
	}

	public double getAmount() {
		return amount;
	}

	public void setId(String id) {
		this.id = id;
	}

	public void setAccount_id(String accountId) {
		account_id = accountId;
	}

	public void setProxyClient_id(String proxyClientId) {
		proxyClient_id = proxyClientId;
	}

	public void setService_id(String serviceId) {
		service_id = serviceId;
	}

	public void setAmount(double amount) {
		this.amount = amount;
	}

	public String getBank_id() {
		return bank_id;
	}

	public void setBank_id(String bankId) {
		bank_id = bankId;
	}

	
}
