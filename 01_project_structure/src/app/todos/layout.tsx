import "@/styles/todos.css"

export default function TodosLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <section>
            <h1 className="todos-heading">This is comming from layout.tsx, shared ui</h1>
            { children }
        </section>
    )
}