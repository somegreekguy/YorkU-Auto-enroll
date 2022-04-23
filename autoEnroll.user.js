// ==UserScript==
// @name          autoEnroll
// @description   autoEnroll In course at york over and over
// @include       *yorku.ca*
// @require  http://ajax.googleapis.com/ajax/libs/jquery/1.8.3/jquery.min.js
// @grant    GM_addStyle
// ==/UserScript==
				// submitFirstPasswordForm code by Jesse Ruderman
		


//******************************************START OF AUTO LOGIN****************************************************************//
		function submitFirstPasswordForm() {
			for (var elmForm, i=0; elmForm=document.forms[i]; ++i) {
			var numPasswordElements = 0;
				for (var j=0; elmFormElement=elmForm.elements[j]; ++j)
					if (elmFormElement.type == "password" &&
						elmFormElement.value &&
						elmFormElement.value.toLowerCase() != "password") {
					++numPasswordElements;
					}
					if (numPasswordElements != 1) { continue; }
					/*
					 * The obvious way to submit a login form is form.submit().	
					 * However, this doesn't work with some forms, such as
					 * the Google AdWords login, because they do stuff
					 * in the onclick handler of the submit button. So we
					 * need to find the submit button and simulate a click.
					 */
			var elmSubmit = document.evaluate(".//input[@type='image']",
			elmForm, null, XPathResult.FIRST_ORDERED_NODE_TYPE,
			null).singleNodeValue;
				if (!elmSubmit) {
					elmSubmit = document.evaluate(".//input[@type='submit']",
					elmForm, null, XPathResult.FIRST_ORDERED_NODE_TYPE,
					null).singleNodeValue;
					}
				if (!elmSubmit) { continue; }
				/*
				* Give a visual indication that we're auto-submitting the
				* form, then simulate a click on the submit button.
				*/
				elmSubmit.focus();
				elmSubmit.style.MozOutline = "2px solid purple";
				elmSubmit.click();
			}
		}

//********************************************END OF AUTO LOGIN****************************************************************//

//******************************************START OF SELECT SESSION************************************************************//
		function changeSelection( selectToChange, desiredValue )
			{
				for ( var i = 0; i < selectToChange.options.length; ++i )
					if ( selectToChange.options[i].value == desiredValue )
						selectToChange.selectedIndex = i;
			}

		var selectors = document.getElementsByTagName( "select" );

		for ( var i = 0; i < selectors.length; ++i )
		{
			if ( selectors[i].name == "select" )
				changeSelection( selectors[i], 3 );// Digit is value of array list for academic session
			else ( selectors[i].name == "select" )
				changeSelection( selectors[i], 3 );// Digit is value of array list for academic session
		
		}

//********************************************END OF SELECT SESSION************************************************************//


//********************************************START OF CONTINUE BUTTON*********************************************************//

		function submitContinueButton1() {
				document.evaluate("//input[@name='3.5.1.27.1.13' and @type='submit']", document, null, 9, null).singleNodeValue.click();
				}

//********************************************END OF CONTINUE BUTTON***********************************************************//

//********************************************START OF ADD COURSE**************************************************************//
	
			function submitAddButton() {
				document.evaluate("//input[@title='Add a Course' and @type='image']", document, null, 9, null).singleNodeValue.click();
				}
			var d = new Date();
			//var n = d.getMinutes(); 
			var n = d.getSeconds();
			var cats = ["U56G01"];//<----------------------------------------------PUT CAT NUMBER HERE<-----------------------------------
			function textAddCat() {
			
		 var items = document.getElementsByName("5.1.27.7.7"); // inspect this if catisnt being inputted element id changes somtimes
			if(items.length > 0)
				{
	    			items[0].value = cats[n%cats.length];
				//items[0].value = cats["F83E01"];		
}
			document.evaluate("//input[@value='Add Course' and @type='submit']", document, null, 9, null).singleNodeValue.click();
			}
	/*function submitAddCourseCat() {
				document.evaluate("//input[@value='Add Course' and @type='submit']", document, null, 9, null).singleNodeValue.click();
				}
        */		

//**********************************************END OF ADD COURSE**************************************************************//
			

//********************************************START OF CONTINUE BUTTON*********************************************************//
		function submitContinueButton2() {//This is for continue button after attemping to trasnfer a course. we dont need it though
				document.evaluate("//input[@name='3.1.27.13.9' and @type='submit']", document, null, 9, null).singleNodeValue.click();
				}

//********************************************END OF CONTINUE BUTTON***********************************************************//


		function submitYes() {
		document.evaluate("//input[@value='Yes' and @type='submit']", document, null, 9, null).singleNodeValue.click();
		}

				
		function maxTrans()
		{
		var TargetLink = $("a:contains('Go to Main Page')")

		if (TargetLink.length)
		    window.location.href = TargetLink[0].href
		}


		function youBeenLogout()
		{
		var TargetLink = $("a:contains('Go to Registration and Enrolment Module')")

		if (TargetLink.length)
		    window.location.href = TargetLink[0].href
		}


//**********************************************START OF CURRENT STUDENTS********************************************************//

function clickCurrentStudentLink() {
				var TargetLink = $("a:contains('Current Students')")

if (TargetLink.length)
    window.location.href = TargetLink[0].href
				}

//**********************************************END OF CURRENT STUDENTS********************************************************//

//**********************************************START OF ADD/DROP COURSES********************************************************//

function clickAddDrop() {
				var TargetLink = $("a:contains('Add/Drop Courses')")

if (TargetLink.length)
    window.location.href = TargetLink[0].href
				}	

//**********************************************END OF ADD/DROP COURSES********************************************************//


//**********************************************START OF REGISTRARS********************************************************//

function clickRegistrarLink() {
				var TargetLink = $("a:contains('Registrar'sOffice')")

if (TargetLink.length)
    window.location.href = TargetLink[0].href
				}

//**********************************************END OF REGISTRARS********************************************************//

			
					window.addEventListener("load", function() {
					/*
					 * Using setTimeout to give Firefox's password manager a chance	
					 * to autofill the form.
					 */
					setTimeout(submitFirstPasswordForm, 10000);
					setTimeout(changeSelection, 10000);
					setTimeout(submitContinueButton1, 10000);
					setTimeout(submitAddButton, 10000);
					setTimeout(textAddCat, 10000);
					//setTimeout(submitAddCourseCat, 50);
					setTimeout(submitYes, 10000);
					setTimeout(maxTrans, 10000);
					setTimeout(youBeenLogout, 10000);
					setTimeout(clickCurrentStudentLink,1750000);
					setTimeout(clickAddDrop, 15000);
					setTimeout(clickRegistrarLink, 16000);
					
				}, false);
