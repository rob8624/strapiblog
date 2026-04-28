import { useState } from 'react'
import { useQuery } from '@tanstack/react-query'
import { Dialog } from '../retroui/Dialog'
import { Button } from '../retroui/Button'
import type { Dispatch, SetStateAction } from 'react'
import { strapiAPI } from '@/data/server-functions'


interface SubscribeFormProps {
  setShowSubscribe: Dispatch<SetStateAction<boolean>>
}

export const SubscribeForm = ({ setShowSubscribe }: SubscribeFormProps) => {
  const [FormValue, setFormValue] = useState('')
  const [error, setError] = useState(false)
  const [success, setSuccess] = useState(false)
  const [networkError, setNetworkError] = useState(false)
  const [errorReason , setErrorReason] = useState('')

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    // make subscriber in strapi then add call to endpoint here
    e.preventDefault()
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!FormValue || !emailRegex.test(FormValue)) {
      setError(true)
      return
    }
    try {
      await strapiAPI.subscriber.addSubscriber({ data: { email: FormValue } })
      setError(false)
      setSuccess(true)
    } catch (err) {
        setNetworkError(true)
        setErrorReason(err instanceof Error ? err.message : 'Something went wrong, please try again.')
    }
}

  const CloseButton = () => {
    return (
      <Button size={'sm'} onClick={() => setShowSubscribe((prev) => !prev)}>
        Close
      </Button>
    )
  }

  const ResetButton = () => {
    return (
      <Button
        size={'sm'}
        onClick={() => {
          setFormValue('')
          setError((prev) => !prev)
        }}
      >
        Reset
      </Button>
    )
  }

const SubscriberTermsDialog = () => {

const { data, isLoading } = useQuery({
    queryKey: ['terms'],
    queryFn: () => strapiAPI.subscriber.getSubscriberMessage({ data: { key: 'subscriber_terms' } }),
    
}) 

  return (
    <Dialog>
      <Dialog.Trigger asChild>
        <div className='text-xs font-bold'>Terms</div>
      </Dialog.Trigger>
      <Dialog.Content>
        <Dialog.Header>
          <div>{data?.data[0]?.message}</div>
        </Dialog.Header>
        <section className="flex flex-col gap-4 p-4">
          <section className="text-xl">
            {isLoading ? <p>Loading...</p> : <p>{data?.data[0]?.content}</p>}
          </section>
          <section className="flex w-full justify-end">
            <Dialog.Trigger asChild>
              <Button>Ok, got it!</Button>
            </Dialog.Trigger>
          </section>
        </section>
      </Dialog.Content>
    </Dialog>
  );
}

const SuccessDialog = () => {
    return (
<Dialog open={success} onOpenChange={setSuccess}>
  <Dialog.Content>
    <Dialog.Header>
      <div>Successfully subscribed! 🎉</div>
    </Dialog.Header>
    <section className="flex flex-col gap-4 p-4">
      <section className="text-xl">
        Thank you for subscribing!
      </section>
      <section className="flex w-full justify-end">
        <Button onClick={() => {
          setSuccess(false)
          setShowSubscribe(false)
        }}>Ok, got it!</Button>
      </section>
    </section>
  </Dialog.Content>
</Dialog>)
}

const ErrorDialog = () => {
return (<Dialog open={networkError} onOpenChange={setNetworkError}>
  <Dialog.Content>
    <Dialog.Header>
      <div>Error</div>
    </Dialog.Header>
    <section className="flex flex-col gap-4 p-4">
      <section className="text-xl">
        Sorry! {errorReason}
      </section>
      <section className="flex w-full justify-end">
        <Button onClick={() => {
          setSuccess(false)
          setShowSubscribe(false)
        }}>Close</Button>
      </section>
    </section>
  </Dialog.Content>
</Dialog>)
}




  const FormMessages = () => {
    return (
         <><div>Enter your email address to receive updates</div>
         <div className='flex gap-2 items-center justify-center'>
        <div className='text-[0.5rem] inline'>By adding you agree to</div>
        <div className='cursor-pointer underline'>
            <SubscriberTermsDialog/>
        </div>
        </div>
        </>
    )
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="flex flex-col justify-center items-center">
        <input
          type="text"
          disabled={error}
          value={FormValue}
          onChange={(e) => setFormValue(e.target.value)}
          className={`border-4 rounded-2xl p-3 shadow-sm ${error && 'border-red-700 text-muted-foreground'}`}
        />

        {error ? null : <FormMessages />}
        <div className="flex gap-2">
          {error ? null : <Button size={'sm'}>Submit</Button>}

          {error ? <ResetButton /> : <CloseButton />}
        </div>
        {error && 'Please enter a valid email address'}
      </div>
      <SuccessDialog/>
      <ErrorDialog />
    </form>
  )
  }

