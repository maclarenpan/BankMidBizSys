package com.maclaren.bank.biz.finance.service;

import com.maclaren.bank.biz.finance.bean.ExchangeRate;
public interface FinanceCalculateService 
{	
	public int calculateFromInterBankTransfer(String startTime, String endTime);
	
	public double currencyTransfer(String currencyType1_id, String currencyType2_id, 
			double currency1Amount);

	public double getProxyClientServicePay(String guest_id, String service_id, String subbank_id);
}
