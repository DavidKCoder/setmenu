import dynamic from "next/dynamic";

const AuthForm = dynamic(() => import("./components/AuthForm"));

export default function LoginPage() {
    return <AuthForm />;
}
