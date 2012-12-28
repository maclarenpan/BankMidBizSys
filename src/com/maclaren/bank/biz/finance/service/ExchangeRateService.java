package com.maclaren.bank.biz.finance.service;

import com.maclaren.bank.biz.finance.bean.ExchangeRate;
public interface ExchangeRateService 
{	
	public String queryAllExchangeRate(String root);
	
	public String queryExchangeRateByConditions(String currencyType1_id, String currencyType2_id, String root);
	
	public String update(ExchangeRate exchangRate);
	
	public String delete(ExchangeRate exchangeRate);
	
	public String insert(ExchangeRate exchangRate);
	
}
