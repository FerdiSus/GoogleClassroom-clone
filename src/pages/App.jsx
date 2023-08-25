import { useState } from "react"
import Sidebar from "../components/sidebar"
import Navbar from "../components/header"
import Nanya from "../components/footer"



function App(){
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
  
  return(
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
        <Main data = {data}/>
      </div>
      <div className="col-3">
        <div className="d-flex fixed-bottom">
          <Nanya/>
        </div>
      </div>
    </div>
    </>
  )
}

function Main(props){
  return(
    <>
    <Section data={props.data}/>
    </>
  )
}

function Gcrcard(props){
  return(
    <div key={props.keys} className="col-6 pe-2 mt-4">
      <div className="card">
      <div className="card-header d-flex" style={{background: props.item.color? props.item.color : 'blue' }}>
          <div className="row">
            <div className="col d-flex justify-content-between">
              <span className="h4 text-white pe-2 d-inline-block text-truncate" style={{maxWidth: '255px'}}>{props.item.title}</span>
               <div className="d-flex justify-content-end text-white">
                 <Menucard icon="bi bi-three-dots-vertical" onClick={() => {}}></Menucard>
               </div>
            </div>
            <div className="row">
              <div className="col">
                <span className="text-white" style={{fontSize: 13}}>{props.item.date}</span>
              </div>
            </div>
            <div className="row">
              <div className="col">
                <span className="text-white d-inline-block text-truncate" style={{fontSize: 13, maxWidth: '170px'}}>{props.item.teach}</span>
              </div>
            </div>
        </div>     
      </div>
      <div className="card-body d-flex justify-content-end align-item-top" style={{height: '150px'}}>
       <div className="col rounded-circle" style={{position: 'absolute', top:60, width: '72px' , height: '72px', overflow: 'hidden' , backgroundColor: '#A0C3FF'}}>
          <img className="col rounded-circle" style={{width: '100%', height: '100%', objectFit:'cover'}} src={props.item.image}></img>
       </div>
      </div>
      <div className="card-footer">
        <div className="row">
          <div className="col d-flex justify-content-end">
            <Menucard icon="bi bi-person-video"></Menucard>
            <Menucard icon="bi bi-folder"></Menucard>
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}

function Section(props){
    return(
      <div>
        <div className="row mb-4">
          {
            props.data?.map((item, i) =>  {
              return(
                <>
                <Gcrcard key={i} item={item}/>
                {/* <Sidemapel key={key} data={props.item} /> */}
                </>
              )
            })  
          }
        </div>
      </div>
    )
}

function Menucard(props){
  return(
    <div className="d-flex justify-content-end align-item-end" onClick={props.onClick}>
      <div className="pe-4">
        <i style={{fontSize: 20}} className={props.icon}></i>
     </div>
    </div>
  )
}
 
export default App