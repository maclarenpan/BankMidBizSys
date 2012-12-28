package com.maclaren.bank.staff.service.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.maclaren.bank.staff.dao.GuestDAO;
import com.maclaren.bank.staff.service.GuestService;
import com.maclaren.bank.util.Util;

@Service
public class GuestServiceImpl implements GuestService
{
	
	private GuestDAO guestDao;
	
	@Autowired
	public void setGuestDao(GuestDAO guestDao)
	{
		this.guestDao = guestDao;
	}
	
	private  Util util;
	
	@Autowired
	public void setUtil(Util util)
	{
		this.util = util;
	}

	public String queryAllGuest() 
	{
		// TODO Auto-generated method stub
		return util.buildExtJsonData(util.list2Json(guestDao.getAllGuest()), 
		"guests");
	}
	
	public String queryAllGuestType(String root)
	{
		return util.buildExtJsonData(util.list2Json(guestDao.getAllGuestType()), 
		root);
	}
}
