package com.maclaren.bank.util;

public class Constants 
{
	public final static String  OPERATE_TYPE_ADD = "0";
	public final static String  OPERATE_TYPE_UPDATE = "1";
	public final static String  OPERATE_TYPE_DELETE = "2";
	
	public final static String  RESULT_FAILED = "0";
	public final static String  RESULT_SUCCESS = "1";

	//
	public final static int		 OPERATOR_ROLE_ADD_SUCC 		= 1;//操作员角色添加成功
	public final static int      OPERATOR_ROLE_ADD_FAIL         = 2;//操作员角色添加失败
	public final static int 	 OPERATOR_ROLE_DEL_SUCC 		= 3;//操作员角色删除成功
	public final static int      OPERATOR_ROLE_DEL_FAIL         = 4;//操作员角色删除失败
	public final static int      OPERATOR_ROLE_EXIST 			= 6;//操作员角色已存在
	public final static int      OPERATOR_USERTYPE_ADD_SUCC     = 7;//操作员用户类型添加成功
	public final static int		 OPERATOR_USERTYPE_ADD_FAIL     = 8;//操作员用户类型添加失败
	public final static int      OPERATOR_USERTYPE_UPDATE_SUCC  = 9;//操作员用户类型更新成功
	public final static int      OPERATOR_USERTYPE_UPDATE_FAIL  = 10;//操作员用户类型更新失败
	public final static int      OPERATOR_USERTYPE_DEL_SUCC     = 11;//操作员用户类型更新成功
	public final static int      OPERATOR_USERTYPE_DEL_FAIL     = 12;//操作员用户类型更新失败
	public final static int      OPERATOR_ACTIVE_SUCC           = 13;//操作员激活成功
	public final static int      OPERATOR_ACTIVE_FAIL           = 14;//操作员激活失败
	public final static int      OPERATOR_PASSIVATE_SUCC        = 15;//操作员钝化成功
	public final static int      OPERATOR_PASSIVATE_FAIL        = 16;//操作员敦化失败
	public final static int      OPERATOR_ROLE_UPDATE           = 17;//操作员更新
	public final static int      OPERATOR_ROLE_DEL              = 18;//操作员删除
	public final static int      OPERATOR_ROLE_ACTIVE           = 19;//操作员激活
	public final static int      OPERATOR_ROLE_PASSIVATE        = 20;//操作员钝化
	
	public final static int      ROLE_ADD_SUCC                  = 1;//添加角色成功
	public final static int      ROLE_ADD_FAIL                  = 2;//添加角色失败
	public final static int      ROLE_DEL_SUCC                  = 3;//删除角色成功
	public final static int      ROLE_DEL_FAIL                  = 4;//删除角色失败
	public final static int      ROLE_UPDATE_SUCC               = 5;//更新角色成功
	public final static int      ROLE_UPDATE_FAIL               = 6;//更新角色失败
	
	public final static int      ROLE_UPDATE         			= 1;//角色更新
	public final static int      ROLE_DEL                       = 2;//角色删除
	public final static int      ROLE_ADD                       = 3;//角色添加
	
	public final static int 	 AUTH_ADD                       = 1;//添加权限
	public final static int      AUTH_UPDATE	                = 2;//修改权限
	public final static int      AUTH_DEL                       = 3;//删除权限
	public final static int      AUTH_CUSTOMAUTH_METHODADD      = 1;//添加个性化权限
	public final static int      AUTH_CUSTOMAUTH_METHODDEL      = 2;//删除个性化权限
	public final static int      AUTH_REVERSEAUTH_METHODADD     = 3;//添加反向权限
	public final static int      AUTH_REVERSEAUTH_METHODDEL     = 4;//删除反向权限
	public final static int      AUTH_ADD_SUCC                  = 1;//添加权限成功
	public final static int      AUTH_ADD_FAIL                  = 2;//添加权限失败
	public final static int      AUTH_DEL_SUCC                  = 3;//删除权限成功
	public final static int      AUTH_DEL_FAIL                  = 4;//删除权限失败
	public final static int      AUTH_UPDATE_SUCC               = 5;//更新权限成功
	public final static int      AUTH_UPDATE_FAIL               = 6;//更新权限失败
	public final static int      AUTH_ROLE_UPDATE_SUCC          = 7;//更新角色权限成功
	public final static int      AUTH_ROLE_UPDATE_FAIL          = 8;//更新角色权限失败
	public final static int      AUTH_ROLE_DEL_SUCC             = 9;//删除角色权限成功
	public final static int      AUTH_ROLE_DEL_FAIL             = 10;//删除角色权限失败
	public final static int      AUTH_ROLE_EXIST_FAIL           = 11;//角色已有权限
	public final static int      AUTH_OPERATOR_CUSTOM_EXIST_FAIL= 12;//操作员个性化权限已存在
	public final static int      AUTH_OPERATOR_REVERSE_EXIST_FAIL=13;//操作员个性化权限已存在
	public final static int      AUTH_OPERATOR_CUSTOM_ADD_SUCC  = 14;//添加个性化权限成功
	public final static int      AUTH_OPERATOR_CUSTOM_ADD_FAIL  = 15;//添加个性化权限失败
	public final static int      AUTH_OPERATOR_CUSTOM_DEL_SUCC  = 16;//删除个性化权限成功
	public final static int      AUTH_OPERATOR_CUSTOM_DEL_FAIL  = 17;//删除个性化权限失败
	public final static int      AUTH_OPERATOR_REVERSE_ADD_SUCC = 18;//添加反向权限成功
	public final static int      AUTH_OPERATOR_REVERSE_ADD_FAIL = 19;//添加反向权限失败
	public final static int      AUTH_OPERATOR_REVERSE_DEL_SUCC = 20;//删除反向权限成功
	public final static int      AUTH_OPERATOR_REVERSE_DEL_FAIL = 21;//删除反向权限失败
	
