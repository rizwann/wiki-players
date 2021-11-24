
import styles from './Cards.module.scss'

const Cards = ({results}) => {



    let display;

    if(results){
       display = results.map((result, index) => {
           return(
                <div className="col-4 position-relative mb-4" key={index}>
                        <div className={styles.cards}>
                            <img src={result.image} alt={result.name} className={`${styles.img} img-fluid`}/>
                        
                        <div style={{padding:"10px"}} className="content">
                            <div className='fs-4 fw-bold mb-4' >
                                  {result.name}
                            </div>
                            <div className="fs-6">Last known location</div>
                            <div className="fs-5">{result.location.name}</div>

                        </div>
                        </div>
                        <div className={`${styles.badge} position-absolute badge ${result.status==="Alive" ? "bg-success" : (result.status==="Dead" ? "bg-danger" : "bg-warning") }`}>{result.status}</div>
                </div>
           )
       } )
    }
    
    
    else{
        display="No characters found"
    }



    return  <>
            {display}
            </>
            
       
    
}

export default Cards
