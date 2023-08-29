import { useState } from "react";
import Nanya from "../components/footer";
import Navbar from "../components/header";
import Sidebar from "../components/sidebar";
import { Link } from "react-router-dom";
import Menu from "../components/menu";
import { data } from "autoprefixer";


function TidakAda() {
    const [data,setdata] = useState([
        {
          title  : "XII RPL BAHASA INDONESIA",
          tugas  : "Merangkum Bab 9",
          date   : "Diposting pada Senin, 25 agustus 2023",
          color  : "#3680ef",
          onclick : () => {}
        },
        {
          title  : "Ekskul Wajib PRAMUKA",
          tugas  : "Membuat Tenda dari Daun",
          date   : "Diposting pada Rabu, 19 September 2023",
          color  : "#009788",
          onclick : () => {}
        },
        {
          title  : "KIMIA 10 RPL 55",
          tugas  : "Latihan UH",
          date   : "Diposting pada Selasa, 2 January 2022",
          color  : "#32ac71",
          onclick : () => {}
        },
        {
          title  : "X RPL (2021-2022)",
          tugas  : "Koneksi Database",
          date   : "Diposting pada Jum'at, 10 Maret 2020",
          color  : "#3680f1",
          onclick : () => {}
        },
        {
          title  : "XII RPL",
          tugas  : "Tugas 3",
          date   : "Diposting pada Selasa, 22 agustus 2023",
          color  : "#626365",
          onclick : () => {}
        },
        {
          title : "Belajar Jadi Raja",
          tugas  : "Cara Kudeta President",
          date   : "25 agustus 2023",
          color  : "#ff8b66",
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
        <div className="col" style={{marginTop: 60}}>
          <MiniHead data={data}/>
        </div>
        </div>
        <div className="d-flex fixed-bottom">
          <Nanya/>
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
    <div className="row" style={{height: 50,}}>
      <div className="col border-bottom" style={{height: '100%'}}>
      <ul class="nav nav-underline">
      <li class="nav-item ">
        <button className="btn">
          <Link class="nav-link" aria-current="page" to={"/daftar-tugas"} onMouseOver={() => toggleState(true)} onMouseOut={() => toggleState(false)} style={{textDecorationLine : toggle ? 'black' : 'none', color : toggle ? 'blue' : 'black'}}>Ditugaskan</Link>
        </button>
      </li>
      <li class="nav-item">
        <button className="btn">
          <Link class="nav-link" aria-current="page" to={"/not-allowed"}  onMouseOver={() => toggleState1(true)} onMouseOut={() => toggleState1(false)} style={{textDecorationLine : toggle1 ? 'black' : 'none', color : toggle1 ? 'blue' : 'black'}}>Tidak Ada</Link>
        </button>
      </li>
      <li class="nav-item">
        <button className="btn">
          <Link class="nav-link" aria-current="page" to={"/done"} onMouseOver={() => toggleState2(true)} onMouseOut={() => toggleState2(false)} style={{textDecorationLine : toggle2 ? 'black' : 'none', color : toggle2 ? 'blue' : 'black'}}>Selesai</Link>
        </button>
      </li>
      </ul>         
      </div>
    </div>
    <div className="row">
      <div className="col-1">
      </div>
      <div className="col-9">
        <TidakDaftar data={props.data} />
      </div>  
      <div className="col-1">
        
      </div>
    </div>   
    </>
  )
}

function TidakDaftar(props)
{

  return(
    <>
  <div className="row">
    <div className="col">
    </div>
    <div class="dropdown">
    <button class="btn border d-flex justify-content-between" type="button" data-bs-toggle="dropdown" style={{width: '50%',padding: 10, position: 'relative', top: 24}} >
      Semua kelas
      <i className="bi bi-caret-down-fill"></i>
    </button>
    <ul class="dropdown-menu" style={{width: '50%'}}>
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
    </div>
  </div>
  <div className="row">
     <div className="row" style={{marginTop: 35, marginBottom: 5}}>
         <span style={{fontSize: 20}}>Minggu ini</span>
      </div>
      <div className="row" style={{marginTop: 10, marginBottom: 5}}>
         <span style={{fontSize: 20}}>Minggu lalu</span>
      </div>
      <div className="row" style={{marginTop: 10, marginBottom: 5}}>
         <span style={{fontSize: 20}}>Lebih awal</span>
      </div>
  </div>
    </>
  )
}

export default TidakAda



