import Link from "next/link";

export default function InterceptedRoutesPage() {
    return (
        <div className="text-center py-2">
            <p>Welcome to Intercepted Routes page. Click the below button.</p>
            <Link className="text-blue" href="/intercepted-routes/intercept">Click Me</Link>
        </div>
    )
}