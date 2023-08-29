import { useState } from "react";
import Menu from "./menu";
import { Link } from "react-router-dom";


function Sidebar(props){
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
  // const [toggle, toggleState] = useState(false);
  // const [toggle2, toggleState2] = useState(false);
  // const [toggle3, toggleState3] = useState(false);
  // const [toggle4, toggleState4] = useState(false);
  // const [toggle5, toggleState5] = useState(false);
  // const [toggle6, toggleState6] = useState(false);
  
  return(
  <div style={{overflowY: 'scroll', height: '100vh', position:'sticky',top:'50px' }}>
  <div className="card rounded-0">
    <div className="card-body">
      <a href="/" className="menu" >
      <button className="btn">
        <Menu icon="bi bi-house-door" label="Beranda" onClick={() => {}}></Menu>
      </button>
      </a>
      <a href="/kalender" className="menu">
      <button className="btn" >
          <Menu icon="bi bi-calendar4" label="Kalender" onClick={() => {}}></Menu>
      </button>
      </a>
    </div>
  </div>
  <div className="card rounded-0">
    <div className="card-body">
    <div className="row">
      <div className="col">
        <button className="btn" >
          <Menu icon="bi bi-mortarboard" label="Terdaftar" onClick={() => {}}></Menu>
        </button>
        <a href="/daftar-tugas" className="menu">
        <button className="btn" >
          <Menu icon="bi bi-card-checklist" label="Daftar tugas" onClick={() => {}}></Menu>
        </button>
        </a>
      </div>
    </div>
      <Sidemapel data={data}/>
    </div>
  </div>
  <div className="card rounded-0">
    <div className="card-body">
      <button className="btn" >
        <Menu icon="bi bi-save" label="Kelas yang diarsipkan" onClick={() => {}}></Menu>
      </button>
      <button className="btn">
        <Menu icon="bi bi-gear" label="Setelan" onClick={() => {}}></Menu>
      </button>
    </div>
  </div>
  </div>
)
}



function Sidemapel(props){
    return(
      <>
        {
          props.data?.map((item,id) =>  {
            return(
          <Link to={`/u/${item.title}`} style={{textDecoration: 'none', color: 'black'}}>
          <div className="side">
          <div key={item.id} className="row">
            <div className="col d-flex" style={{marginTop: 12}}>
             <div className="col-3 d-flex">
              <div className="d-flex align-items-center" style={{position: 'absolute', width: '35px', height:'35px',overflow: 'hidden', marginLeft: 10}}>
                <img className="rounded-circle" src={item.image} style={{width: '100%',height: '100%', objectFit: 'cover'}}></img>
              </div>
            </div>
          <div>
            <div className="row">
              <span className=" d-inline-block text-truncate teks" style={{fontSize: 15,maxWidth: '255px'}}>{item.title}</span><br/>
            </div>
            <div className="row">
              <span className="teks" style={{fontSize: 12}}>{item.date}</span>
            </div>
            </div>
            </div>
          </div>     
          </div>
          </Link>
          )
          })  
          }
      </>
    )
  }

 
export default Sidebar