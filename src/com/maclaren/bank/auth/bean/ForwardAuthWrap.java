package com.maclaren.bank.auth.bean;

public class ForwardAuthWrap {
	private ForwardAuth forwardAuth;
	
	public void setData(ForwardAuth forwardAuth)
	{
		this.forwardAuth = forwardAuth;
	}
	
	public ForwardAuth getData()
	{
		return  forwardAuth;
	}
}
