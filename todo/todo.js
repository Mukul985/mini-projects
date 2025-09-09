const list = document.getElementById('list');
document.getElementById('add').addEventListener('click', ()=>{
  const t = document.getElementById('task').value.trim();
  if(!t) return;
  const li = document.createElement('li');
  li.textContent = t;
  li.addEventListener('click', ()=> li.remove());
  list.appendChild(li);
  document.getElementById('task').value = '';
});
