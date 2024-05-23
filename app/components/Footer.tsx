import Link from "next/link";

export default function FooterPage(){
    return(
        <footer className="bg-primary">
    <div className="mx-auto max-w-7xl py-8 px-4 sm:px-6 md:flex md:items-center md:justify-between lg:px-8">
        <nav className="-mx-5 -my-2 flex flex-wrap justify-center order-2" aria-label="Footer">
            <div className="px-5">
                <a href="#" className="text-base text-white hover:text-gray-200">Terms of Service</a>
            </div>

            <div className="px-5">
                <a href="#" className="text-base text-white hover:text-gray-200">Privacy Policy</a>
            </div>
        </nav>
        <div className="mt-8 md:mb-8 flex justify-center space-x-6 md:order-3  ">
            <a href="#" className="text-white hover:text-gray-200">
                <span className="sr-only">Facebook</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fill-rule="evenodd"
                        d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                        clip-rule="evenodd" />
                </svg>
            </a>

            <Link target="https://www.fiverr.com/fallen80?up_rollout=true" href="https://www.fiverr.com/fallen80?up_rollout=true" className="text-white hover:text-gray-200">
                <span className="sr-only">fiverr.</span>
                <svg className="h-6 w-6" fill="" viewBox="0 0 24 24" aria-hidden="true"><path d="M88.949 14.027h-3.433c-2.21 0-3.394 1.655-3.394 4.413v9.97h-6.511V14.026h-2.763c-2.21 0-3.393 1.655-3.393 4.413v9.97h-6.512V8.707h6.512v2.995c1.066-2.325 2.526-2.995 4.697-2.995h7.971v2.995c1.066-2.325 2.526-2.995 4.697-2.995h2.13v5.32zm-27.427 6.068H47.947c.355 2.207 1.736 3.468 4.064 3.468 1.736 0 2.96-.71 3.355-1.97l5.761 1.615c-1.42 3.428-4.933 5.517-9.116 5.517-7.064 0-10.3-5.478-10.3-10.166 0-4.61 2.841-10.127 9.905-10.127 7.498 0 9.984 5.595 9.984 9.733a20.11 20.11 0 0 1-.078 1.93zm-6.314-3.822c-.158-1.695-1.382-3.27-3.591-3.27-2.053 0-3.275.905-3.67 3.27zM30.347 28.409h5.721l7.143-19.7h-6.55l-3.473 11.465-3.552-11.466h-6.512zm-26.677 0h6.472V14.027H16.3V28.41h6.432V8.708H10.142V7.487c0-1.34.947-2.167 2.447-2.167h3.71V0h-4.775C6.827 0 3.67 2.877 3.67 7.092v1.616H0v5.32h3.67z" fill="#003912"/><path d="M92.975 29C95.198 29 97 27.2 97 24.98c0-2.22-1.802-4.019-4.025-4.019s-4.026 1.8-4.026 4.02c0 2.22 1.803 4.019 4.026 4.019z" fill="#1dbf73"/></svg>
            </Link>

            <Link target="https://github.com/yoursaadahmad" href="https://github.com/yoursaadahmad" className="text-white hover:text-gray-200">
                <span className="sr-only">GitHub</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fill-rule="evenodd"
                        d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                        clip-rule="evenodd" />
                </svg>
            </Link>
        </div>
        <div className="mt-8  md:order-1 md:mt-0 ">
            <p className="text-2xl md:text-4xl font-bold text-center text-white">
            &copy;<Link href="/">StyleWorld.</Link>
            </p>
            <p className="text-center text-base text-white">
                Developed by <Link target="https://saadahmadraza.online/" href="https://saadahmadraza.online/">Saad Ahmad Raza</Link>
            </p>
        </div>
    </div>
</footer>
    )
}