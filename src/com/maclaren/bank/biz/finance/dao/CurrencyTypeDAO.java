package com.maclaren.bank.biz.finance.dao;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;

import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;

import com.ibatis.sqlmap.client.SqlMapClient;
import com.maclaren.bank.biz.finance.bean.CurrencyType;
import com.maclaren.bank.biz.finance.bean.CurrencyTypeCombo;
import com.maclaren.bank.util.Constants;
public class CurrencyTypeDAO 
{
	private SqlMapClient sqlMapClient;

	public void setSqlMapClient(SqlMapClient sqlMapClient)
	{
		this.sqlMapClient = sqlMapClient;
	}
	
	private static final Log log = LogFactory.getLog(CurrencyTypeDAO.class);
	
	public List<CurrencyType> getAllCurrencyType()
	{
		List<CurrencyType> list = new ArrayList<CurrencyType>();
		try
		{
			list = sqlMapClient.queryForList("queryAllCurrencyType");
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
	
	public int addCurrencyType(CurrencyType currencyType)
	{
		try
		{
			sqlMapClient.insert("addCurrencyType", currencyType);
			return Constants.CURRENCYTYPE_ADD_SUCC;
		}
		catch(Exception e)
		{
			e.printStackTrace();
			return Constants.CURRENCYTYPE_ADD_FAIL;
		}
	}
	
	public int updateCurrencyType(CurrencyType currencyType)
	{
		try
		{
			sqlMapClient.insert("updateCurrencyType", currencyType);
			return Constants.CURRENCYTYPE_UPDATE_SUCC;
		}
		catch(Exception e)
		{
			e.printStackTrace();
			return Constants.CURRENCYTYPE_UPDATE_FAIL;
		}
	}
	
	public int delCurrencyType(CurrencyType currencyType)
	{
		try
		{
			sqlMapClient.insert("delCurrencyType", currencyType);
			return Constants.CURRENCYTYPE_DEL_SUCC;
		}
		catch(Exception e)
		{
			e.printStackTrace();
			return Constants.CURRENCYTYPE_DEL_FAIL;
		}
	}
	
	public List<CurrencyTypeCombo> getCurrencyTypeCombo()
	{
		List<CurrencyTypeCombo> list = new ArrayList<CurrencyTypeCombo>();
		try
		{
			list = sqlMapClient.queryForList("getCurrencyTypeCombo");
		}
		catch(Exception e)
		{
			e.printStackTrace();
		}
		return list;
	}
}
