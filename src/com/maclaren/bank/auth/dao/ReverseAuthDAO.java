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
import com.maclaren.bank.auth.bean.ReverseAuth;
public class ReverseAuthDAO 
{
	private SqlMapClient sqlMapClient;
	
	public void setSqlMapClient(SqlMapClient sqlMapClient)
	{
		this.sqlMapClient = sqlMapClient;
	}
	
	private static final Log log = LogFactory.getLog(ReverseAuthDAO.class);
	
	public List<ReverseAuth> getAllReverseAuth()
	{
		List<ReverseAuth> list = new ArrayList<ReverseAuth>();
		try
		{
			list = sqlMapClient.queryForList("queryAllReverseAuth");
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
	
	public List<ForwardAuth> getReverseAuthByConditions(Map map)
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
	
	public String insertReverseAuth(Map map)
	{
		try
		{
			sqlMapClient.insert("insertReverseAuth", map);
			return "success";
		}
		catch(Exception e)
		{
			e.printStackTrace();
		}
		return "fail";
	}
	
	public String deleteReverseAuth(String id)
	{
		Map map = new HashMap();
		map.put("id", id);
		try
		{
			sqlMapClient.delete("deleteReverseAuth", map);
			return "success";
		}
		catch(Exception e)
		{
			e.printStackTrace();
			return "fail";
		}
	}
	
	public String updateReverseAuth(Map map)
	{
		try
		{
			sqlMapClient.update("updateReverseAuth", map);
			return "success";
		}
		catch(Exception e)
		{
			e.printStackTrace();
			return "fail";
		}
	}
}
