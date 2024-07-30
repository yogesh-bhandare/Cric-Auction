// import Form from "../components/Form"
import BaseForm from "../Components/BaseForm"

function Login() {
    return <BaseForm route="/api/token/" method="login" />
}

export default Login