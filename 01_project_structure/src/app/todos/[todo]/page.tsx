import Link from "next/link"
import styles from "./todo.module.css"

export default async function Page({
    params,
}: {
    params: Promise<{ todo: string }>
}) {
    const { todo } = await params
    return <div className={ styles.singleTodo }>
        <p>You are viewing Todo with Id: { todo }</p>
        <Link className={ styles.back } href="/todos">&larr; Back</Link>
    </div>
}