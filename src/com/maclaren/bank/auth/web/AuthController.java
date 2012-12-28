package com.maclaren.bank.auth.web;
import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import com.maclaren.bank.auth.bean.CustomAuth;
import com.maclaren.bank.auth.bean.CustomAuthWrap;
import com.maclaren.bank.auth.bean.ForwardAuth;
import com.maclaren.bank.auth.bean.ForwardAuthWrap;
import com.maclaren.bank.auth.bean.ReverseAuth;
import com.maclaren.bank.auth.bean.ReverseAuthWrap;
import com.maclaren.bank.auth.service.AuthService;
import com.maclaren.bank.auth.service.CustomAuthService;
import com.maclaren.bank.auth.service.ForwardAuthService;
import com.maclaren.bank.auth.service.ReverseAuthService;
import com.maclaren.bank.util.Constants;
@Controller
public class AuthController 
{
	@Autowired
	private AuthService authService;
	
	@Autowired
	private CustomAuthService customAuthService;
	
	@Autowired
	private ReverseAuthService reverseAuthService;
	
	@Autowired
	private ForwardAuthService forwardAuthService;
	
	@RequestMapping(value="auth/menuForwardAuthJudge")
	public @ResponseBody String getMenuForwardAuth(@RequestParam String operator,
			ModelMap modelMap) throws Exception
	{
		System.out.println("operator_id:" + operator);
		modelMap.put("menu_forwardauths", authService.getMenuForwardAuth(operator, "menu_forwardauths"));
		System.out.println(modelMap.get("menu_forwardauths"));
		return (String) modelMap.get("menu_forwardauths");
	}
	
	@RequestMapping(value="auth/menuReverseAuthJudge")
	public @ResponseBody String getMenuReverseAuth(@RequestParam String operator,
			ModelMap modelMap) throws Exception
	{
		modelMap.put("menu_reverseauths", authService.getMenuReverseAuth(operator, "menu_reverseauths"));
		System.out.println(modelMap.get("menu_reverseauths"));
		return (String) modelMap.get("menu_reverseauths");
	}
	
	@RequestMapping(value="auth/menuCustomAuthJudge")
	public @ResponseBody String getMenuCustomAuth(@RequestParam String operator,
			ModelMap modelMap) throws Exception
	{
		modelMap.put("menu_customauths", authService.getMenuCustomAuth(operator, "menu_customauths"));
		System.out.println(modelMap.get("menu_customauths"));
		return (String) modelMap.get("menu_customauths");
	}
	
	@RequestMapping(value="auth/auth", params="method=getAll")
	public @ResponseBody String getAllAuth(ModelMap modelMap) throws Exception
	{
		modelMap.put("auth", authService.queryAllAuth());
		return (String) modelMap.get("auth");
	}
	
	@RequestMapping(value="auth/authCombo")
	public @ResponseBody String getAuthCombo(ModelMap modelMap) throws Exception
	{
		modelMap.put("authCombos", authService.queryAuthCombo("authCombos"));
		return (String)modelMap.get("authCombos");
	}
	/*
	@RequestMapping(value="auth/customAuth", params="method=getAll")
	public @ResponseBody String getAllCustomAuth(ModelMap modelMap) throws Exception
	{
		modelMap.put("customAuth", customAuthService.queryAllCustomAuth());
		return (String) modelMap.get("customAuth");
	}
	*/
	
	/**
	 * 查询所有反向权限
	 * @param modelMap
	 * @return
	 * @throws Exception
	 */
	@RequestMapping(value="auth/reverseAuth", params="method=getAll")
	public @ResponseBody String getAllReverseAuth(ModelMap modelMap) throws Exception
	{
		modelMap.put("reverseAuth", reverseAuthService.queryAllReverseAuth("reverseauths"));
		return (String) modelMap.get("reverseAuth");
	}
	
	@RequestMapping(value="auth/reverseAuth", params="method=getByConditions")
	public @ResponseBody String getReverseAuthByConditions(@RequestParam String reverseAuth_id, @RequestParam String role_id,
			ModelMap modelMap) throws Exception
	{
		modelMap.put("reverseAuths", reverseAuthService.queryReverseAuthByConditions(role_id, reverseAuth_id, "reverseauths"));
		return (String) modelMap.get("reverseAuths");
	}
	
	
	@RequestMapping(value="auth/reverseAuth", params="method=insert")
	public @ResponseBody String insertReverseAuth(@RequestBody ReverseAuthWrap data,
			ModelMap modelMap) throws Exception
	{
		List<ReverseAuth> list = new ArrayList<ReverseAuth>();
		modelMap.put("reverseAuths", reverseAuthService.insertReverseAuth((data.getData())));
		return (String) modelMap.get("reverseAuths");
	}
	
