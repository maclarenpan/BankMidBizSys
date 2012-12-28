package com.maclaren.bank.biz.proxy.bean;

public class ProxyUserTypeLimit {
	public String getId() {
		return id;
	}

	public void setId(String id) {
		this.id = id;
	}

	public String getProxyUserType_id() {
		return proxyUserType_id;
	}

	public void setProxyUserType_id(String proxyUserTypeId) {
		proxyUserType_id = proxyUserTypeId;
	}

	public String getProxyUserTypeName() {
		return proxyUserTypeName;
	}

	public void setProxyUserTypeName(String proxyUserTypeName) {
		this.proxyUserTypeName = proxyUserTypeName;
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

	private String id;
	
	private String proxyUserType_id;
	
	private String proxyUserTypeName;
	
	private float minAmount;
	
	private float maxAmount;
}
