package com.maclaren.bank.login.dao;
import java.util.ArrayList;
import java.util.List;
import java.io.IOException;
import java.io.Reader;
import java.sql.SQLException;
import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import com.ibatis.common.resources.Resources;
import com.ibatis.sqlmap.client.SqlMapClient;
import com.ibatis.sqlmap.client.SqlMapClientBuilder;
import com.maclaren.bank.login.bean.User;

public class UserDAO
{
	private SqlMapClient sqlMapClient;
	
	private static final Log log = LogFactory.getLog(UserDAO.class);
	
	public void setSqlMapClient(SqlMapClient sqlMapClient)
	{
		this.sqlMapClient = sqlMapClient;
	}
	
//	void init()
//	{
//		try
//		{
//			Reader reader = Resources.getResourceAsReader("sqlMap-config.xml");
//			sqlMapClient = SqlMapClientBuilder.buildSqlMapClient(reader);
//			reader.close();
//		}
//		catch(IOException ioe)
//		{
//			throw new RuntimeException("Error happening in building sqlMapClient,info:" + ioe);
//		}
//	}
	
	public User checkUser(String username, String password)
	{
//		int size = 0;
//		User user = new User();
//		user.setUsername(username);
//		user.setPassword(password);
//		this.init();
//		try
//		{
//			if (null != sqlMap.queryForList("checkUser", user) && 
//					sqlMap.queryForList("checkUser", user).size() != 0)
//			{
//				return (User) sqlMap.queryForList("checkUser", user).get(0);
//			}
//		}
//		catch(SQLException e)
//		{
//			log.debug("Error in UserDAO.java:" +e);
//			e.printStackTrace();
//		}
//		return null;
		User user = new User();
		user.setUsername(username);
		user.setPassword(password);
		
		try
		{
			if (0 != sqlMapClient.queryForList("checkUser", user).size())
			{
				return (User) sqlMapClient.queryForList("checkUser", user).get(0);
			}
		}
		catch(SQLException sqle)
		{
			sqle.printStackTrace();
		}
		return null;
	}
	
	public List queryUser()
	{
		List list = null;
		try
		{
			list = sqlMapClient.queryForList("getAllUser");
		}
		catch(SQLException e)
		{
			e.printStackTrace();
		}
		return list;
	}
	
	public List queryUserByName(String username)
	{
		List list = null;
		try
		{
			list = sqlMapClient.queryForList("queryUserByName", username);
		}
		catch(SQLException e)
		{
			e.printStackTrace();
		}
		return list;
	}
	
	public User insertUser(User user)
	{
		try
		{
			sqlMapClient.insert("insertUser", user);
			return user;
		}
		catch(SQLException e)
		{
			e.printStackTrace();
			return null;
		}
	}
	
	public boolean updateUser(User user)
	{
		try
		{
			sqlMapClient.update("updateUser", user);
		}
		catch(SQLException e)
		{
			e.printStackTrace();
		}
		return true;
	}
	
	public boolean deleteUser(User user)
	{
		try
		{
			sqlMapClient.delete("deleteUser", user);
		}
		catch(SQLException e)
		{
			e.printStackTrace();
		}
		return true;
	}
}

























