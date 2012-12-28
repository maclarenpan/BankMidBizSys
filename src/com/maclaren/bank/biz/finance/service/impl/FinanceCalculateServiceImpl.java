package com.maclaren.bank.biz.finance.service.impl;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.maclaren.bank.report.bean.ServiceReport;
import com.maclaren.bank.biz.finance.dao.FinanceCalculateDAO;
import com.maclaren.bank.biz.finance.bean.ExchangeRate;
import com.maclaren.bank.biz.finance.service.FinanceCalculateService;
import com.maclaren.bank.util.Util;

@Service
public class FinanceCalculateServiceImpl implements FinanceCalculateService
{
	
	private FinanceCalculateDAO financeCalculateDao;
	
	@Autowired
	public void setFinanceCalculateDao(FinanceCalculateDAO financeCalculateDao)
	{
		this.financeCalculateDao = financeCalculateDao;
	}
	
	private  Util util;
	
	@Autowired
	public void setUtil(Util util)
	{
		this.util = util;
	}

	public int calculateFromInterBankTransfer(String startTime, String endTime) 
	{
		// TODO Auto-generated method stub
		
		return 0;
	}
	
	/**
	 * 根据货币类型1、货币类型2、货币类型1的金额，转换成货币类型2的金额
	 * @param currencyType1_id
	 * @param currencyType2_id
	 * @param currency1Amount
	 * @return
	 */
	public double currencyTransfer(String currencyType1_id, String currencyType2_id, 
			double currency1Amount)
	{
		double rate = 0.0;
		double ret = 0.0;
		try
		{
			rate = (Double) financeCalculateDao.queryRateByConditions(currencyType1_id, 
					currencyType2_id);
			ret = Util.currencyMul(currency1Amount, rate);
		}
		catch(Exception e)
		{
			e.printStackTrace();
		}
		return ret;
	}

	/**
	 * 取得代理客户需交费业务
	 */
	public double getProxyClientServicePay(String guest_id, String service_id, String subbank_id) {
		// TODO Auto-generated method stub
		return (Double) financeCalculateDao.getProxyClientPayService(guest_id, service_id, subbank_id);
	}


}
