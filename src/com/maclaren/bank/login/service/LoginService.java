package com.maclaren.bank.login.service;
import com.maclaren.bank.staff.bean.Operator;

public interface LoginService 
{
	public Operator checkOperator(Operator operator);
	
	/*
	public List<User> getUserList();
	
	public List<User> createUser(Object data);
	
	public List<User> updateUser(Object data);
	
	public void deleteUser(Object data);
	
	public String view(String root);
	*/
}
