export default function ErrorPage() {

    throw new Error("Test error")

    return (
        <div className="text-center py-2">This component will throw an Error. Throwing Error...</div>
    )
}