//scripting.js for index.php

//Variable which will be filled with the value of the Input field (textarea)
var InputText;
//Will be filled with the value of InputText
var TranslatedText;
//TranslatedText will be split into this array
var WordArray = new Array();

//Used in the Translate() function to see what letter is now observed in the WordArray[]
var LetterNow;
//What word/letter in the NATO phonetic alphabet should be added to NATOLine
var LetterAdd;
//The string where all NATO letters will get added to if the "Translate to NATO" button is pressed 
var NATOLine = "";

//What morse combination of dots and dashes should be added to MorseLine
var MorseAdd;
//The string in which all morse code combinations will be added
var MorseLine = "";

var AddSomething;

//What function will be triggered if the "Translate to NATO" is pressed
function NATO()
{
	//Fill InputText with the text entered in the Input TextArea
	var InputText = document.getElementById("Input").value;
	//Make TranslatedText the value of InputText in all lowercase
	TranslatedText = InputText.toLowerCase();
	//Make sure NATOLine (what all letters will be added to) is empty
	NATOLine = "";
	//Make sure WordArray is empty too
	WordArray = [];
	//Go to the Split function with the value (Translation) NATO so that
	//function can also know that the "Translate to NATO"-button is pressed
	Split(NATO);
}

function Morse()
{
	//Fill InputText with the value of the Input TextArea
	var InputText = document.getElementById("Input").value;
	//TranslatedText is the value of InputText but in lowercase letters
	TranslatedText = InputText.toLowerCase();
	//Make sure MorseLine is empty
	MorseLine = "";
	//Make sure WordArray is empty
	WordArray = [];
	//Go to the Split() function with the value (Translation) of Morse
	Split(Morse);
}

//Function for the splitting of the String TranslatedText and filling the WordArray[] with all the letters
function Split(Translation)
{
	//This loop is done for every value in the string
	for (i = 0; i < TranslatedText.length + 1; i++) 
	{
		//Fill the WordArray[] with the letters of the TranslatedText 
		WordArray.push(TranslatedText.charAt(i));
		//If the Translation value was NATO
		if (Translation == NATO)
		{
			Translate(NATO);
		}
		//If the Translation value was Morse
		if (Translation == Morse)
		{
			Translate(Morse);
		}
	}
}

