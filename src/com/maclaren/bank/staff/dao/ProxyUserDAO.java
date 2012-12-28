package com.maclaren.bank.staff.dao;
import java.util.Map;
import java.util.HashMap;
import java.util.ArrayList;
import java.util.List;
import java.sql.SQLException;
import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import com.ibatis.sqlmap.client.SqlMapClient;
import com.maclaren.bank.util.Util;
import com.maclaren.bank.staff.bean.ProxyUser;
import com.maclaren.bank.staff.bean.ProxyUserType;
public class ProxyUserDAO 
{
	private SqlMapClient sqlMapClient;
	
	public void setSqlMapClient(SqlMapClient sqlMapClient)
	{
		this.sqlMapClient = sqlMapClient;
	}
	
	private static final Log log = LogFactory.getLog(ProxyUserDAO.class);
	
	public List<ProxyUser> getAllProxyUser()
	{
		List<ProxyUser> list = new ArrayList<ProxyUser>();
		try
		{
			list = sqlMapClient.queryForList("queryAllProxyUser");
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
	
	public List<ProxyUserType> getAllProxyUserType()
	{
		List<ProxyUserType> list = new ArrayList<ProxyUserType>();
		try
		{
			list = sqlMapClient.queryForList("queryAllProxyUserType");
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
