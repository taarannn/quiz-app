document.getElementById('loginForm').addEventListener('submit', async function (e) {
    e.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    
    const response = await fetch('/auth/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ email, password })
    });
    
    if (response.ok) {
      const { user, token } = await response.json();
      localStorage.setItem('token', token);
      localStorage.setItem('user', JSON.stringify(user));
      
      if (user.role === 'admin') {
        window.location.href = '../admin/index.html';
      } else {
        window.location.href = '../user/index.html';
      }
    } else {
      alert('Login failed');
    }
  });
  /**
 * Navigates to the given URL, this is different than loadPage which will
 * load it without changing Window location.
 * @param {string} url The URL to navigate to
 */
/*
 function navigate(url) {
	let normalizedUrl = getBalancedURL(_getRewrittenURL(url));	// normalize
	if (!_isEncodedURL(normalizedUrl.href)) normalizedUrl = new URL(encodeURL(url));
	window.location.assign(normalizedUrl.href);
} 
*/
