const chk = document.getElementById('chk');
if(chk)
{
chk.addEventListener('change', () => {
	document.body.classList.toggle('dark');
})};
