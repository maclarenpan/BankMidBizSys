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
import com.maclaren.bank.staff.bean.Guest;
import com.maclaren.bank.staff.bean.GuestType;
public class GuestDAO 
{
	private SqlMapClient sqlMapClient;
	
	public void setSqlMapClient(SqlMapClient sqlMapClient)
	{
		this.sqlMapClient = sqlMapClient;
	}
	
	private static final Log log = LogFactory.getLog(GuestDAO.class);
	
	public List<Guest> getAllGuest()
	{
		List<Guest> list = new ArrayList<Guest>();
		try
		{
			list = sqlMapClient.queryForList("queryAllGuest");
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
	
	public List<GuestType> getAllGuestType()
	{
		List<GuestType> list = new ArrayList<GuestType>();
		try
		{
			list = sqlMapClient.queryForList("queryAllGuestType");
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
