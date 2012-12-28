package com.maclaren.bank.biz.proxy.bean;

public class ProxyUserAccountServiceWrap {
	private ProxyUserAccountService proxyUserAccountService;
	
	public void setData(ProxyUserAccountService proxyUserAccountSerice)
	{
		this.proxyUserAccountService = proxyUserAccountService;
	}
	
	public ProxyUserAccountService getData()
	{
		return proxyUserAccountService;
	}
}	
