import React, { useRef, useState } from 'react'
import emailjs from 'emailjs-com'
import { Card, CardHeader, CardTitle, CardDescription, CardFooter } from '../ui/card'
import { Label } from '../ui/label'
import { Input } from '../ui/input'
import { Textarea } from '../ui/textarea'
import { Button } from '../ui/button'
import { toast } from 'sonner'

function ContactForm() {
  const formRef = useRef(null)
  const [loading, setLoading] = useState(false)

  const submitForm = (e) => {
    e.preventDefault()
    setLoading(true)
    
    emailjs
    .sendForm(
      'service_s05fhi6',
      'template_j26fq5d',
      formRef.current,
      '30vInmYH_3Ghz-gBj'
    )
    .then(() => {
      toast.success('Message sent successfully!')
      setLoading(false)
      formRef.current.reset()
    })
    .catch((error) => {
      console.log(error)
      toast.error('Failed to send message. Please try again.')
      setLoading(false)
    })
  }
  return (
    <Card className={'w-full bg-white/10 backdrop-blur-md border border-white/20 text-white shadow-lg rounded-2xl overflow-y-auto'}>
      <CardHeader>
        <CardTitle className={'font-bold text-2xl'}>Send a Message</CardTitle>
        <CardDescription className="text-sm text-muted-foreground">
          Questions, opportunities, or collaborations? Let’s connect.
        </CardDescription>
      </CardHeader>

      <form ref={formRef} onSubmit={submitForm} className="px-6 pb-6 space-y-6">
        <div className="space-y-2">
          <Label htmlFor="name">Name</Label>
          <Input
            name="name"
            id="name"
            required
            placeholder="Your name"
            className="bg-white/10 border border-white/20 placeholder:text-white/50 text-white focus:ring-mystic-purple"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="email">Email</Label>
          <Input
            name="email"
            id="email"
            type="email"
            required
            placeholder="you@example.com"
            className="bg-white/10 border border-white/20 placeholder:text-white/50 text-white focus:ring-mystic-purple"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="message">Message</Label>
          <Textarea
            name="message"
            id="message"
            placeholder="Write your message here..."
            className="bg-white/10 border border-white/20 placeholder:text-white/50 text-white min-h-[120px] focus:ring-mystic-purple"
          />
        </div>

        <CardFooter className="p-0 pt-4">
          <Button
            disabled = {loading}
            type="submit"
            className="w-full bg-button-primary hover:bg-button-hover hover:cursor-pointer text-white font-semibold"
          >
            Send Message
          </Button>
        </CardFooter>
      </form>
    </Card>
  )
}

export default ContactForm