import AuthLayout from "../../layouts/authLayout/authLayout";
import LoginForm from "../../components/Forms/loginForm";
import useDocumentTitle from "../../hooks/useDocumentTitle";

export default function LogIn() {
    useDocumentTitle("LogIn - COTA")

    return (
        <AuthLayout title="Log In">
            <LoginForm />
        </AuthLayout>
    )
}