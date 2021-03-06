
const profilePhotoInput = document.getElementById("changeProfilePhoto");
const profilePhoto = document.getElementById('profilePhotoImg');
profilePhotoInput  && profilePhotoInput.addEventListener('change', () => {
	let file = profilePhotoInput.files[0];
	profilePhoto.src = '';
	console.log(profilePhotoInput.value);
});


let numOfChanges = 0;
const radioButtons = document.getElementsByName('reg-user-type');

for(let radio of radioButtons) {
  radio.addEventListener('change', function(e) {
	let label = document.querySelector(`[for="${e.target.id}"]`);
	let labelsALL = document.querySelectorAll('#reg-user-type > label')
    for(let labels of labelsALL) {
      if(labels === label) {
		  labels.classList.remove('btn-secondary');
        labels.classList.add('btn-primary');
      } else {
			labels.classList.add('btn-secondary');
			labels.classList.remove('btn-primary');
      }
    }
    numOfChanges++;
  });
}

jQuery(document).ready(function($){
  $(document).click( function(e){
    if ( $(e.target).closest('#subscriptions').length ) {
        $('#subscriptions .subs').css({'display':'flex'});
        return;
    }
// клик снаружи элемента 
  $('#subscriptions .subs').css({'display':'none'});
  });
  $(document).click( function(e){
    if ( $(e.target).closest('#subscribers').length ) {
        $('#subscribers .subs').css({'display':'flex'});
        return;
    }
// клик снаружи элемента 
  $('#subscribers .subs').css({'display':'none'});
  });
});