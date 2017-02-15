<?php
namespace Lsfb\Controller;
use Think\Controller;
class LoginController extends Controller {
    public function login(){
    	$size=D("Size");
    	$result=$size->sizefile();
    	if($result['num']==2){
    		
    	}else{
    		$this->display("login:login");
    	}
    }
}