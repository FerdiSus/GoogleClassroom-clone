import { useState } from "react";
import Nanya from "../components/footer";
import Navbar from "../components/header";
import Sidebar from "../components/sidebar";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useEffect } from "react";





function Mapel() {
  let slug = useParams();
  const [data,setdata] = useState([
        {
          title  : "Tugas Merangkum Kaidah kebahasaan",
          color  : "#3680f1",
          mapel : "Bahasa Indonesia",
          date   : "25 Mei",
          teach  : "Titik Karyati",
          onclick : () => {}
        },
        {
          title  : "Cerita Sejarah",
          color  : "#3680f1",
          mapel : "Bahasa Indonesia",
          date   : "20 Feb",
          teach  : "Titik Karyati",
          onclick : () => {}
        },
        {
          title  : "Mengikhlaskan yang bukan milik kita",
          color  : "#3680f1",
          date   : "13 Mei",
          mapel : "Bahasa Indonesia",
          teach  : "Titik Karyati",
          onclick : () => {}
        },
        {
          title  : "Surat Lamaran Pekerjaan",
          color  : "#3680f1",
          date   : "30 Jul",
          mapel : "XII RPL BAHASA INDONESIA",
          teach  : "Titik Karyati",
          onclick : () => {}
        },
      ])
    
      const [matchedData, setMatchedData] = useState(null);
    
      useEffect(() => {
        const foundData = data.find(item => item.mapel === slug.Mapel);
        if (foundData) {
          setMatchedData(foundData);
        } else {
          setMatchedData(null);
        }
      }, [data, slug.mapel]); 

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
           {/* <h1>Mapel : {slug.Mapel}</h1> */}
           <MiniHead data={data}/>
           <Face slug={slug.Mapel} color={"red"} data={data}/>
            <div className="d-flex fixed-bottom ">
                <Nanya/>
            </div>
        </div>
        </div>
        </>
    )
};

function MiniHead(props)
{
  const [toggle, toggleState] = useState(false);
  const [toggle1, toggleState1] = useState(false);
  const [toggle2, toggleState2] = useState(false);
  
  return(
    <>
    <div className="row" style={{height: 50}}>
      <div className="col border-bottom" style={{height: '100%'}}>
      <div className="row">
      <ul class="nav nav-underline" style={{width: '90%'}}>
      <li class="nav-item ">
        <button className="btn">
          <Link class="nav-link" aria-current="page" to={""} onMouseOver={() => toggleState(true)} onMouseOut={() => toggleState(false)} style={{textDecorationLine : toggle ? 'black' : 'none', color : toggle ? 'blue' : 'black'}}>Forum</Link>
        </button>
      </li>
      <li class="nav-item">
        <button className="btn">
          <Link class="nav-link" aria-current="page" to={""}  onMouseOver={() => toggleState1(true)} onMouseOut={() => toggleState1(false)} style={{textDecorationLine : toggle1 ? 'black' : 'none', color : toggle1 ? 'blue' : 'black'}}>Tugas Kelas</Link>
        </button>
      </li>
      <li class="nav-item">
        <button className="btn">
          <Link class="nav-link" aria-current="page" to={""} onMouseOver={() => toggleState2(true)} onMouseOut={() => toggleState2(false)} style={{textDecorationLine : toggle2 ? 'black' : 'none', color : toggle2 ? 'blue' : 'black'}}>Orang</Link>
        </button>
      </li>
      </ul>
      <div className="col d-flex">
        <i style={{fontSize: 20, marginTop: 10,}} className="bi bi-calendar"></i>
        <i style={{fontSize: 20, marginTop: 10, marginLeft: 20}} className="bi bi-clouds-fill"></i>
      </div>
      </div>
      </div>
    </div>
    </>
  )
}

function Face(props){
  return(
    <>
    <div className="row">
      <div className="col-2"></div>
      <div className="card-8 board border" style={{height: 250,width:'98%', marginTop: 20, backgroundColor:'#3680f1'}}>
        <div style={{marginTop: '16%', marginLeft: 12}}>
          <h1 style={{color: 'white' }}>{props.slug}</h1>
          <h4 style={{color: 'white' }}>TH 2023-2024</h4>
        </div>
      </div>
      <div className="col-2"></div>
    </div>
    {/* //batas */}
    <div className="row d-flex" style={{height: 500, marginTop: 20}}>
        <KotakKecil/>
      {/* kotak kanan */}
      <div className="col-10" style={{width:'80%'}}>
        <div className="row">
          <div className="col board border shadow p-3 mb-4 bg-body-tertiary rounded" style={{height: 70, marginLeft: 20}}>
            <div className="d-flex align-items-center" style={{position: 'absolute', width: '45px', height:'45px',overflow: 'hidden', marginLeft: 4, marginTop: -4}}>
                <img className="rounded-circle" src="https://images.pexels.com/photos/17765480/pexels-photo-17765480/free-photo-of-portrait-of-woman-in-eyeglasses.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" style={{width: '100%',height: '100%', objectFit: 'cover'}}></img>
              </div>
              <div className="d-flex align-items-center" style={{marginLeft: '9%', marginTop: 6}}>
                <span className="map-um">Umumkan Sesuatu ke kelas Anda</span>
              </div>
          </div>
        </div>
        {
          props.data?.map((item)=>{
            return(
        <div className="row">
          <div className="col d-flex board border" style={{height: 70, marginLeft: 20,marginBottom: 20}}>
            <div className="d-flex align-items-center rounded-circle justify-content-center" style={{ width: '45px', height:'45px',overflow: 'hidden', backgroundColor:item.color ,marginTop: 11, marginLeft: 9}}>
              <i className="bi bi-file-earmark-text d-flex align-items-center justify-content" style={{color:'white',width: '100%',height: '100%',marginLeft: 11, fontSize: 23}}></i>
            </div>
            <div style={{marginLeft: '2%', marginTop: 8}} >
              <span>{item.teach} memposting tugas baru: {item.title}</span>
              <div>
                <span style={{fontSize: 13}}>{item.date}</span>
              </div>
            </div>
          </div>
        </div>
            )
          })
        }
      </div>
    </div>
    </>
  )
}

function KotakKecil()
{
  return(
    <div className="col-2 board border" style={{ height: 130, width:'18%'}}>
    <div style={{marginTop: 5}}>
      <span style={{fontWeight: "bolder"}}>Mendatang</span>
    </div>
    <div style={{marginTop: 5}}>
      <span style={{fontSize: 12}}>Hore, tidak ada tugas yang perlu segera diselesaikan!</span>
    </div>
    <div className="but-map d-flex float-end" style={{marginTop: 8, width: '60%', height: 30}}>
      <span style={{fontSize: 14, color: 'blue', marginLeft: 7, marginTop: 4}}>Lihat semua</span>
    </div>
  </div>
  )
}


export default Mapel