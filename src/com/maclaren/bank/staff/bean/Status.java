package com.maclaren.bank.staff.bean;

public class Status 
{
	public String getStatus_id() {
		return status_id;
	}

	public String getStatusName() {
		return statusName;
	}

	public void setStatus_id(String statusId) {
		status_id = statusId;
	}

	public void setStatusName(String statusName) {
		this.statusName = statusName;
	}

	private String status_id;
	
	private String statusName;
	
}
