<!--index.php-->
<html>
<head>
	<title>Text to NATO</title>
	<script src="scripting.js"></script>
	<script src="MorseSound.js"></script>
	<link href="style.css" rel="stylesheet" type="text/css" />
</head>

<body>
	<p>Input:</p><textarea rows="4" cols="50" id="Input"></textarea>
	<p>Output:</p><textarea rows="4" cols="50" id="Output"></textarea>

	</br></br>
	<button type="button" onClick="NATO()">Translate to NATO</button>
	<button type="button" onClick="Morse()">Translate to Morse Code</button>
	</br>
	<button type="button" onClick="PlayMorse()">Play Morse Code</button>
</body>
</html>