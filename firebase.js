// firebase.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCsecNhGJQ_nuEIP3bcpIcVgo8TGygKWvM",
  authDomain: "lavajato1-f8fa4.firebaseapp.com",
  projectId: "lavajato1-f8fa4",
  storageBucket: Seu arquivo firebase.js está quase correto, mas há um pequeno erro no campo `storageBucket` do objeto `firebaseConfig`. O valor correto deve terminar com `.firebaseapp.com` e não `.firebasestorage.app`.

**Correção sugerida:**

````javascript
// ...código existente...
const firebaseConfig = {
  apiKey: "AIzaSyCsecNhGJQ_nuEIP3bcpIcVgo8TGygKWvM",
  authDomain: "lavajato1-f8fa4.firebaseapp.com",
  projectId: "lavajato1-f8fa4",
  storageBucket: "lavajato1-f8fa4.appspot.com", // corrigido aqui
  messagingSenderId: "479444330634",
  appId: "1:479444330634:web:0debaa2d973f999edee573",
  measurementId: "G-JNLL49FBLL"
};
// ...código existente...
````

**Resumo:**
- Corrija o campo `storageBucket` para `"lavajato1-f8fa4.appspot.com"`.

Se precisar de mais alguma verificação ou integração, só avisar!, // corrigido aqui
  messagingSenderId: "479444330634",
  appId: "1:479444330634:web:0debaa2d973f999edee573",
  measurementId: "G-JNLL49FBLL"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export { db };
