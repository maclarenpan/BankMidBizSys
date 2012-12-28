package com.maclaren.bank.staff.service;

import com.maclaren.bank.staff.bean.Account;

public interface AccountService 
{	
	public String queryAllAccount(String root);
	
	public String queryAccountCombo(String root);
	
	public String getAccountByConditions(String bank_id, String accountType_id, String username, String root);
	
	public String insertAccount(Account operator);
	
	public String updateAccount(Account operator);
	
	public String deleteAccount(Account operator);
	
	public String queryAllAccountType(String root);
	
}
