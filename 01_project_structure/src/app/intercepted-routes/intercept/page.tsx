import Link from "next/link";

export default function InterceptedRoutesPage() {
    return (
        <div className="text-center py-2">
            <p className="py-2">Welcome to Intercepted Route. From here we will intercept the About & subscribe page. Use the below buttons to intercept about & subscribe page. Reload the page to navigate there.</p>
            <Link className="text-blue mx-2 py-2" href="/intercepted-routes/about">About</Link>
            <Link className="text-blue mx-2 py-2" href="/intercepted-routes/subscribe">Subscribe</Link>
        </div>
    )
}