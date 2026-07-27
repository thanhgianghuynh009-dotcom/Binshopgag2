<script type="module">
import { auth } from "./firebase.js";
import { createUserWithEmailAndPassword } 
from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

window.register = async function() {
  let email = document.getElementById("email").value;
  let pass = document.getElementById("pass").value;

  try {
    await createUserWithEmailAndPassword(auth, email, pass);

    alert("Đăng ký thành công!");
    window.location.href = "login.html";

  } catch (error) {
    alert(error.message);
  }
}
</script>
