package com.maclaren.bank.staff.service.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.maclaren.bank.staff.dao.ProxyUserDAO;
import com.maclaren.bank.staff.service.ProxyUserService;
import com.maclaren.bank.util.Util;

@Service
public class ProxyUserServiceImpl implements ProxyUserService
{
	
	private ProxyUserDAO proxyUserDao;
	
	@Autowired
	public void setProxyUserDao(ProxyUserDAO proxyUserDao)
	{
		this.proxyUserDao = proxyUserDao;
	}
	
	private  Util util;
	
	@Autowired
	public void setUtil(Util util)
	{
		this.util = util;
	}

	public String queryAllProxyUser() 
	{
		// TODO Auto-generated method stub
		return util.buildExtJsonData(util.list2Json(proxyUserDao.getAllProxyUser()), 
		"proxyUsers");
	}
	
	public String queryAllProxyUserType(String root)
	{
		return util.buildExtJsonData(util.list2Json(proxyUserDao.getAllProxyUserType()), 
		root);
	}
}
