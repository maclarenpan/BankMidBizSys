package com.maclaren.bank.biz.finance.service.impl;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.maclaren.bank.biz.finance.bean.ExchangeRate;
import com.maclaren.bank.biz.finance.dao.ExchangeRateDAO;
import com.maclaren.bank.biz.finance.service.ExchangeRateService;
import com.maclaren.bank.util.Util;

@Service
public class ExchangeRateServiceImpl implements ExchangeRateService
{
	
	private ExchangeRateDAO exchangeRateDao;
	
	@Autowired
	public void setExchangeRateDao(ExchangeRateDAO exchangeRateDao)
	{
		this.exchangeRateDao = exchangeRateDao;
	}
	

	public String insert(ExchangeRate exchangeRate) {
		// TODO Auto-generated method stub
		return Util.wrapRetMessage(exchangeRateDao.insert(wrap(exchangeRate)));
	}

	public String delete(ExchangeRate exchangeRate) {
		// TODO Auto-generated method stub
		return exchangeRateDao.delete(exchangeRate.getId());
	}

	public String queryAllExchangeRate(String root) {
		// TODO Auto-generated method stub
		return Util.buildExtJsonData(
				Util.list2Json(exchangeRateDao.getAllExchangeRate()), root);
	}

	public String update(ExchangeRate exchangeRate) {
		// TODO Auto-generated method stub
		return exchangeRateDao.update(wrap(exchangeRate));
	}

	public String queryExchangeRateByConditions(String currencyType1_id,
			String currencyType2_id, String root) 
	{
		// TODO Auto-generated method stub
		List list = new ArrayList();
		list = exchangeRateDao.queryExchangeRateByConditions(currencyType1_id, currencyType2_id);
		return Util.buildExtJsonDataPaging(Util.list2Json(list), root, "success", "totalCount", list.size());
	}
	
	public Map wrap(ExchangeRate exchangeRate)
	{
		Map map = new HashMap();
		map.put("currencyType1_id", exchangeRate.getCurrencyType1_id());
		map.put("currencyType2_id", exchangeRate.getCurrencyType2_id());
		map.put("rate", exchangeRate.getRate());
		return map;
	}
}
