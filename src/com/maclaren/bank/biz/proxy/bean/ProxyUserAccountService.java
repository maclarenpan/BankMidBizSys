package com.maclaren.bank.biz.proxy.bean;

public class ProxyUserAccountService {
	private String id;
	
	private String proxyUser_id;
	
	private String account_id;
	
	private String service_id;

	public String getId() {
		return id;
	}

	public String getProxyUser_id() {
		return proxyUser_id;
	}

	public String getAccount_id() {
		return account_id;
	}

	public String getService_id() {
		return service_id;
	}

	public void setId(String id) {
		this.id = id;
	}

	public void setProxyUser_id(String proxyUserId) {
		proxyUser_id = proxyUserId;
	}

	public void setAccount_id(String accountId) {
		account_id = accountId;
	}

	public void setService_id(String serviceId) {
		service_id = serviceId;
	}

}