	@RequestMapping(value="auth/reverseAuth", params="method=delete", method=RequestMethod.POST)
	public @ResponseBody String deleteReverseAuth(@RequestBody ReverseAuthWrap data, 
			ModelMap modelMap) throws Exception
	{
		List<ReverseAuth> list = new ArrayList<ReverseAuth>();
		modelMap.put("reverseAuths", reverseAuthService.deleteReverseAuth((data.getData())));
		return (String) modelMap.get("reverseAuths");
	}
	
	@RequestMapping(value="auth/reverseAuth", params="method=update", method=RequestMethod.POST)
	public @ResponseBody String updateReverseAuth(@RequestBody ReverseAuthWrap data,
			ModelMap modelMap) throws Exception
	{
		List<ReverseAuth> list = new ArrayList<ReverseAuth>();
		modelMap.put("reverseAuths", reverseAuthService.updateReverseAuth(data.getData()));
		return (String) modelMap.get("reverseAuths");
	}
	/**
	 * 查询所有正向权限
	 * @param modelMap
	 * @return
	 * @throws Exception
	 */
	@RequestMapping(value="auth/forwardAuth", params="method=getAll")
	public @ResponseBody String getAllForwardAuth(ModelMap modelMap) throws Exception
	{
		modelMap.put("forwardAuths", forwardAuthService.queryAllForwardAuth("forwardauths"));
		return (String) modelMap.get("forwardAuths");
	}
	
	@RequestMapping(value="auth/forwardAuth", params="method=getByConditions")
	public @ResponseBody String getForwardAuthByConditions(@RequestParam String forwardAuth_id, @RequestParam String role_id,
			ModelMap modelMap) throws Exception
	{
		modelMap.put("forwardAuths", forwardAuthService.queryForwardAuthByConditions(role_id, forwardAuth_id, "forwardauths"));
		return (String) modelMap.get("forwardAuths");
	}
	
	
	@RequestMapping(value="auth/forwardAuth", params="method=insert")
	public @ResponseBody String insertForwardAuth(@RequestBody ForwardAuthWrap data,
			ModelMap modelMap) throws Exception
	{
		List<ForwardAuth> list = new ArrayList<ForwardAuth>();
		modelMap.put("forwardAuths", forwardAuthService.insertForwardAuth((data.getData())));
		return (String) modelMap.get("forwardAuths");
	}
	
	@RequestMapping(value="auth/forwardAuth", params="method=delete", method=RequestMethod.POST)
	public @ResponseBody String deleteForwardAuth(@RequestBody ForwardAuthWrap data, 
			ModelMap modelMap) throws Exception
	{
		List<ForwardAuth> list = new ArrayList<ForwardAuth>();
		modelMap.put("forwardAuths", forwardAuthService.deleteForwardAuth((data.getData())));
		return (String) modelMap.get("forwardAuths");
	}
	
	@RequestMapping(value="auth/forwardAuth", params="method=update", method=RequestMethod.POST)
	public @ResponseBody String updateForwardAuth(@RequestBody ForwardAuthWrap data,
			ModelMap modelMap) throws Exception
	{
		List<ForwardAuth> list = new ArrayList<ForwardAuth>();
		modelMap.put("forwardAuths", forwardAuthService.updateForwardAuth(data.getData()));
		return (String) modelMap.get("forwardAuths");
	}
	
	
	/**
	 * 为角色添加权限
	 * @param role_id
	 * @param authIds
	 * @param modelMap
	 * @return
	 * @throws Exception
	 */
	@RequestMapping(value="auth/dealAuth2Role", params="method=add")
	public @ResponseBody Integer addAuth2Role(@RequestParam String role_id, 
			@RequestParam String authIds, ModelMap modelMap) throws Exception
	{
		modelMap.put("ret", authService.addAuth2Role(authIds, role_id));
		return (Integer) modelMap.get("ret");
	}
	
	/**
	 * 为角色删除权限
	 * @param role_id
	 * @param authIds
	 * @param modelMap
	 * @return
	 * @throws Exception
	 */
	@RequestMapping(value="auth/dealAuth2Role", params="method=del")
	public @ResponseBody Integer delAuth4Role(@RequestParam String role_id, 
			@RequestParam String authIds, ModelMap modelMap) throws Exception
	{
		modelMap.put("ret", authService.delAuth4Role(authIds, role_id));
		return (Integer) modelMap.get("ret");
	}
	
