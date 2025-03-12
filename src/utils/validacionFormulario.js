import { string, object, mixed } from "yup";

let userSchema = object({
    nombre: string().required("El campo nombre no puede quedar vacio"),
    telefono: mixed().required("El campo telefono no puede quedar vacio"),
    email: string().email("El campo email no tiene el formato correcto").required("El campo email es requerido")
})

const validateForm = async (dataForm) => {
    try {
        await userSchema.validate(dataForm)
        return { status: "success" }
    } catch (error) {
        return { status: "error", message: error.message }
    }
}

export default validateForm;