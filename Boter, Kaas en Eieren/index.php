<html>
<head> 
	<title>Boter, kaas en eieren. Gemaakt door minibois</title>
	<script src="Scripting.js"></script>
	<link href="style.css" rel="stylesheet" type="text/css" />
	<link href='https://fonts.googleapis.com/css?family=Nunito:400,700' rel='stylesheet' type='text/css'>
</head>

<body>
<p>Boter, kaas, eieren</p>

<div id="Table">
<table style="width:75px">
	<tr>
		<td><button type="button" onClick="ChangeValue('1.1')" id="1.1Button">-</button></td>
		<td><button type="button" onClick="ChangeValue('1.2')" id="1.2Button">-</button></td>
		<td><button type="button" onClick="ChangeValue('1.3')" id="1.3Button">-</button></td>
	</tr>
	<tr>
		<td><button type="button" onClick="ChangeValue('2.1')" id="2.1Button">-</button></td>
		<td><button type="button" onClick="ChangeValue('2.2')" id="2.2Button">-</button></td>
		<td><button type="button" onClick="ChangeValue('2.3')" id="2.3Button">-</button></td>
	</tr>
	<tr>
		<td><button type="button" onClick="ChangeValue('3.1')" id="3.1Button">-</button></td>
		<td><button type="button" onClick="ChangeValue('3.2')" id="3.2Button">-</button></td>
		<td><button type="button" onClick="ChangeValue('3.3')" id="3.3Button">-</button></td>
	</tr>
</table>
</div>
<!-- Reset button -->
<button type="button" onClick="Reset()">Reset</button>

<!--Winner text-->
<p id="WinnerText"></p>

<p id="TestText"></p>

</body>
</html>