import React from "react";
import ronaldo from "./ronaldo.png";
export default function Profile() {
  return (
    <div>
      <h2 style={{ textAlign: "Center" }}>Profile Pesepakbola</h2>
      <img
        src={ronaldo}
        alt="Gambar Ronaldo"
        width="30%"
        style={{
          position: "relative",
          left: "35%",
        }}
      />
      <p style={{ marginLeft: "150px", marginRight: "100px" }}>
        Cristiano Ronaldo dos Santos Aveiro, OIH (Portugis: lahir di Funchal,
        Madeira, Portugal, 5 Februari 1985; umur 35 tahun) atau lebih dikenal
        Cristiano Ronaldo merupakan seorang pemain sepak bola Portugal. Ia dapat
        berposisi sebagai sayap kiri atau kanan serta penyerang tengah. Saat ini
        ia bermain untuk tim Italia, Juventus dan untuk tim nasional Portugal.
        Sebelum bermain untuk Real Madrid, ia pernah bermain di Sporting Lisboa
        dan Manchester United. Pemain yang kerap bernomor punggung 7 di lapangan
        hijau ini juga akrab dengan sebutan CR7, gabungan dari inisial nama dan
        nomor punggungnya.
      </p>
    </div>
  );
}
