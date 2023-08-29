import { data } from "autoprefixer";

function Daftar(props)
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
      <div className="col" style={{marginTop: 35, marginBottom: 20}}>
         <span style={{fontSize: 20}}>Tak ada batas Waktu</span>
      </div>
      {
        props.data?.map((item) =>{
          return(
      <div className="border-bottom" style={{height: 90, marginTop: 14}}>
        <div className="row">
          <div className="col d-flex">
              <div className="d-flex align-items-center rounded-circle justify-content-center" style={{ width: '38px', height:'38px',overflow: 'hidden',backgroundColor:'#129eaf',marginTop: 5}}>
                <i className="bi bi-file-earmark-text d-flex align-items-center justify-content" style={{color:'white',width: '100%',height: '100%',marginLeft: 7, fontSize: 23}}></i>
              </div>
              <div className="col" style={{marginLeft: 15}}>
               <div className="row" >
                 <span>{item.tugas}</span>
               </div>
               <div className="row">
                 <span style={{fontWeight: 'lighter', fontSize: 13}}>{item.title}</span>
               </div>
               <div className="row" style={{marginTop: 10, paddingBottom:5}}>
                 <span style={{fontWeight: 'lighter' , fontSize: 13}}>{item.date}</span>
               </div>
              </div>
          </div>
        </div>
      </div>
          )
        })
      }
     <div className="row" style={{marginTop: 20, marginBottom: 5}}>
         <span style={{fontSize: 20}}>Minggu ini</span>
      </div>
      <div className="row" style={{marginTop: 10, marginBottom: 5}}>
         <span style={{fontSize: 20}}>Minggu Berikutnya</span>
      </div>
      <div className="row" style={{marginTop: 10, marginBottom: 5}}>
         <span style={{fontSize: 20}}>Nanti</span>
      </div>
  </div>
    </>
  )
}

export default Daftar