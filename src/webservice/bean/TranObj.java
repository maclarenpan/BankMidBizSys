package webservice.bean;

import java.io.Serializable;

public class TranObj implements Serializable{
	private static final long serialVersionUID = 1L;
	
	private int guest_id;
	
	private int subbank_id;
	
	private int service_id;
	
	private double shouldPay;
	
	private int operator_id;
	
	private int proxyUser_id;
	
	private int currencyType_id;

	public int getGuest_id() {
		return guest_id;
	}

	public int getSubbank_id() {
		return subbank_id;
	}

	public int getService_id() {
		return service_id;
	}

	public double getShouldPay() {
		return shouldPay;
	}

	public int getOperator_id() {
		return operator_id;
	}

	public int getProxyUser_id() {
		return proxyUser_id;
	}

	public void setGuest_id(int guestId) {
		guest_id = guestId;
	}

	public void setSubbank_id(int subbankId) {
		subbank_id = subbankId;
	}

	public void setService_id(int serviceId) {
		service_id = serviceId;
	}

	public void setShouldPay(double shouldPay) {
		this.shouldPay = shouldPay;
	}

	public void setOperator_id(int operatorId) {
		operator_id = operatorId;
	}

	public void setProxyUser_id(int proxyUserId) {
		proxyUser_id = proxyUserId;
	}

	public int getCurrencyType_id() {
		return currencyType_id;
	}

	public void setCurrencyType_id(int currencyTypeId) {
		currencyType_id = currencyTypeId;
	}

}