	/**
	 * 查询所有个性化权限
	 * @param modelMap
	 * @return
	 * @throws Exception
	 */
	@RequestMapping(value="auth/customAuth", params="method=getAll")
	public @ResponseBody String getAllCustomAuth(ModelMap modelMap) throws Exception
	{
		modelMap.put("customAuths", customAuthService.queryAllCustomAuth("customauths"));
		return (String) modelMap.get("customAuths");
	}
	
	@RequestMapping(value="auth/customAuth", params="method=getByConditions")
	public @ResponseBody String getCustomAuthByConditions(@RequestParam String auth_id, @RequestParam String operator_id,
			ModelMap modelMap) throws Exception
	{
		modelMap.put("customAuths", customAuthService.queryCustomAuthByConditions(auth_id, operator_id, "customauths"));
		return (String) modelMap.get("customAuths");
	}
	
	
	@RequestMapping(value="auth/customAuth", params="method=insert")
	public @ResponseBody String insertCustomAuth(@RequestBody CustomAuthWrap data,
			ModelMap modelMap) throws Exception
	{
		List<CustomAuth> list = new ArrayList<CustomAuth>();
		modelMap.put("customAuths", customAuthService.insertCustomAuth((data.getData())));
		return (String) modelMap.get("customAuths");
	}
	
	@RequestMapping(value="auth/customAuth", params="method=delete", method=RequestMethod.POST)
	public @ResponseBody String deleteCustomAuth(@RequestBody CustomAuthWrap data, 
			ModelMap modelMap) throws Exception
	{
		List<CustomAuth> list = new ArrayList<CustomAuth>();
		modelMap.put("customAuths", customAuthService.deleteCustomAuth((data.getData())));
		return (String) modelMap.get("customAuths");
	}
	
	@RequestMapping(value="auth/customAuth", params="method=update", method=RequestMethod.POST)
	public @ResponseBody String updateCustomAuth(@RequestBody CustomAuthWrap data,
			ModelMap modelMap) throws Exception
	{
		List<CustomAuth> list = new ArrayList<CustomAuth>();
		modelMap.put("customAuths", customAuthService.updateCustomAuth(data.getData()));
		return (String) modelMap.get("customAuths");
	}
	/////////////个性化权限
	
	/**
	 * 为操作员添加个性化权限
	 * @param operator_id
	 * @param authIds
	 * @param modelMap
	 * @return
	 * @throws Exception
	 */
	@RequestMapping(value="auth/dealAuth2Operator", params="method=addCustom")
	public @ResponseBody Integer addCustomAuth2Operator(@RequestParam String operator_id, 
			@RequestParam String authIds, ModelMap modelMap) throws Exception
	{
		modelMap.put("ret", authService.dealAuthOperator(authIds, operator_id, 
				Constants.AUTH_CUSTOMAUTH_METHODADD));
		return (Integer) modelMap.get("ret");
	}
	
	/**
	 * 为操作员删除个性化权限
	 * @param operator_id
	 * @param authIds
	 * @param modelMap
	 * @return
	 * @throws Exception
	 */
	@RequestMapping(value="auth/dealAuth2Operator", params="method=delCustom")
	public @ResponseBody Integer delCustomAuth4Operator(@RequestParam String operator_id, 
			@RequestParam String authIds, ModelMap modelMap) throws Exception
	{
		modelMap.put("ret", authService.dealAuthOperator(authIds, operator_id, 
				Constants.AUTH_CUSTOMAUTH_METHODDEL));
		return (Integer) modelMap.get("ret");
	}
	
	/**
	 * 为操作员添加反向向权限
	 * @param operator_id
	 * @param authIds
	 * @param modelMap
	 * @return
	 * @throws Exception
	 */
	@RequestMapping(value="auth/dealAuth2Operator", params="method=addReverse")
	public @ResponseBody Integer addReverseAuth2Operator(@RequestParam String operator_id, 
			@RequestParam String authIds, ModelMap modelMap) throws Exception
	{
		modelMap.put("ret", authService.dealAuthOperator(authIds, operator_id, 
				Constants.AUTH_REVERSEAUTH_METHODADD));
		return (Integer) modelMap.get("ret");
	}
	
	/**
	 * 为操作员删除反向权限
	 * @param operator_id
	 * @param authIds
	 * @param modelMap
	 * @return
	 * @throws Exception
	 */
	@RequestMapping(value="auth/dealAuth2Operator", params="method=delReverse")
	public @ResponseBody Integer delReverseAuth4Operator(@RequestParam String operator_id, 
			@RequestParam String authIds, ModelMap modelMap) throws Exception
	{
		modelMap.put("ret", authService.dealAuthOperator(authIds, operator_id, 
				Constants.AUTH_REVERSEAUTH_METHODDEL));
		return (Integer) modelMap.get("ret");
	}
	
}