//The function that turns all letters (and dashes and numbers)
//into the corresponding Morse code or NATO Phonetic Alphabet entry
function Translate(Function)
{
	//Loop is done once for every value in WordArray[]
	for (var e = 0; e < WordArray.length + 1; e++)
	{
		//Letternow is the value that is now observed in the WordArray[]
		LetterNow = WordArray[i];
		//Switch that checks what LetterNow corresponds to.
		//Once it sees what LetterNow is, LetterAdd and MorseAdd will be filled 
		//with a Phonetic alphabet and Morse code entry
		AddSomething = true;
		switch (LetterNow) 
		{
		case "a":
			LetterAdd = "Alpha";
			MorseAdd = ".-";
			break;
		case "b":
			LetterAdd = "Bravo";
			MorseAdd = "-...";
			break;
		case "c":
			LetterAdd = "Charlie";
			MorseAdd = "-.-.";
			break;
		case "d":
			LetterAdd = "Delta";
			MorseAdd = "-..";
			break;
		case "e":
			LetterAdd = "Echo";
			MorseAdd = ".";
			break;
		case "f":
			LetterAdd = "Foxtrot";
			MorseAdd = "..-.";
			break;
		case "g":
			LetterAdd = "Golf";
			MorseAdd = "--.";
			break;
		case "h":
			LetterAdd = "Hotel";
			MorseAdd = "....";
			break;
		case "i":
			LetterAdd = "India";
			MorseAdd = "..";
			break;
		case "j":
			LetterAdd = "Julliett";
			MorseAdd = ".---";
			break;
		case "k":
			LetterAdd = "Kilo";
			MorseAdd = "-.-";
			break;
		case "l":
			LetterAdd = "Lima";
			MorseAdd = ".-..";
			break;
		case "m":
			LetterAdd = "Mike";
			MorseAdd = "--";
			break;
		case "n":
			LetterAdd = "November";
			MorseAdd = "-.";
			break;
		case "o":
			LetterAdd = "Oscar";
			MorseAdd = "---";
			break;
		case "p":
			LetterAdd = "Papa";
			MorseAdd = ".--.";
			break;
		case "q":
			LetterAdd = "Quebec";
			MorseAdd = "--.-";
			break;
		case "r":
			LetterAdd = "Romeo";
			MorseAdd = ".-.";
			break;
		case "s":
			LetterAdd = "Sierra";
			MorseAdd = "...";
			break;
		case "t":
			LetterAdd = "Tango";
			MorseAdd = "-";
			break;
		case "u":
			LetterAdd = "Uniform";
			MorseAdd = "..-";
			break;
		case "v":
			LetterAdd = "Victor";
			MorseAdd = "...-";
			break;
		case "w":
			LetterAdd = "Whiskey";
			MorseAdd = ".--";
			break;
		case "x":
			LetterAdd = "X-Ray";
			MorseAdd = "-..-";
			break;
		case "y":
			LetterAdd = "Yankee";
			MorseAdd = "-.--";
			break;
		case "z":
			LetterAdd = "Zulu";
			MorseAdd = "--..";
			break;
		case "-":
			LetterAdd = "Dash";
			break;
		case "1":
			LetterAdd = "One";
			MorseAdd = ".----";
			break;
		case "2":
			LetterAdd = "Two";
			MorseAdd = "..---";
			break;
		case "3":
			LetterAdd = "Three";
			MorseAdd = "...--";
			break;
		case "4":
			LetterAdd = "Four";
			MorseAdd = "....-";
			break;
		case "5":
			LetterAdd = "Five";
			MorseAdd = ".....";
			break;
		case "6":
			LetterAdd = "Six";
			MorseAdd = "-....";
			break;
		case "7":
			LetterAdd = "Seven";
			MorseAdd = "--...";
			break;
		case "8":
			LetterAdd = "Eight";
			MorseAdd = "---..";
			break;
		case "9":
			LetterAdd = "Nine";
			MorseAdd = "----.";
			break;
		case "0":
			MorseAdd = "-----";
			break;
		case "":
			LetterAdd = "";
			MorseAdd = "";
			AddSomething = false;
			break;
		default:
			//add nothing
			LetterAdd = "";
			MorseAdd = "";
			AddSomething = false;
		}
	}
	//if the value of Translate() (Function) was NATO (given by the Split function) 
	//the AddALetter function will be called upon
	if (Function == NATO)
	{
		if (AddSomething)
		{
			AddALetter();		
		}	
	}
	//if the value of Translate() (Function) was Morse (given by the Split function) 
	//the AddMorse function will be called upon
	if (Function == Morse)
	{
		if (AddSomething)
		{
			AddMorse();			
		}
	}
}

//AddALetter function will fill the string that should be displayed in the Output textarea
function AddALetter()
{
	//NATOLine is emptied in the vey beginning of the script (in NATO())
	//So this function will add the LetterAdd variable (determined what that is in th Translate() function)
	//plus a space to that string. (the space is so the words are not against each other)
	NATOLine += LetterAdd + " ";
	//Go to the UpdateOutput function with the NATO value (Language)
	UpdateOutput(NATO);
}

//AddMorse function will fill the string that will displayed in the Output textarea
function AddMorse()
{
	//MorseLine is emptied in the Morse() function
	//Will take what is in MorseLine already and add the MorseAdd variable (which is filled in the Translate() function)
	//a space is added after every MorseAdd entry so the morse codes are not against each other
	MorseLine += MorseAdd + " ";
	//Go to the UpdateOutput() function with the value (Language) of Morse so the MorseLine 
	//will be displayed in the Output textarea
	UpdateOutput(Morse);
}

//Updates the Output textarea
function UpdateOutput(Language)
{
	//Empty the Output textarea to be sure nothing is in that textarea
	document.getElementById("Output").value = "";
	
	//If the Language value is NATO (thus the "Translate to NATO"-button is pressed in the beginning)
	if (Language == NATO)
	{
		//Fill the Output textarea with the NATOLine string which is filled in the AddALetter function
		document.getElementById("Output").value = NATOLine;	
	}
	
	//if the Language value is Morse (thus the "Translate to Morse Code"-button is pressed)
	if (Language == Morse)
	{
		//Fill the Output textarea with the MorseLine string which is filled in the AddMorse function
		document.getElementById("Output").value = MorseLine;	
	}
}