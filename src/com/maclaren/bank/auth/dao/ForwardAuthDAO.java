package com.maclaren.bank.auth.dao;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;

import com.ibatis.sqlmap.client.SqlMapClient;
import com.maclaren.bank.auth.bean.ForwardAuth;
public class ForwardAuthDAO 
{
	private SqlMapClient sqlMapClient;
	
	public void setSqlMapClient(SqlMapClient sqlMapClient)
	{
		this.sqlMapClient = sqlMapClient;
	}
	
	private static final Log log = LogFactory.getLog(ForwardAuthDAO.class);
	
	public List<ForwardAuth> getAllForwardAuth()
	{
		List<ForwardAuth> list = new ArrayList<ForwardAuth>();
		try
		{
			list = sqlMapClient.queryForList("queryAllForwardAuth");
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
	
	public List<ForwardAuth> getForwardAuthByConditions(Map map)
	{
		List<ForwardAuth> list = new ArrayList<ForwardAuth>();
		try
		{
			list = sqlMapClient.queryForList("queryAllForwardAuthByConditions", map);
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
	
	public String insertForwardAuth(Map map)
	{
		try
		{
			sqlMapClient.insert("insertForwardAuth", map);
			return "success";
		}
		catch(Exception e)
		{
			e.printStackTrace();
		}
		return "fail";
	}
	
	public String deleteForwardAuth(String id)
	{
		Map map = new HashMap();
		map.put("id", id);
		try
		{
			sqlMapClient.delete("deleteForwardAuth", map);
			return "success";
		}
		catch(Exception e)
		{
			e.printStackTrace();
			return "fail";
		}
	}
	
	public String updateForwardAuth(Map map)
	{
		try
		{
			sqlMapClient.update("updateForwardAuth", map);
			return "success";
		}
		catch(Exception e)
		{
			e.printStackTrace();
			return "fail";
		}
	}
}
