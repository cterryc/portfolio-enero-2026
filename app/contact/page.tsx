import { Terminal as TerminalIcon } from 'lucide-react'
import Form from 'next/form'
import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'

export default function ContactPage() {
  async function createPost(formData: FormData) {
    'use server'

    const title = formData.get('title') as string
    const content = formData.get('content') as string

    // await prisma.post.create({
    //   data: {
    //     title,
    //     content,
    //     authorId: 1,
    //   },
    // });
    console.log('title', title)
    console.log('content', content)

    revalidatePath('/contact')
    redirect('/contact')
  }

  return (
    <div className='flex-1 overflow-hidden relative flex flex-col bg-panel-dark'>
      <div className='flex-1 overflow-y-auto p-4 md:p-8 font-mono text-sm md:text-base'>
        <Form className='w-full max-w-4xl' action={createPost}>
          <div className='flex group hover:bg-white/2'>
            <div className='w-8 md:w-12 text-right pr-4 text-gray-600 select-none pt-1'>
              1
            </div>
            <div className='flex-1 pt-1 wrap-break-word'>
              <span>
                <span className='text-pink-400'>import</span> {'{'}
                <span className='text-yellow-300'>useState</span>
                {'}'} <span className='text-pink-400'>from</span>{' '}
                <span className='text-green-300'>{"'react'"}</span>;
              </span>
            </div>
          </div>
          <div className='flex group hover:bg-white/2'>
            <div className='w-8 md:w-12 text-right pr-4 text-gray-600 select-none pt-1'>
              2
            </div>
            <div className='flex-1 pt-1 wrap-break-word'>
              <span>
                <span className='text-pink-400'>import</span> {'{'}
                <span className='text-yellow-300'>sendToTerminal</span>
                {'}'} <span className='text-pink-400'>from</span>{' '}
                <span className='text-green-300'>{"'@/lib/api'"}</span>;
              </span>
            </div>
          </div>
          <div className='flex group hover:bg-white/2'>
            <div className='w-8 md:w-12 text-right pr-4 text-gray-600 select-none pt-1'>
              3
            </div>
            <div className='flex-1 pt-1 wrap-break-word'></div>
          </div>
          <div className='flex group hover:bg-white/2'>
            <div className='w-8 md:w-12 text-right pr-4 text-gray-600 select-none pt-1'>
              4
            </div>
            <div className='flex-1 pt-1 wrap-break-word'>
              <span className='text-gray-500'>
                {'//'} Initialize contact protocol
              </span>
            </div>
          </div>
          <div className='flex group hover:bg-white/2'>
            <div className='w-8 md:w-12 text-right pr-4 text-gray-600 select-none pt-1'>
              5
            </div>
            <div className='flex-1 pt-1 wrap-break-word'>
              <span>
                <span className='text-pink-400'>export default function</span>{' '}
                <span className='text-blue-400'>ContactForm</span>() {'{'}
              </span>
            </div>
          </div>
          <div className='flex group hover:bg-white/2'>
            <div className='w-8 md:w-12 text-right pr-4 text-gray-600 select-none pt-1'>
              6
            </div>
            <div className='flex-1 pt-1 wrap-break-word'>
              <span className='pl-4'>
                <span className='text-pink-400'>const</span>{' '}
                <span className='text-blue-400'>messageData</span> = {'{'}
              </span>
            </div>
          </div>
          <div className='flex group hover:bg-white/2 items-center py-1'>
            <div className='w-8 md:w-12 text-right pr-4 text-gray-600 select-none'>
              7
            </div>
            <div className='flex-1 pl-8 flex items-center flex-wrap'>
              <label className='text-blue-300 mr-2 whitespace-nowrap'>
                name:
              </label>
              <span className='text-orange-300'>{'"'}</span>
              <input
                autoComplete='off'
                className='bg-transparent border-none p-0 h-6 flex-1 min-w-50 text-orange-300 focus:ring-0 placeholder-gray-600/50 font-mono focus:bg-white/5 rounded-sm transition-colors'
                placeholder='John Doe'
                type='text'
              />
              <span className='text-orange-300'>{'"'},</span>
            </div>
          </div>
          <div className='flex group hover:bg-white/2 items-start py-1'>
            <div className='w-8 md:w-12 text-right pr-4 text-gray-600 select-none pt-1'>
              10
            </div>
            <div className='flex-1 pl-8 flex items-start flex-wrap'>
              <label className='text-blue-300 mr-2 whitespace-nowrap pt-1'>
                message:
              </label>
              <span className='text-orange-300 pt-1'>{'"'}</span>
              <textarea
                className='bg-transparent border-none p-0 w-full md:w-2/3 text-orange-300 focus:ring-0 placeholder-gray-600/50 resize-none font-mono focus:bg-white/5 rounded-sm transition-colors leading-6'
                placeholder='Type your message here...'
                rows={4}
              ></textarea>
              <span className='text-orange-300 pt-1'>{'"'}</span>
            </div>
          </div>
          <div className='flex group hover:bg-white/2 py-2'>
            <div className='w-8 md:w-12 text-right pr-4 text-gray-600 select-none pt-2'>
              13
            </div>
            <div className='flex-1 pl-4'>
              <button
                type='submit'
                className='group/btn relative inline-flex items-center gap-3 px-6 py-2 bg-primary/10 hover:bg-primary/20 border border-primary/50 text-primary rounded transition-all'
              >
                <TerminalIcon className='text-[18px]' />
                <span className='font-bold'>await send(messageData)</span>
              </button>
            </div>
          </div>
        </Form>
      </div>
    </div>
  )
}
