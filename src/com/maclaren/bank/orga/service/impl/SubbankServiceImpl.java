package com.maclaren.bank.orga.service.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.maclaren.bank.orga.dao.SubbankDAO;
import com.maclaren.bank.orga.service.SubbankService;
import com.maclaren.bank.util.Util;

@Service
public class SubbankServiceImpl implements SubbankService
{
	
	private SubbankDAO subbankDao;
	
	@Autowired
	public void setSubbankDao(SubbankDAO subbankDao)
	{
		this.subbankDao = subbankDao;
	}

	public String queryAllSubbank() 
	{
		// TODO Auto-generated method stub
		return Util.buildExtJsonData(Util.list2Json(subbankDao.getAllSubbank()), 
				"subbank");
	}

	public String queryBankCombo(String root) {
		// TODO Auto-generated method stub
		return Util.buildExtJsonData(Util.list2Json(subbankDao.getBankCombo()), root);
	}
}
