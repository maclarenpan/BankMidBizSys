package com.maclaren.bank.schedule.service.impl;
import org.springframework.beans.factory.annotation.Autowired;

import com.maclaren.bank.biz.proxy.dao.ProxyDAO;
import com.maclaren.bank.schedule.service.CalFromInterBankTransJobService;
import com.maclaren.bank.util.Util;
public class CalFromInterBankTransJobServiceImpl implements CalFromInterBankTransJobService
{

	static long count = 0;
	
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
	
	public CalFromInterBankTransJobServiceImpl()
	{
		System.out.println("CalFromInterBankTransJobService job start.....");
	}
	//测试方法
	public void doFirst() {
		// TODO Auto-generated method stub
		count();		
	}
	private void count()
	{
		count++;
		System.out.print("Count+");
		System.out.println(count);
	}

	public int calculate() 
	{
		// TODO Auto-generated method stub
		proxyDao.calFromInterBankTrans();
		return 0;
	}
}
