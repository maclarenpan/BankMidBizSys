package com.maclaren.bank.auth.dao;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;
import java.util.Map;

import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;

import com.ibatis.sqlmap.client.SqlMapClient;
import com.maclaren.bank.auth.bean.CustomAuth;
public class CustomAuthDAO 
{
	private SqlMapClient sqlMapClient;
	
	public void setSqlMapClient(SqlMapClient sqlMapClient)
	{
		this.sqlMapClient = sqlMapClient;
	}
	
	private static final Log log = LogFactory.getLog(CustomAuthDAO.class);
	
	public List<CustomAuth> getAllCustomAuth()
	{
		List<CustomAuth> list = new ArrayList<CustomAuth>();
		try
		{
			list = sqlMapClient.queryForList("queryAllCustomAuth");
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
	
	public List<CustomAuth> queryCustomAuthByConditions(Map map)
	{
		List<CustomAuth> list = new ArrayList<CustomAuth>();
		try
		{
			list = sqlMapClient.queryForList("queryCustomAuthByConditions", map);
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
	
	public String insertCustomAuth(Map map)
	{
		try
		{
			sqlMapClient.insert("insertCustomAuth", map);
			return "success";
		}
		catch(Exception e)
		{
			e.printStackTrace();
		}
		return "fail";
	}
	
	public String deleteCustomAuth(String id)
	{
		try
		{
			sqlMapClient.delete("deleteCustomAuth", id);
			return "success";
		}
		catch(Exception e)
		{
			e.printStackTrace();
			return "fail";
		}
	}
	
	public String updateCustomAuth(Map map)
	{
		try
		{
			sqlMapClient.update("updateCustomAuth", map);
			return "success";
		}
		catch(Exception e)
		{
			e.printStackTrace();
			return "fail";
		}
	}
}
