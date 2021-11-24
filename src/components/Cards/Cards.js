
import styles from './Cards.modules.scss'

const Cards = ({results}) => {

    let display;

    if(results){
       display = results.map((result, index) => {
           return(
                <div className="col-4 position-relative" key={index}>
                        <div className="">
                            <img src={result.image} alt={result.name} className='img-fluid'/>
                        
                        <div className="content">
                            <div className='fs-4 fw-bold mb-4' >
                                  {result.name}
                            </div>
                            <div className="fs-6">Last known location</div>
                            <div className="fs-5">{result.location.name}</div>

                        </div>
                        </div>
                        <div className={`${styles.badge} position-absolute badge bg-danger`}>{result.status}</div>
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
