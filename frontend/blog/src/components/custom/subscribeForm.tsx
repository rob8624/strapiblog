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

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    // make subscriber in strapi then add call to endpoint here
    e.preventDefault()
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!FormValue || !emailRegex.test(FormValue)) {
      setError(true)
      return
    }
    await strapiAPI.subscriber.addSubscriber( { data : {email: FormValue} } )
    setError(false)
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
    </form>
  )
}
