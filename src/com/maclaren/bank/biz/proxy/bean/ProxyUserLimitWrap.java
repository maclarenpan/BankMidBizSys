package com.maclaren.bank.biz.proxy.bean;
public class ProxyUserLimitWrap {
	private ProxyUserLimit proxyUserLimit;
	
	public void setData(ProxyUserLimit proxyUserLimit)
	{
		this.proxyUserLimit = proxyUserLimit;
	}
	
	public ProxyUserLimit getData()
	{
		return proxyUserLimit;
	}
}
