package com.maclaren.bank.staff.dao;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;
import java.util.Map;

import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;

import com.ibatis.sqlmap.client.SqlMapClient;
import com.maclaren.bank.staff.bean.Account;
import com.maclaren.bank.staff.bean.AccountCombo;
import com.maclaren.bank.staff.bean.AccountType;
public class AccountDAO 
{
	private SqlMapClient sqlMapClient;
	
	public void setSqlMapClient(SqlMapClient sqlMapClient)
	{
		this.sqlMapClient = sqlMapClient;
	}
	
	private static final Log log = LogFactory.getLog(AccountDAO.class);
	
	public List<Account> getAllAccount()
	{
		List<Account> list = new ArrayList<Account>();
		try
		{
			list = sqlMapClient.queryForList("queryAllAccount");
		}
		catch(SQLException sqle)
		{
			sqle.printStackTrace();
		}
		catch(Exception e)
		{
			e.printStackTrace();
		}
		return list;
	}
	
	public List<AccountCombo> getAccountCombo()
	{
		List<AccountCombo> list = new ArrayList<AccountCombo>();
		try
		{
			list = sqlMapClient.queryForList("queryAccountCombo");
		}
		catch(SQLException sqle)
		{
			sqle.printStackTrace();
		}
		catch(Exception e)
		{
			e.printStackTrace();
		}
		return list;
	}
	
	public List<Account> queryAccountByConditions(Map map)
	{
		List<Account> list = new ArrayList<Account>();
		try
		{
			list = sqlMapClient.queryForList("queryAccountByConditions", map);
		}
		catch(SQLException sqle)
		{
			sqle.printStackTrace();
			
		}
		catch(Exception e)
		{
			e.printStackTrace();
		}
		return list;
	}
	
	public String insert(Map map)
	{
		try
		{
			sqlMapClient.insert("insertAccount", map);
			return "success";
		}
		catch(Exception e)
		{
			e.printStackTrace();
		}
		return "fail";
	}
	
	public String delete(String id)
	{
		try
		{
			sqlMapClient.delete("deleteAccount", id);
			return "success";
		}
		catch(Exception e)
		{
			e.printStackTrace();
			return "fail";
		}
	}
	
	public String update(Map map)
	{
		try
		{
			sqlMapClient.update("updateAccount", map);
			return "success";
		}
		catch(Exception e)
		{
			e.printStackTrace();
			return "fail";
		}
	}
	
	public List<AccountType> getAllAccountType()
	{
		List<AccountType> list = new ArrayList<AccountType>();
		try
		{
			list = sqlMapClient.queryForList("queryAllAccountType");
		}
		catch(SQLException sqle)
		{
			sqle.printStackTrace();
		}
		catch(Exception e)
		{
			e.printStackTrace();
		}
		return list;
	}
}
