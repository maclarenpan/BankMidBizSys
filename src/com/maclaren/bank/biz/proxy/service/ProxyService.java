package com.maclaren.bank.biz.proxy.service;
import com.maclaren.bank.biz.proxy.bean.ProxyUserAccountService;
import com.maclaren.bank.biz.proxy.bean.ProxyUserLimit;
import com.maclaren.bank.biz.proxy.bean.ProxyUserTypeLimit;

public interface ProxyService 
{	
	public int openProxyService();
	
	public int calProxyService();
	
	public String queryAllProxyUserLimit();
	
	public String queryProxyUserLimitByConditions(String proxyUserName, String root);
	
	public String  insertProxyUserLimit(ProxyUserLimit proxyUserLimit);
	
	public String updateProxyUserLimit(ProxyUserLimit proxyUserLimit);
	
	public String deleteProxyUserLimit(ProxyUserLimit proxyUserLimit);
	
	public String queryAllProxyUserTypeLimit();
	
	public String queryProxyUserTypeLimitByConditions(String proxyUserTypeName, String root);
	
	public String updateProxyUserTypeLimit(ProxyUserTypeLimit proxyUserTypeLimit);
	
	public String getAllProxyUserAccountService(String root);
	
	public String getProxyUserCombo(String root);
	
	public String getProxyClientCombo(String root);
	
	public String getProxyUserAccountServiceByConditions(String proxyUser_id, String account_id, String service_id, String root);
	
	public String insertProxyUserAccountService(ProxyUserAccountService proxyUserAccountService);
	
	public String updateProxyUserAccountService(ProxyUserAccountService proxyUserAccountService);
	
	public String deleteProxyUserAccountService(ProxyUserAccountService proxyUserAccountService);
	
	public String getAllProxyUserAccountAmount(String root);
	
	public String getProxyUserAccountAmountByConditions(String proxyUser_id, String root);
	
	public String getAllProxyClientAccountAmount(String root);
	
	public String getProxyClientAccountAmountByConditions(String proxyClient_id, String root);
}
