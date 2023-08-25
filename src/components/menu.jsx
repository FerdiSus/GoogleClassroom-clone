

function Menu(props)
{
  return(
    <div className="d-flex justify-content-start align-item-center" onClick={props.onClick} style={{objectFit: 'cover'}}>
      <div className="pe-4">
        <i style={{fontSize: 20, marginLeft: 5,}} className={props.icon}></i>
      </div>
      <div>
        <span style={{fontSize: 15}} className="">{props.label}</span>
      </div>
    </div>
  )
}

export default Menu