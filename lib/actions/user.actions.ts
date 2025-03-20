'use server'

import { signInFormSchema } from '../validators'
import { signIn, signOut } from '@/auth'
import { isRedirectError } from 'next/dist/client/components/redirect-error'

// Define the expected state type
export type SignInState = {
  success: boolean
  message: string
}

// Sign in the user with credentials
export async function signInWithCredentials(
  prevState: SignInState, // Use the correct type instead of `unknown`
  formData: FormData
): Promise<SignInState> {
  try {
    // Extract values safely
    const email = formData.get('email')
    const password = formData.get('password')

    if (typeof email !== 'string' || typeof password !== 'string') {
      return { success: false, message: 'Invalid input data' }
    }

    // Validate input
    const user = signInFormSchema.parse({ email, password })

    // Perform sign-in
    await signIn('credentials', user)

    return { success: true, message: 'Signed in successfully' }
  } catch (error) {
    if (isRedirectError(error)) {
      throw error
    }

    // Handle validation errors separately
    if (error.name === 'ZodError') {
      return { success: false, message: 'Invalid email or password format' }
    }

    return { success: false, message: 'Invalid email or password' }
  }
}

// Sign user out
export async function signOutUser() {
  await signOut()
}
