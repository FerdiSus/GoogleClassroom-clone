import { useState } from "react";
import Nanya from "../components/footer";
import Navbar from "../components/header";
import Sidebar from "../components/sidebar";

function Coba() {
    const [data,setdata] = useState([
        {
          title  : "XII RPL BAHASA INDONESIA",
          color  : "#3680ef",
          date   : "TH 2023-2024",
          teach  : "Titik Karyati",
          image  : "https://lh3.googleusercontent.com/a/default-user=s75-c",
          onclick : () => {}
        },
        {
          title : "Ekskul Wajib PRAMUKA",
          color : "#009788",
          date  : "kelas XI-SMK Negeri 10 Jakarta",
          teach : "Indra Bahrum",
          image : "https://lh3.googleusercontent.com/a-/AD_cMMRqIqYlMrUuPZdk0R3SuXWEES3vdtP46WQDA6IbxKSjhY8=s75-c",
          onclick : () => {}
        },
        {
          title : "KIMIA 10 RPL 55",
          color : "#32ac71",
          date  : "Tahun 2021_2022",
          teach : "Ichsan Alnursan",
          image : "https://lh3.googleusercontent.com/a-/AD_cMMSZLbjArjSXSGZGiPPqQKF_F4YA-gplLUz4iXTQ9JMKlw=s75-c",
          onclick : () => {}
        },
        {
          title : "X RPL (2021-2022)",
          color : "#3680f1",
          date  : "TH 2021-2022",
          teach : "Sudewo Pranowo",
          image : "https://lh3.googleusercontent.com/a-/AD_cMMQmy2G42ou4jtYTszbyMsrgE8f3FlZwKOjDwzOkOSq-yHE=s75-c",
          onclick : () => {}
        },
        {
          title : "XII RPL",
          color : "#626365",
          date  : "SMK Negeri 10 Jakarta",
          teach : "Kelas Virtual SMK Negeri 10 Jakarta",
          image : "https://lh3.googleusercontent.com/a-/AD_cMMQDpsNEqAguZbo27xbCPQW2OalJ7ABukG2ll7pi5b7x7g=s75-c",
          onclick : () => {}
        },
        {
          title : "Belajar Jadi Raja",
          color : "#ff8b66",
          date  : "Albedo",
          teach : "Menjadi Raja dari Para Tuhan",
          image : "https://images.pexels.com/photos/17686105/pexels-photo-17686105/free-photo-of-animal-cute-agriculture-farm.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
          onclick : () => {}
        },
      ])
    return (
        <>
        <div className="row">
            <div className="col">
                <Navbar/>
            </div>
        </div>
        <div className="row">
        <div className="col-3" style={{marginTop: 52}}>
            <Sidebar data = {data}/>
        </div>
        <div className="col-9" style={{marginTop: 60}}>
          <Kopi data ={data}/>
          <div className="d-flex fixed-bottom ">
                <Nanya/>
            </div>
        </div>
        </div>
        </>
    )
};

function Kopi (props)
{
  return(
    <div className="row">
    <div className="dropdown d-flex">
    <button class="btn border d-flex justify-content-between" type="button" data-bs-toggle="dropdown" style={{width: '35%', position: 'relative', top: 24}} >
      Semua kelas
      <i className="bi bi-caret-down-fill"></i>
    </button>
    <ul class="dropdown-menu" style={{width: '35%'}}>
      {
        props.data?.map((item) => {
          return(
            <>
              <li><a class="dropdown-item" href="#">{item.title}</a></li>
            </>
          )
        }
        )
      }
    </ul>
    <div className="col d-flex"style={{ marginTop: 24, marginLeft: 20}}>
     <div className="d-flex align-items-center">
        <button className="btn" style={{width: 40}}>
            <i className='bi bi-arrow-left'></i>
        </button>
        <span style={{marginLeft: 5, marginRight: 5}}> Agu 27-sep 2, 2023 </span>
        <button className="btn" style={{width: 40}}>
            <i className='bi bi-arrow-right'></i>
        </button>
     </div>
     </div>
    </div>
    </div>
  )
}


export default Coba