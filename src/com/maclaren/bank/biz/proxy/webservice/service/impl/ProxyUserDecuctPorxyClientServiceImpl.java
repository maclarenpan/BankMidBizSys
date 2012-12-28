package com.maclaren.bank.biz.proxy.webservice.service.impl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import webservice.bean.TranObj;

import com.maclaren.bank.biz.proxy.dao.ProxyDAO;
import com.maclaren.bank.biz.proxy.webservice.service.ProxyUserDecuctPorxyClientService;
import com.maclaren.bank.util.Util;
@Service
public class ProxyUserDecuctPorxyClientServiceImpl 
	implements ProxyUserDecuctPorxyClientService
{
	private ProxyDAO proxyDao;
	
	@Autowired
	public void setProxyDao(ProxyDAO proxyDao)
	{
		this.proxyDao = proxyDao;
	}
	
	private  Util util;
	
	@Autowired
	public void setUtil(Util util)
	{
		this.util = util;
	}
	
	public void proxyUserDecuctPorxyClient(TranObj tranObj) {
		// TODO Auto-generated method stub
		//proxyDao.decuteProxyClient(tranObj);
		proxyDao.generateProxyServiceOrder(tranObj);
	}

}
