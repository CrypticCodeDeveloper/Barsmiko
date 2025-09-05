import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import Markdown from "react-markdown"
import remarkGfm from 'remark-gfm'


const content = `
## 1. The Hidden Cost of Manual Processes  
Manual workflows may feel “safe” because they’re familiar, but they’re actually expensive. Consider time spent on repetitive data entry, approvals, and reporting — hours that could be redirected to innovation.  

In competitive industries like fintech and e-commerce, those wasted hours add up to lost revenue.  

---

## 2. How Automation Changes the Game  
Automation tools don’t just speed up processes; they **standardize** them. That means fewer errors, more consistent outputs, and better scalability.  

Here’s a quick comparison: 




---

## 3. Real-World Wins  
Companies that integrate automation early often see measurable results within months.  

- A fintech client who automated their onboarding process cut customer sign-up times by **60%**.  
- An SME that switched to automated reporting saved over **15 hours per week**.  

The impact is real and immediate.  

---

### 4. Getting Started the Right Way  
The key is **start small, scale fast**:  

1. Identify one process that’s slowing you down.  
2. Automate it using a lightweight tool.  
3. Measure the results.  
4. Expand automation to other areas.  

Tools like workflow builders, low-code platforms, and AI assistants can integrate seamlessly into existing systems without massive upfront costs.  

 `

const BlogPostPage = () => {
  return (
    <div className='min-h-[60vh] p-6 md:p-8 lg:p-10 w-full flex justify-center'>
        <div className='max-w-4xl'>
            <h2 className="">How startups and enterprises can leverage IT automation to cut costs, save time, and stay competitive.</h2>
            <div className="mt-4 flex flex-col md:items-center md:flex-row gap-4">
                <div className="flex-center-y gap-2">
                    <Avatar className="size-10 md:size-12 lg:size-14">
                  <AvatarImage src="" />
                  <AvatarFallback className="bg-base-color text-white font-semibold">BM</AvatarFallback>
                </Avatar>
                <p>Barsmiko</p>
                </div>
                <p className="font-semibold">Sep 4, 2025</p>
                <h2 className="uppercase text-lg bg-base-color p-1 px-4 text-white font-semibold w-fit md:ml-6 lg:ml-8">
                    business
                </h2>
            </div>
            <img src="/empower.jpg" alt="" className="max-h-[60vh] mt-8" />

            <p className="mt-10 flex flex-col gap-6 max-w-3xl">
               <Markdown remarkPlugins={[remarkGfm]}>{content}</Markdown>
            </p>
        </div>
    </div>
  )
}

export default BlogPostPage