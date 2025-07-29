import Link from "next/link"

export default async function DynamicOptionalCatchAllPage({
    params
}: {
    params: Promise<{ dynamic: string[] }>
}) {

    const { dynamic } = await params

    return (
        <div className="text-center py-2">
            { dynamic && <div>
                Dynamic values: <b className="text-yellowish">{ dynamic }</b><br />
                First: <b className="text-yellowish">{ dynamic[0] }</b><br />
                Second:<b className="text-yellowish"> { dynamic[1] }</b><br />
                Third: <b className="text-yellowish">{ dynamic[2] }</b><br /><br />
            </div>
            }

            <p>The difference between catch-all and optional catch-all segments is that with optional, the route without the parameter is also matched</p>
            <div className="d-flex py-2 justify-center">

                <button className="uiverse">
                    <div className="wrapper">
                        <p><Link href="/dynamic-optional-catch-all">Check</Link></p>
                        <div className="circle circle-12"></div>
                        <div className="circle circle-11"></div>
                        <div className="circle circle-10"></div>
                        <div className="circle circle-9"></div>
                        <div className="circle circle-8"></div>
                        <div className="circle circle-7"></div>
                        <div className="circle circle-6"></div>
                        <div className="circle circle-5"></div>
                        <div className="circle circle-4"></div>
                        <div className="circle circle-3"></div>
                        <div className="circle circle-2"></div>
                        <div className="circle circle-1"></div>
                    </div>
                </button>
            </div>

        </div>
    )
}