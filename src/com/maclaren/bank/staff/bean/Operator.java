package com.maclaren.bank.staff.bean;

public class Operator 
{
	private String id;
	
	private String username;
	
	private String password;
	
	private String userType_id;
	
	private String address;
	
	private String linker;
	
	private String linkerPhone;
	
	private String role_id;	
	
	private String status_id;
	
	private String createtime;

	public String getId() {
		return id;
	}

	public void setId(String id) {
		this.id = id;
	}

	public String getUsername() {
		return username;
	}

	public void setUsername(String username) {
		this.username = username;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public String getUserType_id() {
		return userType_id;
	}

	public void setUserType_id(String userTypeId) {
		userType_id = userTypeId;
	}

	public String getAddress() {
		return address;
	}

	public void setAddress(String address) {
		this.address = address;
	}

	public String getLinker() {
		return linker;
	}

	public void setLinker(String linker) {
		this.linker = linker;
	}

	public String getLinkerPhone() {
		return linkerPhone;
	}

	public void setLinkerPhone(String linkerPhone) {
		this.linkerPhone = linkerPhone;
	}

	public String getRole_id() {
		return role_id;
	}

	public void setRole_id(String roleId) {
		role_id = roleId;
	}

	public String getStatus_id() {
		return status_id;
	}

	public void setStatus_id(String statusId) {
		status_id = statusId;
	}

	public String getCreatetime() {
		return createtime;
	}

	public void setCreatetime(String createtime) {
		this.createtime = createtime;
	}
}
