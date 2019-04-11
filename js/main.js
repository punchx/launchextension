(function() {
var csInterface = new CSInterface();

var myInput = document.getElementById('extID');
var openBtn = document.getElementById('openBtn');

var isStorageSupport = true;

try {
	myInput.value = localStorage.getItem("extId");
} catch (err) {
	isStorageSupport = false;
}

openBtn.addEventListener('click', function(){
	if (isStorageSupport) {
			localStorage.setItem("extId",myInput.value);
			csInterface.requestOpenExtension(myInput.value);
		}
	console.log(myInput.value);
});


})();