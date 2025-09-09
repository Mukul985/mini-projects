document.getElementById('contact').addEventListener('submit', e=>{
  e.preventDefault();
  const name = e.target.name.value.trim();
  const email = e.target.email.value.trim();
  if(!name || !email.includes('@')) return alert('Please enter valid name and email');
  alert('Form submitted: ' + name);
});
