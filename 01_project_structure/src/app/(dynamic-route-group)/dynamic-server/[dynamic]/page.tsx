export default async function Page({
    params
}: {
    params: Promise<{ dynamic: string }>
}) {

    const { dynamic } = await params

    return (
        <div className="text-center py-2">Dynamic: <b className="text-yellowish">{ dynamic }</b>, You have to use await in server component for using params. For client you don't need to use await.</div>
    )
}