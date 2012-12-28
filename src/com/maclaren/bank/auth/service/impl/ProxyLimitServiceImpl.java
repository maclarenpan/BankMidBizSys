package com.maclaren.bank.auth.service.impl;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.maclaren.bank.auth.dao.ProxyLimitDAO;
import com.maclaren.bank.auth.service.ProxyLimitService;
import com.maclaren.bank.util.Util;

@Service
public class ProxyLimitServiceImpl implements ProxyLimitService
{
	
	private ProxyLimitDAO proxyLimitDao;
	
	@Autowired
	public void setProxyLimitDao(ProxyLimitDAO proxyLimitDao)
	{
		this.proxyLimitDao = proxyLimitDao;
	}
	
	private  Util util;
	
	@Autowired
	public void setUtil(Util util)
	{
		this.util = util;
	}

	public String queryAllProxyLimit() 
	{
		// TODO Auto-generated method stub
		return util.buildExtJsonData(util.list2Json(proxyLimitDao.getAllProxyLimit()), 
				"proxyLimit");
	}
}
