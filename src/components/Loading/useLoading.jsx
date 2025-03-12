import { useState } from "react"

//la palabra use le da a entender al sistema queestamos usando un hook
const useLoading = () => {
    const[isLoading, setIsLoading] = useState (false)

//mostrar loading
    const showLoading = () => {
        setIsLoading(true)
    }

  //ocultar loading
    const hideLoading = () =>{
        setIsLoading(false)
    }

  //pantalla de carga 
    const loadingScreen = <div> Cargando... </div>

    return { isLoading, showLoading, hideLoading, loadingScreen }

}

export default useLoading
