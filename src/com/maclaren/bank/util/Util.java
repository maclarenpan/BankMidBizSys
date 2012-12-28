package com.maclaren.bank.util;


import java.math.BigDecimal;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import net.sf.json.JSONArray;
import net.sf.json.JSONObject;

import org.springframework.stereotype.Component;

import com.maclaren.bank.login.bean.User;

/**
 * Util class. Contains some common methods that can be used
 * for any class
 * 
 * @author Loiane Groner
 * http://loianegroner.com (English)
 * http://loiane.com (Portuguese)
 */
@Component
public class Util 
{
	
	private static final int DEF_DIV_SCALE                        = 10;//定义货币除法精度位数
	
	/**
	 * Get list of Users from request.
	 * @param data - json data from request 
	 * @return list of Users
	 */
	public static List<User> getUsersFromRequest(Object data){

		List<User> list;

		//it is an array - have to cast to array object
		if (data.toString().indexOf('[') > -1){

			list = getListUsersFromJSON(data);

		} else { //it is only one object - cast to object/bean

			User User = getUserFromJSON(data);

			list = new ArrayList<User>();
			list.add(User);
		}

		return list;
	}

	/**
	 * Transform json data format into User object
	 * @param data - json data from request
	 * @return 
	 */
	private static User getUserFromJSON(Object data){
		JSONObject jsonObject = JSONObject.fromObject(data);
		User newUser = (User) JSONObject.toBean(jsonObject, User.class);
		return newUser;
	}

	/**
	 * Transform json data format into list of User objects
	 * @param data - json data from request
	 * @return
	 */
	@SuppressWarnings("unchecked")
	private static List<User> getListUsersFromJSON(Object data){
		JSONArray jsonArray = JSONArray.fromObject(data);
		List<User> newUsers = (List<User>) JSONArray.toCollection(jsonArray,User.class);
		return newUsers;
	}

	/**
	 * Tranform array of numbers in json data format into
	 * list of Integer
	 * @param data - json data from request
	 * @return
	 */
	@SuppressWarnings("unchecked")
	public static List<Integer> getListIdFromJSON(Object data){
		JSONArray jsonArray = JSONArray.fromObject(data);
		List<Integer> idUsers = (List<Integer>) JSONArray.toCollection(jsonArray,Integer.class);
		return idUsers;
	}
	
	/**
	 * Tranform class to json
	 * @param data
	 * @return
	 */
	@SuppressWarnings("unchecked")
	public static String object2Json(Object data)
	{
		return JSONObject.fromObject(data).toString();
	}
	
	@SuppressWarnings("unchecked")
	public static String list2Json(List list)
	{
		return JSONArray.fromObject(list).toString();
	}
	
	@SuppressWarnings("unchecked")
	public static String buildExtJsonData(String json, String root)
	{
		if (!"".equals(json))
		{
			return "{\"" + root + "\":" + json +"}";
		}
		else
		{
			return "{\""+ root + "\":[]}";
		}
	}
	
	@SuppressWarnings("unchecked")
	public static String buildExtJsonDataNew(String json, String root, String message)
	{
		if (!"".equals(json))
		{
			return "{\"" + root + "\":" + json + ",\"message\":" + message + "}";
		}
		else
		{
			return "{\""+ root + "\":[],\"message\":[" + "There isn't data!" + "]}";
		}
	}
	
	@SuppressWarnings("checked")
	public static String buildExtJsonDataPaging(String json, String root, String message, String totalProperty, int size)
	{
		return "{\"" + message + "\":\"" + message + "\",\"" + totalProperty + "\":" + size + "," + "\"" + root + "\":" + json +"}";
	}
	
	@SuppressWarnings("unchecked")
	public static String wrapRetMessage(String message)
	{
		return "[{\"message\":\"" + message + "\"}]"; 
	}
	
	public static double currencyAdd(double v1, double v2)
	{
		BigDecimal b1 = new BigDecimal(Double.toString(v1));
		BigDecimal b2 = new BigDecimal(Double.toString(v2));
		return b1.add(b2).doubleValue();
	}
	
	public static double currencySub(double v1, double v2)
	{
		BigDecimal b1 = new BigDecimal(Double.toString(v1));
		BigDecimal b2 = new BigDecimal(Double.toString(v2));
		return b1.subtract(b2).doubleValue();
	}
	
	public static double currencyMul(double v1, double v2)
	{
		BigDecimal b1 = new BigDecimal(Double.toString(v1));
		BigDecimal b2 = new BigDecimal(Double.toString(v2));
		return b1.multiply(b2).doubleValue();
	}
	
	public static double currencyDiv(double v1, double v2)
	{
		return div(v1, v2, DEF_DIV_SCALE);
	}
	
	/**
	  * 
	  * 提供（相对）精确的除法运算。当发生除不尽的情况时，由scale参数指
	  * 
	  * 定精度，以后的数字四舍五入。
	  */
	 public static double div(double v1, double v2, int scale) 
	 {
		 if (scale < 0) 
		 {
			 throw new IllegalArgumentException("The scale must be a positive integer or zero");
		 }
		 BigDecimal b1 = new BigDecimal(Double.toString(v1));
		 BigDecimal b2 = new BigDecimal(Double.toString(v2));
		 return b1.divide(b2, scale, BigDecimal.ROUND_HALF_UP).doubleValue();
	 }

	 /**
	  * 提供精确的小数位四舍五入处理。
	  * 
	  * @param v
	  *            需要四舍五入的数字
	  * @param scale
	  *            小数点后保留几位
	  * @return 四舍五入后的结果
	  */
	 public static double round(double v, int scale) 
	 {

		 if (scale < 0) 
		 {
			 throw new IllegalArgumentException("The scale must be a positive integer or zero");
		 }
		 BigDecimal b = new BigDecimal(Double.toString(v));
		 BigDecimal one = new BigDecimal("1");
		 return b.divide(one, scale, BigDecimal.ROUND_HALF_UP).doubleValue();
	 }
	 
	 public static Map splitYYYYMMDD(String date)
	 {
		 Map<String, String> map = new HashMap<String, String>();
		 map.put("year", date.substring(0, 4));
		 map.put("month", date.substring(4, 6));
		 map.put("day", date.substring(6, 8));
		 return map;
	 }
	 
	/**
	* Generates modelMap to return in the modelAndView
	* @param contacts
	* @return
	*/
	public static Map<String,Object> mapOK(List list)
	{
		Map<String,Object> modelMap = new HashMap<String,Object>(3);
		modelMap.put("total", list.size());
		modelMap.put("data", list);
		modelMap.put("success", true);
		return modelMap;
	}
}