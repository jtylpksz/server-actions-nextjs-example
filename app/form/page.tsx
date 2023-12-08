'use client'

import { useFormState, useFormStatus } from 'react-dom'
import { createTodo } from '@/app/actions'
import styles from './styles.module.css';

const initialState = {
  message: null,
}

function SubmitButton() {
  const { pending } = useFormStatus()

  return (
    <button
      type="submit"
      aria-disabled={pending}
      className={styles.submitButton}>
      Add
    </button>
  )
}

export default function AddForm() {
  const [state, formAction] = useFormState(createTodo, initialState)

  return (
    <main className={styles.container}>
      <h1>Server Actions Example</h1>

      <form action={formAction} className={styles.form}>
        <label htmlFor="todo">Enter Task</label>
        <input type="text" id="todo" name="todo" required />
        <SubmitButton />
        
        {state.message ? (
          <p aria-live="polite" className={styles.errorMessage}>
            {state?.message}
          </p>
        ) : null}
      </form>
    </main>
  )
}
