
import Loader from "react-loader-spinner";
const LoaderComp = ()=>{
      
    return(
        <Loader
        type="TailSpin"
        color="rgb(155, 236, 34)"
        height={70}
        width={70}
        timeout={5000} 
        />
          
    );
}
export default LoaderComp;