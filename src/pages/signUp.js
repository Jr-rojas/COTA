import AuthLayout from "../layouts/authLayout/authLayout";
import SignUpForm from "../components/Forms/SignUpForm";
import useDocumentTitle from "../hooks/useDocumentTitle";

export default function SignUp() {
    useDocumentTitle("SignUp - COTA")

    return (
        <AuthLayout title="Create Account">
            <SignUpForm />
        </AuthLayout>
    )
}