export default function setupMax (){

  console.log("setupMax function is called");

  buildHtml();

document.getElementById('generate-btn').addEventListener('click', async () => {
  const length = document.getElementById('length').value;
  const uppercase = document.getElementById('uppercase').checked ? 'uppercase' : '';
  const lowercase = document.getElementById('lowercase').checked ? 'lowercase' : '';
  const special = document.getElementById('special').checked ? 'special' : '';
  const numbers = document.getElementById('numbers').checked ? 'numbers' : '';

  // Byg api med de valgte 
  let apiUrl = `https://api.genratr.com/?length=${length}`;
  if (uppercase) apiUrl += `&${uppercase}`;
  if (lowercase) apiUrl += `&${lowercase}`;
  if (special) apiUrl += `&${special}`;
  if (numbers) apiUrl += `&${numbers}`;

  try {
      const response = await fetch(apiUrl);
      const password = await response.text(); 
      document.getElementById('password').textContent = password;
  } catch (error) {
      console.error('Error fetching the password:', error);
      document.getElementById('password').textContent = 'Error generating password.';
  }
});
}

function buildHtml(){
  let html = `
      <section id="Max">
          <h1>Password Generator</h1>
          <label for="length">Password Length:</label>
          <input type="number" id="length" value="16" min="4" max="32">
          <br>
          <div class="checkbox-container">
              <label for="uppercase">Uppercase</label>
              <input type="checkbox" id="uppercase" checked>
          </div>
          <div class="checkbox-container">
              <label for="lowercase">Lowercase</label>
              <input type="checkbox" id="lowercase" checked>
          </div>
          <div class="checkbox-container">
              <label for="special">Special Characters</label>
              <input type="checkbox" id="special" checked>
          </div>
          <div class="checkbox-container">
              <label for="numbers">Numbers</label>
              <input type="checkbox" id="numbers" checked>
          </div>
          <br>
          <button id="generate-btn">Generate Password</button>
          <p>Your generated password: <span id="password"></span></p>
      </section>`;

  document.body.innerHTML += html;
}