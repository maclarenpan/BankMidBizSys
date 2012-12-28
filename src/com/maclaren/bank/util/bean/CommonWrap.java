package com.maclaren.bank.util.bean;

public class CommonWrap<T> 
{
	private T wrap;
	
	public void setWrap(T wrap)
	{
		this.wrap = wrap;
	}
	
	public Object getWrap()
	{
		return wrap;
	}
}
