const tampilkan = () => {
    var nama_kota=document.getElementById("form1").select1.value;
    var p_kontainer=document.getElementById("container");
    
    if (nama_kota=="Semarang")
      {
          p_kontainer.innerHTML="Semarang Kota Atlas";
          console.log("Semarang Kota Atlas");
      }
    else if (nama_kota=="Jogja")
      {
          p_kontainer.innerHTML="Jogja Kota Pelajar";
          console.log("Jogja Kota Pelajar");
      }
    else if (nama_kota=="Wonosobo")
      {
          p_kontainer.innerHTML="Wonosobo Kota Wisata";
          console.log("Wonosobo Kota Wisata");
      }
  };