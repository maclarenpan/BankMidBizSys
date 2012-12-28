package com.maclaren.bank.auth.bean;

public class CustomAuthWrap {
	private CustomAuth customAuth;
	
	public void setData(CustomAuth customAuth)
	{
		this.customAuth = customAuth;
	}
	
	public CustomAuth getData()
	{
		return customAuth;
	}
}
