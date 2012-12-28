package com.maclaren.bank.biz.finance.bean;
public class ExchangeRateWrap {
	private ExchangeRate exchangeRate;

	public void setData(ExchangeRate exchangeRate)
	{
		this.exchangeRate = exchangeRate;
	}
	
	public ExchangeRate getData()
	{
		return exchangeRate;
	}
}
