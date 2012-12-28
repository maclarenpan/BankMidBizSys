package com.maclaren.bank.biz.finance.dao;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;

import com.ibatis.sqlmap.client.SqlMapClient;
import com.maclaren.bank.biz.finance.bean.BankTotalAmount;
import com.maclaren.bank.biz.finance.bean.Yield;
public class YieldDAO 
{
	private SqlMapClient sqlMapClient;

	public void setSqlMapClient(SqlMapClient sqlMapClient)
	{
		this.sqlMapClient = sqlMapClient;
	}
	
	private static final Log log = LogFactory.getLog(YieldDAO.class);
	
	public List<Yield> getAllYield()
	{
		List<Yield> list = new ArrayList<Yield>();
		try
		{
			list = sqlMapClient.queryForList("queryAllYield");
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
	
	public List<Yield> queryYieldByConditions(Map map)
	{
		List<Yield> list = new ArrayList<Yield>();
		try
		{
			list = sqlMapClient.queryForList("queryYieldByConditions", map);
		}
		catch(Exception e)
		{
			e.printStackTrace();
		}
		return list;
	}
	
	public String addYield(Map map)
	{
		try
		{
			sqlMapClient.insert("addYield", map);
			return "success";
		}
		catch(Exception e)
		{
			e.printStackTrace();
			return "fail";
		}
	}
	
	public String updateYield(Map map)
	{
		try
		{
			sqlMapClient.insert("updateYield", map);
			return "success";
		}
		catch(Exception e)
		{
			e.printStackTrace();
			return "fail";
		}
	}
	
	public String delYield(String id)
	{
		try
		{
			sqlMapClient.delete("delYield", id);
			return "success";
		}
		catch(Exception e)
		{
			e.printStackTrace();
			return "fail";
		}
	}
	
	public List<BankTotalAmount> getAllBankTotalAmount()
	{
		List<BankTotalAmount> list = new ArrayList<BankTotalAmount>();
		try
		{
			list = sqlMapClient.queryForList("getAllBankTotalAmount");
		}
		catch(Exception e)
		{
			e.printStackTrace();
		}
		return list;
	}
	
	
	public List<BankTotalAmount> getBankTotalAmountByConditions(String bank_id)
	{
		List<BankTotalAmount> list = new ArrayList<BankTotalAmount>();
		Map map = new HashMap();
		map.put("bank_id", bank_id);
		try
		{
			list = sqlMapClient.queryForList("getBankTotalAmountByConditions", map);
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
