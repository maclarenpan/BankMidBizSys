package com.maclaren.bank.biz.transfer.dao;
import java.util.Map;
import java.util.HashMap;
import java.util.ArrayList;
import java.util.List;
import java.sql.SQLException;
import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import com.ibatis.sqlmap.client.SqlMapClient;
import com.maclaren.bank.util.Constants;
import com.maclaren.bank.util.Util;
import com.maclaren.bank.biz.transfer.bean.InterBankTransfer;
public class InterBankTransferDAO 
{
	private SqlMapClient sqlMapClient;
	
	public void setSqlMapClient(SqlMapClient sqlMapClient)
	{
		this.sqlMapClient = sqlMapClient;
	}
	
	private static final Log log = LogFactory.getLog(InterBankTransferDAO.class);
	
	public List<InterBankTransfer> getAllInterBankTransfer()
	{
		List<InterBankTransfer> list = new ArrayList<InterBankTransfer>();
		try
		{
			list = sqlMapClient.queryForList("queryAllinterBankTransfer");
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
	
	public int addInterBankTransfer(InterBankTransfer interBankTransfer)
	{
		try
		{
			sqlMapClient.insert("addInterBankTransfer", interBankTransfer);
			return Constants.TRANSFER_TEMP_INTERBANK_ADD_SUCC;
		}
		catch(Exception e)
		{
			e.printStackTrace();
			return Constants.TRANSFER_TEMP_INTERBANK_ADD_FAIL;
		}		
	}
	
	public int delInterBankTransfer(InterBankTransfer interBankTransfer)
	{
		try
		{
			sqlMapClient.insert("delInterBankTransfer", interBankTransfer);
			return Constants.TRANSFER_TEMP_INTERBANK_DEL_SUCC;
		}
		catch(Exception e)
		{
			e.printStackTrace();
			return Constants.TRANSFER_TEMP_INTERBANK_DEL_FAIL;
		}	
	}
}