	public final static int      FINANCE_EXCHANGERATE_ADD       = 1;//添加汇率
	public final static int      FINANCE_EXCHANGERATE_DEL		= 2;//删除汇率
	public final static int      FINANCE_EXCHANGERATE_UPDATE    = 3;//更新汇率
	public final static int      FINANCE_EXCHANGERATE_ADD_SUCC  = 4;//添加汇率成功
	public final static int      FINANCE_EXCHANGERATE_ADD_FAIL  = 5;//添加汇率失败
	public final static int      FINANCE_EXCHANGERATE_DEL_SUCC  = 4;//删除汇率成功
	public final static int      FINANCE_EXCHANGERATE_DEL_FAIL  = 5;//删除汇率失败
	public final static int      FINANCE_EXCHANGERATE_UPDATE_SUCC  = 4;//更新汇率成功
	public final static int      FINANCE_EXCHANGERATE_UPDATE_FAIL  = 5;//更新汇率失败
	
	public final static int      UNIT_ADD       = 1;//添加单位
	public final static int      UNIT_DEL		= 2;//删除单位
	public final static int      UNIT_UPDATE    = 3;//更新单位
	public final static int      UNIT_ADD_SUCC  = 4;//添加单位成功
	public final static int      UNIT_ADD_FAIL  = 5;//添加单位失败
	public final static int      UNIT_DEL_SUCC  = 4;//删除单位成功
	public final static int      UNIT_DEL_FAIL  = 5;//删除单位失败
	public final static int      UNIT_UPDATE_SUCC  = 4;//更新单位成功
	public final static int      UNIT_UPDATE_FAIL  = 5;//更新汇率失败
	
	public final static int      CURRENCYTYPE_ADD       = 1;//添加单位
	public final static int      CURRENCYTYPE_DEL		= 2;//删除单位
	public final static int      CURRENCYTYPE_UPDATE    = 3;//更新单位
	public final static int      CURRENCYTYPE_ADD_SUCC  = 4;//添加单位成功
	public final static int      CURRENCYTYPE_ADD_FAIL  = 5;//添加单位失败
	public final static int      CURRENCYTYPE_DEL_SUCC  = 4;//删除单位成功
	public final static int      CURRENCYTYPE_DEL_FAIL  = 5;//删除单位失败
	public final static int      CURRENCYTYPE_UPDATE_SUCC  = 4;//更新单位成功
	public final static int      CURRENCYTYPE_UPDATE_FAIL  = 5;//更新汇率失败
	
	public final static int      TRANSFER_TEMP_INTERBANK_ADD_SUCC      = 1;//跨行存款插入临时表成功
	public final static int      TRANSFER_TEMP_INTERBANK_ADD_FAIL      = 2;//跨行存款插入临时表成功
	public final static int      TRANSFER_TEMP_INTERBANK_DEL_SUCC      = 3;//跨行存款删除临时表成功
	public final static int      TRANSFER_TEMP_INTERBANK_DEL_FAIL      = 4;//跨行存款删除临时表成功
	
	public final static int	     PROXY_CAL                             = 1;//代理业务计算
	public final static int 	 PROXY_CAL_SUCC                        = 2;//代理业务计算成功
	public final static int      PROXY_CAL_FAIL						   = 3;//代理业务计算失败								

	
	
	public final static String USER_INFO_SESSION = "userSessionInfo";
}
