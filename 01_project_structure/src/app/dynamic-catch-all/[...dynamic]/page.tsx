export default async function Page({
    params
}: {
    params: Promise<{ dynamic: string[] }>
}) {

    const { dynamic } = await params

    return (
        <div className="text-center py-2">
            Dynamic values: <b className="text-yellowish">{ dynamic }</b><br />
            First: <b className="text-yellowish">{ dynamic[0] }</b><br />
            Second:<b className="text-yellowish"> { dynamic[1] }</b><br />
            Third: <b className="text-yellowish">{ dynamic[2] }</b><br /><br />

            Loop:<br />
            {dynamic.map((item, index) => (
                <span key={index}>{item}, </span>
            ))}
        </div>
    )
}