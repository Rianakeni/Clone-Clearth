import React from "react";
import logo from "./components/assets/Logo CleanEarth.svg";
import backbutton from "./backbuttonClearth.svg";
import imagecard from "./components/assets/news1.svg";
import { useNavigate } from "react-router-dom";
import SideBarButton1 from "./sidebar1.png";
import SideBarButton2 from "./sidebar2.png";
import SideBarButton3 from "./sidebar3.png";

function News1() {
  const navigate = useNavigate();
  return (
    <div>
      <div>
        <div className="navbarkhusus">
          <button className="buttoncard" onClick={() => navigate("/homepage")}>
            <img src={backbutton} alt="backbutton" />
          </button>
          <div className="logo2">
            <img src={logo} alt="Logo" />
          </div>
          <h2 className="clearth">LEARTH</h2>
        </div>
      </div>
      <div>
        <img src={imagecard} alt="newsphoto" />
      </div>
      <div>
        <h1>
          Peneliti Menemukan Cara Efektif Mengurangi Pencemaran Plastik dengan
          Memanfaatkan Tujuh Tipe Plastik yang Berbeda
        </h1>
        <p>
          Sebuah terobosan baru dalam pengelolaan sampah plastik telah ditemukan
          oleh para peneliti di sebuah universitas terkemuka. Mereka telah
          mengembangkan metode yang efektif untuk mengurangi pencemaran plastik
          dengan memanfaatkan karakteristik unik dari tujuh tipe plastik yang
          berbeda. Para peneliti menemukan bahwa dengan memahami sifat-sifat
          masing-masing tipe plastik, mereka dapat mengidentifikasi strategi
          yang lebih tepat untuk pengelolaan limbah plastik. Berdasarkan
          penelitian mereka, tujuh tipe plastik yang umum digunakan, seperti
          PET, HDPE, PVC, LDPE, PP, PS, dan lain-lain, memiliki kecenderungan
          yang berbeda dalam hal daur ulang, keamanan, dan penggunaan kembali.
        </p>
      </div>
      <div className="center">
        <div className="button-container">
          <button className="buttontiga" onClick={() => navigate("/homepage")}>
            <img src={SideBarButton1} alt="Button 1" />
          </button>
          <button className="buttontiga" onClick={()=>navigate("/fitursampah")}>
            <img src={SideBarButton2} alt="Button 2" />
          </button>
          <button className="buttontiga" onClick={() => navigate("/profile")}>
            <img src={SideBarButton3} alt="Button 3" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default News1;
