import { useEffect } from "react";

// 1.ถ้าเรียก script ผ่าน dom ของ browser จะอ่าน function ของ cdn ได้
// 2.ถ้าใช้ nodejs จะมองไม่เห็น function ภายใน cdn เวลาเรียกจะเป็น undefined

function App() {
  //@Import
  //สร้าง script element เพื่อเรียก ใช้ jquery ด้วย link 
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js";
    script.async = true;
    document.body.appendChild(script);
  },[]);

  //@เรียกใช้
  //สร้าง script element เพื่อเรียกใช้ function ใน jquery cdn
  const scriptJS =()=>{
    if (document.querySelectorAll("#useCdn").length<1) {
      const script2 = document.createElement("script");
      script2.id = "useCdn"

      script2.innerHTML = "$(document).ready(function(){$('p').click(function(){$(this).hide();});});" 
      
      document.body.appendChild(script2);
    }
  }  

  return (
    <div onMouseEnter={scriptJS}>
      <p>If you click on me, I will disappear.</p>
      <p>Click me away!</p>
      <p>Click me too!</p>
    </div>
  );
}

export default App;
