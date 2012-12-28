package com.maclaren.bank.auth.bean;

public class ReverseAuthWrap {
	private ReverseAuth reverseAuth;
	
	public void setData(ReverseAuth reverseAuth)
	{
		this.reverseAuth = reverseAuth;
	}
	
	public ReverseAuth getData()
	{
		return reverseAuth;
	}
}
