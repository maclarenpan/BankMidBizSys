package com.maclaren.bank.orga.dao;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;

import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;

import com.ibatis.sqlmap.client.SqlMapClient;
import com.maclaren.bank.orga.bean.Subbank;
public class SubbankDAO 
{
	private SqlMapClient sqlMapClient;
	
	public void setSqlMapClient(SqlMapClient sqlMapClient)
	{
		this.sqlMapClient = sqlMapClient;
	}
	
	private static final Log log = LogFactory.getLog(SubbankDAO.class);
	
	public List<Subbank> getAllSubbank()
	{
		List<Subbank> list = new ArrayList<Subbank>();
		try
		{
			list = sqlMapClient.queryForList("queryAllSubbank");
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
	
	public List<Subbank> getBankCombo()
	{
		List<Subbank> list = new ArrayList<Subbank>();
		try
		{
			list = sqlMapClient.queryForList("queryBankCombo");
		}
		catch(Exception e)
		{
			e.printStackTrace();
		}
		return list;
	}

}
