package com.maclaren.bank.biz.finance.service;

import com.maclaren.bank.biz.finance.bean.Yield;
public interface YieldService 
{	
	public String queryAllYield(String root);
	
	public String queryYieldByConditions(String bank_id, String service_id, String root);
	
	public String updateYield(Yield yield);
	
	public String delYield(Yield yeild);
	
	public String addYield(Yield yield);
	
	public String getAllBankTotalAmount(String root);
	
	public String getBankTotalAmountByConditions(String bank_id, String root);
	
}
