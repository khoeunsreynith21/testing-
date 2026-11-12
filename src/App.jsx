import { useState } from 'react'
import { Alert, AlertDescription } from '@/components/ui/alert'
import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

// Demo credentials for practicing the login flow without a backend.
const DEMO_EMAIL = 'demo@example.com'
const DEMO_PASSWORD = 'Demo123!'

function App() {
  const [user, setUser] = useState(null)
  const [message, setMessage] = useState('')

  function handleSubmit(event) {
    event.preventDefault()
    const form = event.currentTarget
    const formData = new FormData(form)
    const email = formData.get('email').trim().toLowerCase()
    const password = formData.get('password')

    if (email !== DEMO_EMAIL || password !== DEMO_PASSWORD) {
      setMessage('Email or password is incorrect.')
      return
    }

    // Keep only the user profile in memory, never the submitted password.
    form.reset()
    setMessage('')
    setUser({ name: 'Demo User', email })
  }

  function handleLogout() {
    setUser(null)
    setMessage('')
  }

  return (
    <main className="flex min-h-svh items-center justify-center bg-muted/40 p-4 sm:p-6">
      <section className="w-full max-w-sm" aria-labelledby="login-title">
        <Card className="shadow-sm [--card-spacing:--spacing(6)]">
          <CardHeader className="gap-2 text-center">
            <CardTitle className="text-2xl font-semibold tracking-tight">
              <h1 id="login-title">
                {user ? `Welcome, ${user.name}` : 'Welcome back'}
              </h1>
            </CardTitle>
            <CardDescription className="text-sm">
              {user ? 'You are logged in.' : 'Enter your details to log in.'}
            </CardDescription>
          </CardHeader>

          <CardContent>
            {user ? (
              <div className="grid gap-6">
                <div className="rounded-lg border bg-muted/40 p-4 text-sm wrap-anywhere">
                  <p className="mb-1 text-muted-foreground">Signed in as</p>
                  <p className="font-medium">{user.email}</p>
                </div>
                <Button
                  className="h-11 w-full cursor-pointer text-sm"
                  type="button"
                  onClick={handleLogout}
                >
                  Log out
                </Button>
              </div>
            ) : (
              <form
                className="grid gap-5"
                onSubmit={handleSubmit}
                onChange={() => setMessage('')}
              >
                <div className="grid gap-2">
                  <Label className="text-sm" htmlFor="email">Email</Label>
                  <Input
                    className="h-11 px-3 text-base md:text-sm"
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="username"
                    placeholder="you@example.com"
                    aria-invalid={Boolean(message)}
                    aria-describedby={message ? 'login-error' : undefined}
                    required
                  />
                </div>

                <div className="grid gap-2">
                  <Label className="text-sm" htmlFor="password">Password</Label>
                  <Input
                    className="h-11 px-3 text-base md:text-sm"
                    id="password"
                    name="password"
                    type="password"
                    autoComplete="current-password"
                    aria-invalid={Boolean(message)}
                    aria-describedby={message ? 'login-error' : undefined}
                    required
                  />
                </div>

                {message && (
                  <Alert id="login-error" variant="destructive" className="p-3">
                    <AlertDescription className="text-sm">{message}</AlertDescription>
                  </Alert>
                )}

                <Button className="h-11 w-full cursor-pointer text-sm" type="submit">
                  Log in
                </Button>
              </form>
            )}
          </CardContent>

          <CardFooter className="border-t">
            {user ? (
              <p className="w-full text-center text-xs text-muted-foreground">
                Refreshing this page will log you out.
              </p>
            ) : (
              <aside className="w-full text-sm" aria-label="Demo account">
                <p className="mb-2 font-medium">Try the demo account</p>
                <dl className="grid grid-cols-[auto_1fr] gap-x-3 gap-y-1 text-xs text-muted-foreground">
                  <dt>Email</dt>
                  <dd className="text-right wrap-anywhere"><code>{DEMO_EMAIL}</code></dd>
                  <dt>Password</dt>
                  <dd className="text-right"><code>{DEMO_PASSWORD}</code></dd>
                </dl>
              </aside>
            )}
          </CardFooter>
        </Card>
      </section>
    </main>
  )
}

export default App
