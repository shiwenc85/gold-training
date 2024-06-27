<!doctype html>
<html>
<head>
<meta charset="utf-8">
<title>無標題文件</title>
	<link rel="stylesheet" href="./css/table.css">
</head>

<body>
	<table width="650" border="0"><img src="./images/tit3.png" alt="">
		<tbody>
			<tr>
				<th>姓　　名</th>
				<th>電子信箱</th>
				<th>選擇項目</th>
				<th>備　　註</th>
			</tr>
		
	<?php
	$db=new PDO('mysql:host=localhost;dbname=test;','root','');
	$db->exec("SET names utf8");
	$sql='select * from b';
	$query=$db->prepare($sql);
	$query->execute();
	foreach($query as $row){
		echo "<tr><td>".$row['name']."</td><td>".$row['email']."</td><td>".$row['service']."</td><td>".$row['message']."</td></tr>";
	}
	?></tbody>
	</table>
</body>
</html>