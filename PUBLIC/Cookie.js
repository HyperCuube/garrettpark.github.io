function createCookie(cookieName,cookieValue)
{
  document.cookie = cookieName + "=" + cookieValue + 
					"; expires=" + new Date(2147483647000).toUTCString(); + 
					"; path=/; samesite=lax; secure;";
}

function accessCookie(cookieName) {
	var name = cookieName + "=";
	var allCookieArray = document.cookie.split(';');
	for(var i=0; i<allCookieArray.length; i++)
	{
		var temp = allCookieArray[i].trim();
		if (temp.indexOf(name)==0)
		return temp.substring(name.length,temp.length);
	}
	return "";
}