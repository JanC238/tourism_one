<?php
class Filesized{

    //获取文件夹大小 
	public function dir_size($dir) {     
		if (!preg_match('#/$#', $dir)){        
			$dir .= '/';     
		}    
		$totalsize = 0;    
		//调用文件列表    
		foreach ($this->get_file_list($dir) as $name) {
			$totalsize += (@is_dir($dir.$name) ? $this->dir_size("$dir$name/") : (int)@filesize($dir.$name));     
		}    
		return $totalsize; 
	}  
	//获取文件列表 
	public function get_file_list($path) {    
		$f = $d = array();     
		//获取所有文件    
		foreach ($this->get_all_files($path) as $name) {
			if (@is_dir($path.$name)) {
				$d[] = $name;         
			} else if (@is_file($path.$name)) {            
				$f[] = $name;         
			}    
		}     
		natcasesort($d);    
		natcasesort($f);     
		return array_merge($d, $f); 
	} 
	//获取所有文件 
	public function get_all_files($path) {     
		$list = array();     
		if (($hndl = @opendir($path)) === false) {        
			return $list;     
		}    
		while (($file=readdir($hndl)) !== false) { 
			if ($file != '.' && $file != '..') { 
				$list[] = $file;
			}
		}     
		closedir($hndl);    
		return $list; 
	} 
	//转换单位 
	public function setupSize($fileSize) {     
		$size = sprintf("%u", $fileSize);     
		if($size == 0) {
			return("0 Bytes");     
		}     
		$sizename = array(" Bytes", " KB", " MB", " GB", " TB", " PB", " EB", " ZB", " YB");    
		return round($size/pow(1024, ($i = floor(log($size, 1024)))), 2) . $sizename[$i]; 
	} 
	public function filezise($path){
		//目录 
		//$path = './';
		//显示文件列表 
		//print_r(get_file_list($path)).'<br>'; 
		//显示文件大小 
		//echo dir_size($path).'<br>';  
		//显示转换过单位的大小
		return $this->setupSize($this->dir_size($path));  
	}
}
?>