export default function InterceptLayout({
    children,
    modal
}: {
    children: React.ReactNode,
    modal: React.ReactNode
}) {
    return (
        <>
            { children }
            { modal }
        </>
    )
}