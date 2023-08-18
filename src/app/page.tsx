import Image from "next/image"

interface SocialLinkProps {
  link: string,
  icon: string,
  alt: string
}

function SocialLink({link, icon, alt}: SocialLinkProps) {
  return(
    <div className="relative bg-red-200 rounded-full p-3">
      <a href={link}>
        <Image src={icon} alt={alt} width={42} height={42}/>
      </a>
    </div>
  )
}

export default function Home() {
  return (
    <>
      <div className="flex flex-col md:flex-row justify-center space-x-2">
        <aside className="flex flex-col">
          <div className="rounded-full w-[300px] h-[300px] bg-pink-100">
          </div>
          <div>
            <h2>Type</h2>
            <p>Learner / Teacher</p>
          </div>
          <div>
            <h2>Where to find me</h2>
            <div className="flex gap-10 md:justify-between">
              <SocialLink link="https://twitter.com/saugardev" icon="/img/twitter.svg" alt="twitter icon"/>
              <SocialLink link="https://instagram.com/saugardev" icon="/img/instagram.svg" alt="instagram icon"/>
              <SocialLink link="https://linkedin.com/in/saugardev" icon="/img/linkedin.svg" alt="linked icon"/>
            </div>
          </div>
          <div>
            <h2>Achievements</h2>
            <div className="flex gap-10 md:justify-between">
              <div className="bg-green-200 rounded-2xl w-16 h-16">A</div>
              <div className="bg-green-200 rounded-2xl w-16 h-16">B</div>
              <div className="bg-green-200 rounded-2xl w-16 h-16">C</div>
            </div>
          </div>
          <div>
            <h2>Rating</h2>
            <div className="flex gap-2">
              <div className="w-5 h-5 rounded-md rotate-45 bg-black"></div>
              <div className="w-5 h-5 rounded-md rotate-45 bg-black"></div>
              <div className="w-5 h-5 rounded-md rotate-45 bg-black"></div>
              <div className="w-5 h-5 rounded-md rotate-45 bg-black"></div>
              <div className="w-5 h-5 rounded-md rotate-45 bg-black"></div>
            </div>
          </div>
        </aside>
        <div className="flex-grow">
          <div className="max-w-3xl">
            <div className="max-w-md">
              <label htmlFor="name" className="block text-sm font-medium leading-6 text-gray-900">Name</label>
              <div className="mt-2">
                <input type="text" name="name" id="name" className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" placeholder="John Doe" />
              </div>
            </div>
            <div className="max-w-md">
              <label htmlFor="wallet" className="block text-sm font-medium leading-6 text-gray-900">Email</label>
              <div className="mt-2">
                <input type="text" name="wallet" id="wallet" className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" placeholder="0x123456789012345678901234567890" />
              </div>
            </div>
            <div className="max-w-md">
              <label htmlFor="comment" className="block text-sm font-medium leading-6 text-gray-900">Add your comment</label>
              <div className="mt-2">
                <textarea rows={4} name="comment" id="comment" className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"></textarea>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
