package com.maclaren.bank.staff.web;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import com.maclaren.bank.staff.service.GuestService;
@Controller
public class GuestController 
{
	@Autowired
	private GuestService guestService;
	
	@RequestMapping(value="staff/guest", params="method=getAll")
	public @ResponseBody String getAllGuest(ModelMap modelMap) throws Exception
	{
		modelMap.put("guests", guestService.queryAllGuest());
		return (String) modelMap.get("guests");
	}
	
	@RequestMapping(value="staff/guestTypeCombo")
	public @ResponseBody String getGuestTypeCombo(ModelMap modelMap) throws Exception
	{
		modelMap.put("guestTypeCombos", guestService.queryAllGuestType("guesttypecombos"));
		return (String) modelMap.get("guestTypeCombos");
	}
	
	@RequestMapping(value="staff/guestType", params="method=getAll")
	public @ResponseBody String getAllGuestType(ModelMap modelMap) throws Exception
	{
		modelMap.put("guestType", guestService.queryAllGuestType("guestType"));
		return (String) modelMap.get("guestType");
	}
	
	@RequestMapping(value="staff/guest", params="method=insert", method=RequestMethod.POST)
	public @ResponseBody void insert(@RequestParam String username, @RequestParam String userType_id,
			@RequestParam String role_id, @RequestParam String status, @RequestParam String startTime, 
			@RequestParam String endTime, ModelMap modelMap) throws Exception
	{

	}
	
	@RequestMapping(value="staff/guset", params="method=delete", method=RequestMethod.POST)
	public @ResponseBody void delete(@RequestParam String username, @RequestParam String userType_id,
			@RequestParam String role_id, @RequestParam String status, @RequestParam String startTime, 
			@RequestParam String endTime, ModelMap modelMap) throws Exception
	{

	}
	
	@RequestMapping(value="staff/guest", params="method=update", method=RequestMethod.POST)
	public @ResponseBody void update(@RequestParam String username, @RequestParam String userType_id,
			@RequestParam String role_id, @RequestParam String status, @RequestParam String startTime, 
			@RequestParam String endTime, ModelMap modelMap) throws Exception
	{

	}
}
