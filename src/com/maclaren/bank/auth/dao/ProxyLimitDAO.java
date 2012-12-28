package com.maclaren.bank.auth.dao;
import java.util.Map;
import java.util.HashMap;
import java.util.ArrayList;
import java.util.List;
import java.sql.SQLException;
import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import com.ibatis.sqlmap.client.SqlMapClient;
import com.maclaren.bank.util.Util;
import com.maclaren.bank.auth.bean.ProxyLimit;
public class ProxyLimitDAO 
{
	private SqlMapClient sqlMapClient;
	
	private static final Log log = LogFactory.getLog(ProxyLimitDAO.class);
	
	public void setSqlMapClient(SqlMapClient sqlMapClient)
	{
		this.sqlMapClient = sqlMapClient;
	}
	
	public List<ProxyLimit> getAllProxyLimit()
	{
		List<ProxyLimit> list = new ArrayList<ProxyLimit>();
		try
		{
			list = sqlMapClient.queryForList("queryAllProxyLimit");
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
