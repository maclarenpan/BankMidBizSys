package com.maclaren.bank.util.dao;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;
import java.util.Map;

import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;

import com.ibatis.sqlmap.client.SqlMapClient;
import com.maclaren.bank.util.bean.Unit;
import com.maclaren.bank.util.bean.Unit2Unit;
public class UtilDAO 
{
	private SqlMapClient sqlMapClient;

	public void setSqlMapClient(SqlMapClient sqlMapClient)
	{
		this.sqlMapClient = sqlMapClient;
	}
	
	private static final Log log = LogFactory.getLog(UtilDAO.class);
	
	public List<Unit> queryAllUnit()
	{
		List<Unit> list = new ArrayList<Unit>();
		try
		{
			list = sqlMapClient.queryForList("queryAllUnit");
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
	
	public List<Unit> queryUnitByConditions(Map map)
	{
		List<Unit> list = new ArrayList<Unit>();
		try
		{
			list = sqlMapClient.queryForList("queryUnitByConditions", map);
		}
		catch(Exception e)
		{
			e.printStackTrace();
		}
		return list;
	}
	
	public String addUnit(Map map)
	{
		try
		{
			sqlMapClient.insert("addUnit", map);
			return "success";
		}
		catch(Exception e)
		{
			e.printStackTrace();
			return "fail";
		}
	}
	
	public String updateUnit(Map map)
	{
		try
		{
			sqlMapClient.update("updateUnit", map);
			return "success";
		}
		catch(Exception e)
		{
			e.printStackTrace();
			return "fail";
		}
	}
	
	public String delUnit(Map map)
	{
		try
		{
			sqlMapClient.delete("delUnit", map);
			return "success";
		}
		catch(Exception e)
		{
			e.printStackTrace();
			return "fail";
		}
	}
	
	public List<Unit2Unit> queryAllUnit2Unit()
	{
		List<Unit2Unit> list = new ArrayList<Unit2Unit>();
		try
		{
			list = sqlMapClient.queryForList("queryAllUnit2Unit");
		}
		catch(Exception e)
		{
			e.printStackTrace();
		}
		return list;
	}
	
	public List<Unit2Unit> queryUnit2UnitByConditions(Map map)
	{
		List<Unit2Unit> list = new ArrayList<Unit2Unit>();
		try
		{
			list = sqlMapClient.queryForList("queryUnit2UnitByConditions");
		}
		catch(Exception e)
		{
			e.printStackTrace();
		}
		return list;
	}
	
	public String addUnit2Unit(Map map)
	{
		try
		{
			sqlMapClient.insert("addUnit2Unit", map);
			return "success";
		}
		catch(Exception e)
		{
			e.printStackTrace();
			return "fail";
		}
	}
	
	public String updateUnit2Unit(Map map)
	{
		try
		{
			sqlMapClient.update("updateUnit2Unit", map);
			return "success";
		}
		catch(Exception e)
		{
			e.printStackTrace();
			return "fail";
		}
	}
	
	public String delUnit2Unit(Map map)
	{
		try
		{
			sqlMapClient.delete("delUnit2Unit", map);
			return "success";
		}
		catch(Exception e)
		{
			e.printStackTrace();
			return "fail";
		}
	}
}












