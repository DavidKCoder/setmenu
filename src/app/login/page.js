import dynamicImport from 'next/dynamic';

export const dynamic = 'force-dynamic';

const AuthForm = dynamicImport(() => import('./components/AuthForm'), { ssr: false });

export default function LoginPage() {
    return <AuthForm />;
}
