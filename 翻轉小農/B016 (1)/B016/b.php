<!doctype html>
<html>
<head>
<meta charset="utf-8">
<title>無標題文件</title>
</head>

<body>
	<?php
	$db=new PDO('mysql:host=localhost;dbname=test;','root','');
	$db->exec("SET names utf8");
	$sql='insert into b(name,email,service,message) value (:name,:email,:service,:message)';
	$query=$db->prepare($sql);
	$query->bindParam('name',$_POST['name']);
	$query->bindParam('email',$_POST['email']);
	$query->bindParam('service',$_POST['service']);
	$query->bindParam('message',$_POST['message']);
	$query->execute();
	echo "<script>window.close();window.open('http://127.0.0.1/b2.php','_blank',config='menubar=no,statusbar=no,toolbar=no,resieable=no,top=100,left=300,width=800,height=500')</script>";
	?>
</body>
</html>