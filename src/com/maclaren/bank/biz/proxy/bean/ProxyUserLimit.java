package com.maclaren.bank.biz.proxy.bean;

public class ProxyUserLimit {
	private String id;
	
	private String proxyUser_id;
	
	private String proxyUserName;
	
	private float minAmount;
	
	private float maxAmount;

	public String getId() {
		return id;
	}

	public void setId(String id) {
		this.id = id;
	}

	public String getProxyUser_id() {
		return proxyUser_id;
	}

	public void setProxyUser_id(String proxyUserId) {
		proxyUser_id = proxyUserId;
	}

	public String getProxyUserName() {
		return proxyUserName;
	}

	public void setProxyUserName(String proxyUserName) {
		this.proxyUserName = proxyUserName;
	}

	public float getMinAmount() {
		return minAmount;
	}

	public void setMinAmount(float minAmount) {
		this.minAmount = minAmount;
	}

	public float getMaxAmount() {
		return maxAmount;
	}

	public void setMaxAmount(float maxAmount) {
		this.maxAmount = maxAmount;
	}
}
