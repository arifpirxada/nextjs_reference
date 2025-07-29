export default async function LoadingPage() {

    await new Promise(resolve => setTimeout(resolve, 2000));

    return (
        <div className="text-center py-2">Welcome the component has loaded</div>
    )
}