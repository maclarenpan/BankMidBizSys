package com.maclaren.bank.login.service.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.maclaren.bank.login.dao.UserDAO;
import com.maclaren.bank.login.service.LoginService;
import com.maclaren.bank.staff.bean.Operator;
import com.maclaren.bank.staff.dao.OperatorDAO;
import com.maclaren.bank.util.Util;

@Service
public class LoginServiceImpl implements LoginService
{
	@Autowired
	private UserDAO userDao;
	
	@Autowired
	private OperatorDAO operatorDao;
	
	@Autowired
	private Util util;
	
	public Operator checkOperator(Operator Operator) 
	{
		// TODO Auto-generated method stub
		Operator ret = new Operator();
		ret = operatorDao.checkOperator(Operator.getUsername(), Operator.getPassword());
		return ret;
	}	
	/*
	public List<User> createUser(Object data) {
		// TODO Auto-generated method stub
		List<User> newUsers = new ArrayList<User>();

		List<User> list = util.getUsersFromRequest(data);

		for (User user : list) 
		{
			newUsers.add(userDao.insertUser(user));
		}
		return newUsers;
	}

	public void deleteUser(Object data) 
	{
		// TODO Auto-generated method stub
		//it is an array - have to cast to array object
		if (data.toString().indexOf('[') > -1){
			
			List<Integer> userIds = util.getListIdFromJSON(data);
			
			for (Integer id : userIds)
			{
				User user = new User();
				user.setId(id);
				userDao.deleteUser(user);
			}
			
		} 
		else 
		{ //it is only one object - cast to object/bean
			
			Integer id = Integer.parseInt(data.toString());
			User user = new User();
			user.setId(id);
			userDao.deleteUser(user);
		}
	}
	
	public List<User> updateUser(Object data) 
	{
		// TODO Auto-generated method stub
		List<User> users = new ArrayList<User>();
		List<User> updateUsers = util.getUsersFromRequest(data);
		for (User user : updateUsers) 
		{
			users.add(userDao.insertUser(user));
		}
		return users;
	}

	public List<User> getUserList() 
	{
		// TODO Auto-generated method stub
		return userDao.queryUser();
	}
	
	public String view(String root)
	{
		String ret = "";
		try
		{
			ret = util.buildExtJsonData(util.list2Json(getUserList()), root);
		}
		catch(Exception e)
		{
			e.printStackTrace();
		}
		return ret;
	}
	*/
}
