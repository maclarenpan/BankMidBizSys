package com.maclaren.bank.staff.service.impl;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.maclaren.bank.staff.bean.Account;
import com.maclaren.bank.staff.dao.AccountDAO;
import com.maclaren.bank.staff.service.AccountService;
import com.maclaren.bank.util.Util;

@Service
public class AccountServiceImpl implements AccountService
{
	@Autowired
	private AccountDAO accountDao;
	
	public String queryAllAccount(String root) 
	{
		// TODO Auto-generated method stub
		return Util.buildExtJsonData(Util.list2Json(accountDao.getAllAccount()), 
		root);
	}
	

	public String getAccountByConditions(String bank_id, String accountType_id,
			String username, String root) {
		// TODO Auto-generated method stub
		List list = new ArrayList();
		Account account = new Account();
		account.setBank_id(bank_id);
		account.setAccountType_id(accountType_id);
		account.setUsername(username);
		list = accountDao.queryAccountByConditions(wrap(account));
		return  Util.buildExtJsonDataPaging(Util.list2Json(list), root, "success", "totalCount", list.size());
	}
	
	public String deleteAccount(Account account) 
	{
		// TODO Auto-generated method stub
		return Util.wrapRetMessage(accountDao.delete(account.getId()));
	}

	public String updateAccount(Account account) 
	{
		// TODO Auto-generated method stub
		return Util.wrapRetMessage(accountDao.update(wrap(account)));
	}

	public String insertAccount(Account account) {
		// TODO Auto-generated method stub
		return Util.wrapRetMessage(accountDao.insert(wrap(account)));
	}

	public String queryAllAccountType(String root) {
		// TODO Auto-generated method stub
		return Util.buildExtJsonData(Util.list2Json(accountDao.getAllAccountType()), 
		root);
	}
	public Map wrap(Account account)
	{
		Map map = new HashMap();
		map.put("id", account.getId());
		map.put("accountType_id", account.getAccountType_id());
		map.put("bank_id", account.getBank_id());
		map.put("username", account.getUsername());
		map.put("password", account.getPassword());
		map.put("modifytime", account.getModifytime());
		return map;
	}


	public String queryAccountCombo(String root) {
		// TODO Auto-generated method stub
		return Util.buildExtJsonData(Util.list2Json(accountDao.getAccountCombo()), 
				root);
	}

}
