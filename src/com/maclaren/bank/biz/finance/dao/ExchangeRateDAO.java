package com.maclaren.bank.biz.finance.dao;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;

import com.ibatis.sqlmap.client.SqlMapClient;
import com.maclaren.bank.biz.finance.bean.ExchangeRate;
public class ExchangeRateDAO 
{
	private SqlMapClient sqlMapClient;

	public void setSqlMapClient(SqlMapClient sqlMapClient)
	{
		this.sqlMapClient = sqlMapClient;
	}
	
	private static final Log log = LogFactory.getLog(ExchangeRateDAO.class);
	
	public List<ExchangeRate> getAllExchangeRate()
	{
		List<ExchangeRate> list = new ArrayList<ExchangeRate>();
		try
		{
			list = sqlMapClient.queryForList("queryAllExchangeRate");
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
	
	public List<ExchangeRate> queryExchangeRateByConditions(String currencyType1_id, String currencyType2_id)
	{
		Map map = new HashMap();
		map.put("currencyType1_id", currencyType1_id);
		map.put("currencyType2_id", currencyType2_id);
		List<ExchangeRate> list = new ArrayList<ExchangeRate>();
		try
		{
			list = sqlMapClient.queryForList("queryExchangeRateByConditions", map);
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
			sqlMapClient.insert("addExchangeRate", map);
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
			sqlMapClient.insert("updateExchangeRate", map);
			return "success";
		}
		catch(Exception e)
		{
			e.printStackTrace();
			return "fail";
		}
	}
	
	public String delete(String id)
	{
		try
		{
			sqlMapClient.insert("delExchangeRate", id);
			return "success";
		}
		catch(Exception e)
		{
			e.printStackTrace();
			return "fail";
		}
	}
}
