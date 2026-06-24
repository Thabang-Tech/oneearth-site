document.getElementById('waitlistForm').addEventListener('submit', function(e){
 e.preventDefault();
 const name=document.getElementById('name').value;
 const email=document.getElementById('email').value;

 // Replace this with Mailchimp, ConvertKit, Brevo, or your backend API
 console.log({name,email});

 document.getElementById('message').innerText =
 'Thank you for joining the Oneearth mailing list!';
 this.reset();
});