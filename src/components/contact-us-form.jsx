import {
  useForm
} from "react-hook-form"
import {
  zodResolver
} from "@hookform/resolvers/zod"
import {
  z
} from "zod"
import {
  cn
} from "@/lib/utils"
import {
  Button
} from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form"
import {
  Input
} from "@/components/ui/input"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from "@/components/ui/select"
import {
  Textarea
} from "@/components/ui/textarea"

const formSchema = z.object({
  'full-name': z.string().min(1, { message: "Full name is required" }),
  email: z.string().email({ message: "Please enter a valid email address" }),
  phone: z.string().min(7, { message: "Phone number is required" }),
  organisaion: z.string().min(1, { message: "Organization name is required" }).optional(),
  location: z.string().min(1, { message: "Location is required" }),
  reason: z.string().min(1, { message: "Please select a reason" }),
  message: z.string().min(1, { message: "Message is required" })
});

export default function ContactUsForm() {

  const form = useForm ({
    resolver: zodResolver(formSchema),

  })

  function onSubmit(values) {
    try {
      console.log(values);
    //   toast(
    //     <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
    //       <code className="text-white">{JSON.stringify(values, null, 2)}</code>
    //     </pre>
    //   );
    } catch (error) {
      console.error("Form submission error", error);
    //   toast.error("Failed to submit the form. Please try again.");
    }
  }

  return (
    <Form  {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 max-w-3xl mx-auto py-10">
        
     
          

            
        <FormField
          control={form.control}
          name="full-name"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="form-label">Full Name</FormLabel>
              <FormControl>
                <Input 
                placeholder="Mike Johnson"
                className="form-input"
                type=""
                {...field} />
              </FormControl>
              
            </FormItem>
          )}
        />
 
          
  
        
        <div className="grid grid-cols-6 md:grid-cols-12 gap-4">
          
          <div className="col-span-6">
            
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="form-label">Email</FormLabel>
              <FormControl>
                <Input 
                placeholder="Use your favourite email"
                className="form-input"
                type="email"
                {...field} />
              </FormControl>

            </FormItem>
          )}
        />
          </div>
          
          <div className="col-span-6">
            
          <FormField
            control={form.control}
            name="phone"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="form-label">Phone number</FormLabel>
                <FormControl>
                  <Input 
                    placeholder="Enter your phone number"
                    className="form-input"
                    type="tel"
                    {...field} />
                </FormControl>
        
              </FormItem>
            )}
          />
          </div>
          
        </div>
        
        <FormField
          control={form.control}
          name="organisaion"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="form-label">Business / Organization Name</FormLabel>
              <FormControl>
                <Input 
                placeholder="Mike Autos Inc"
                className="form-input"
                type=""
                {...field} />
              </FormControl>
              
       
            </FormItem>
          )}
        />
        
        <FormField
          control={form.control}
          name="location"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="form-label">Location / Country</FormLabel>
              <FormControl>
                <Input 
                placeholder="Nigeria"
                className="form-input"
                type=""
                {...field} />
              </FormControl>
              
      
            </FormItem>
          )}
        />
        
        <FormField
          control={form.control}
          name="reason"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="form-label">What can we help you with?</FormLabel>
              <Select onValueChange={field.onChange} defaultValue="option-1">
                <FormControl>
                  <SelectTrigger className="form-input !w-full">
                    <SelectValue placeholder="" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="option-1">Product inquiry</SelectItem>
                  <SelectItem value="option-2">Custom tech solution</SelectItem>
                  <SelectItem value="option-3">Automation service</SelectItem>
                  <SelectItem value="option-4">General question</SelectItem>
                  <SelectItem value="option-5">Partnership or collaboration</SelectItem>
                </SelectContent>
              </Select>
                
   
            </FormItem>
          )}
        />
        
        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="form-label">Message / Project Brief</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Briefly describe your request, question, or project idea"
                  className="resize-none form-input"
                  {...field}
                />
              </FormControl>
              
  
            </FormItem>
          )}
        />
        <Button className="btn" type="submit">Send Message</Button>
      </form>
    </Form>
  )
}