export default function DashboardLayout({
    children,
    team,
    analytics,
}: {
    children: React.ReactNode
    analytics: React.ReactNode
    team: React.ReactNode
}) {
    return (
        <>
            { children }
            { team }
            { analytics }
        </>
    )
}