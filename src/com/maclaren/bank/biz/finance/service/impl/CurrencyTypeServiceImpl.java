package com.maclaren.bank.biz.finance.service.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.maclaren.bank.biz.finance.dao.CurrencyTypeDAO;
import com.maclaren.bank.biz.finance.service.CurrencyTypeService;
import com.maclaren.bank.util.Util;

@Service
public class CurrencyTypeServiceImpl implements CurrencyTypeService
{
	
	private CurrencyTypeDAO currencyTypeDao;
	
	@Autowired
	public void setCurrencyTypeDao(CurrencyTypeDAO currencyTypeDao)
	{
		this.currencyTypeDao = currencyTypeDao;
	}

	public String getCurrencyTypeCombo(String root) {
		String str = Util.buildExtJsonData(Util.list2Json(currencyTypeDao.getCurrencyTypeCombo()), root);
		return str;
	}
	
	
}
