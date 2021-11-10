popoup = document.getElementById("globalPopup")
button = document.getElementById("close")

button.addEventListener('click', eventFunction)

function eventFunction(event){
	popoup.parentNode.removeChild(popoup)
}