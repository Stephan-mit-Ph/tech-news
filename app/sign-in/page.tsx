import SignInBtns from '@/components/SignInButtons';
import { getServerSession } from 'next-auth/next';
import { authOptions } from '@/lib/auth';
import { redirect } from 'next/navigation';

export default async function SignIn() {
	const session = await getServerSession(authOptions);

	if (session) {
		redirect('/dashboard');
	}

	return <SignInBtns />;
}
