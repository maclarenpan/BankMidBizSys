package com.maclaren.bank.login.web;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;

import com.maclaren.bank.login.bean.User;
import com.maclaren.bank.login.service.LoginService;
import com.maclaren.bank.staff.bean.Operator;
@Controller
public class LoginController 
{
	@Autowired
	private LoginService loginService;
	
	@RequestMapping(value="login/check.action", method=RequestMethod.POST)
	public String check(@RequestParam String username,@RequestParam String password,Model model,
			HttpServletRequest request) throws Exception
	{
		Operator operator = new Operator();
		operator.setUsername(username);
		operator.setPassword(password);
		operator = loginService.checkOperator(operator);
		if(null == operator) 
		{
			model.addAttribute("success", false);
			model.addAttribute("msg", "username or password is wrong!");
			return "/login/login3";
		}
		else 
		{
			request.getSession().setAttribute("currOperator", operator.getId());
			request.getSession().setAttribute("currOperatorName", operator.getUsername());
			//request.getSession().setAttribute(Constants.USER_INFO_SESSION, user);
			model.addAttribute("success", true);
		//			return "redirect:/login/view";//跳转链的用法
			return "/main/branch12/main12";
		}
	}

//	@RequestMapping(value="/login/view.action")
//	public @ResponseBody Map<String, ? extends Object> view()
//		throws Exception
//	{
//		try
//		{
//			List<User> user = loginService.getUserList();
//			return getMap(user);
//		}
//		catch(Exception e)
//		{
//			e.printStackTrace();
//			return getModelMapError("Error query data from DB.");
//		}
//	}
	/*
	@RequestMapping(value="/login/lead.action")
	public String lead() throws Exception
	{
		return "/main/main";
	}
	
	@RequestMapping(value="/login/view")
	public @ResponseBody String view(ModelMap modelMap) throws Exception
	{
		modelMap.put("users", loginService.view("users"));
		return (String) modelMap.get("users");
	}
	
//	@RequestMapping(value="/login/view.action")
//	public @ResponseBody Map<String, ? extends Object> view()
//		throws Exception
//	{
//		try
//		{
//			List<User> user = loginService.getUserList();
//			return getMap(user);
//		}
//		catch(Exception e)
//		{
//			e.printStackTrace();
//			return getModelMapError("Error query data from DB.");
//		}
//	}
	
	@RequestMapping(value="/login/create.action")
	public @ResponseBody Map<String, ? extends Object> create(@RequestParam Object data) 
		throws Exception
	{
		try
		{
			List<User> user = loginService.createUser(data);
			return getMap(user);
		}
		catch(Exception e)
		{
			return getModelMapError("Error create data to DB.");
		}
	}
	
	@RequestMapping(value="/login/update.action")
	public @ResponseBody Map<String, ? extends Object> update(@RequestParam Object data) 
		throws Exception
	{
		try
		{
			List<User> user = loginService.updateUser(data);
			return getMap(user);
		} 
		catch (Exception e) 
		{
			return getModelMapError("Error trying to update contact.");
		}
	}
	
	@RequestMapping(value="/login/delete.action")
	public @ResponseBody Map<String, ? extends Object> delete(@RequestParam Object data) 
		throws Exception
	{
		try
		{
			loginService.deleteUser(data);
			return getMap(null);
		} 
		catch (Exception e) 
		{
			return getModelMapError("Error delete data from DB.");
		}
	}
	*/
	
	private Map<String, Object> getMap(List<User> users)
	{
		Map<String, Object> map = new HashMap<String, Object>(3);
		map.put("total", map.size());
		map.put("users", users);
		map.put("success", true);
		
		return map;
	}
	
	private Map<String, Object> getModelMapError(String errorMsg)
	{
		Map<String, Object> map = new HashMap<String, Object>();
		map.put("message", errorMsg);
		map.put("success", false);
		return map;
	}
}
