package com.maclaren.bank.biz.common.dao;
import java.util.ArrayList;
import java.util.List;

import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;

import com.ibatis.sqlmap.client.SqlMapClient;
import com.maclaren.bank.biz.common.bean.ServiceCombo;
public class BizDAO 
{
	private SqlMapClient sqlMapClient;

	public void setSqlMapClient(SqlMapClient sqlMapClient)
	{
		this.sqlMapClient = sqlMapClient;
	}
	
	private static final Log log = LogFactory.getLog(BizDAO.class);
	
	public List<ServiceCombo> getServiceCombo()
	{
		List<ServiceCombo> list = new ArrayList<ServiceCombo>();
		try
		{
			list = sqlMapClient.queryForList("getServiceCombo");
		}
		catch(Exception e)
		{
			e.printStackTrace();
		}
		return list;
	}
}
