package com.maclaren.bank.staff.web;
import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import com.maclaren.bank.staff.bean.Account;
import com.maclaren.bank.staff.bean.AccountWrap;
import com.maclaren.bank.staff.service.AccountService;
@Controller
public class AccountController 
{
	@Autowired
	private AccountService accountService;
	
	@RequestMapping(value="acc/account", params="method=getAll")
	public @ResponseBody String getAllAccount(ModelMap modelMap) throws Exception
	{
		modelMap.put("accounts", accountService.queryAllAccount("accounts"));
		return (String) modelMap.get("accounts");
	}
	
	@RequestMapping(value="acc/accountCombo")
	public @ResponseBody String getAccountCombo(ModelMap modelMap) throws Exception
	{
		modelMap.put("accountCombos", accountService.queryAccountCombo("accountcombos"));
		return (String) modelMap.get("accountCombos");
	}
	
	@RequestMapping(value="acc/account", params="method=getByConditions")
	public @ResponseBody String getOperatorByConditions(@RequestParam String bank_id, @RequestParam String accountType_id,
			@RequestParam String username, ModelMap modelMap) throws Exception
	{
		modelMap.put("accounts", accountService.getAccountByConditions(bank_id, accountType_id, username, "accounts"));
		return (String)modelMap.get("accounts");
	}
	
	@RequestMapping(value="acc/accountTypeCombo")
	public @ResponseBody String getAccountTypeCombo(ModelMap modelMap) throws Exception
	{
		modelMap.put("accountTypeCombos", accountService.queryAllAccountType("accountTypeCombos"));
		return (String) modelMap.get("accountTypeCombos");
	}
	
	@RequestMapping(value="acc/accountType", params="method=getAll")
	public @ResponseBody String getAllAccountType(ModelMap modelMap) throws Exception
	{
		modelMap.put("accountType", accountService.queryAllAccountType("accountTypes"));
		return (String) modelMap.get("accountType");
	}
	
	@RequestMapping(value="acc/account", params="method=insert")
	public @ResponseBody String insertAccount(@RequestBody AccountWrap data,
			ModelMap modelMap) throws Exception
	{
		List<Account> list = new ArrayList<Account>();
		modelMap.put("accounts", accountService.insertAccount(data.getData()));
		return (String) modelMap.get("accounts");
	}
	
	@RequestMapping(value="acc/account", params="method=delete")
	public @ResponseBody String deleteAccount(@RequestBody AccountWrap data,
			ModelMap modelMap) throws Exception
	{
		List<Account> list = new ArrayList<Account>();
		modelMap.put("accounts", accountService.deleteAccount(data.getData()));
		return (String) modelMap.get("accounts");
	}
	
	@RequestMapping(value="acc/account", params="method=update")
	public @ResponseBody String updateAccount(@RequestBody AccountWrap data,
			ModelMap modelMap) throws Exception
	{
		List<Account> list = new ArrayList<Account>();
		modelMap.put("accounts", accountService.updateAccount(data.getData()));
		return (String) modelMap.get("accounts");
	}
	
	@RequestMapping(value="acc/accountType", params="method=insert")
	public @ResponseBody String insertAccountType(ModelMap modelMap) throws Exception
	{
		return null;
	}
	
	@RequestMapping(value="acc/accountType", params="method=delete")
	public @ResponseBody String deleteAccountType(ModelMap modelMap) throws Exception
	{
		return null;
	}
	
	@RequestMapping(value="acc/accountType", params="method=update")
	public @ResponseBody String updateAccountType(ModelMap modelMap) throws Exception
	{
		return null;
	}
}
