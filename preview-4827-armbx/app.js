function render(){
  const root=document.getElementById('app');
  const hash=location.hash || '#intro';

  if(hash==='#intro'){
    root.innerHTML=`<div class="container"><div class="card">
      <h1>ARMEEBOX</h1>
      <p>Willkommen im Preview.</p>
      <a class="btn" href="#shop">Zum Shop</a>
      <a class="btn" href="#admin-login">Admin</a>
    </div></div>`;
    return;
  }

  if(hash==='#shop'){
    root.innerHTML=`<div class="container"><div class="card">
      <h1>Shop</h1>
      <p>Produkte kommen später aus Supabase.</p>
      <a class="btn" href="#intro">Zurück</a>
    </div></div>`;
    return;
  }

  if(hash==='#admin-login'){
    root.innerHTML=`<div class="container"><div class="card">
      <h1>Admin Login</h1>
      <div class="row"><input class="input" placeholder="Email"></div>
      <div class="row"><input class="input" placeholder="Passwort" type="password"></div>
      <button class="btn" onclick="alert('Login wird im nächsten Step verbunden')">Login</button>
      <a class="btn" href="#intro">Zurück</a>
    </div></div>`;
    return;
  }

  root.innerHTML='<div class="container"><div class="card"><h1>Not Found</h1></div></div>';
}

window.addEventListener('hashchange', render);
window.addEventListener('load', render);
