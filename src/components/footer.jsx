


const Footer = () => {
  return (
    <footer className="w-full bg-base-color text-white p-8 min-h-[40vh]">
        <div className="flex flex-col gap-10">
            <div>
                <img src="/logo.png" alt="Barsmiko Logo" className="h-28" />
            <p className="max-w-sm mt-4">
                Build, scale, and automate — without the chaos. From fintech to ops, Barsmiko gives you the systems to grow smarter.
            </p>
            </div>
            <div>
                <h3 className="text-lg mb-4">Quick Links</h3>
                <ul className="flex flex-col gap-2">
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Services</li>
                    <li>Contact</li>
                    <li>Blog</li>
                </ul>
            </div>
        </div>
    </footer>
  )
}

export default Footer