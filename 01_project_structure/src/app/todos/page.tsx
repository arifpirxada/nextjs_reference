"use client"

import "@/styles/todos.css"
import Link from "next/link"

export default function Page() {
    return (
        <div className="todos-container">
            <table>
                <thead>
                    <tr>
                        <td>S. No</td>
                        <td>Name</td>
                        <td>Id</td>
                        <td>Address</td>
                        <td>Action</td>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1.</td>
                        <td>Shah</td>
                        <td>33</td>
                        <td>Lorem ipsum dolor sit amet.</td>
                        <td><Link href="/todos/1">View</Link></td>
                    </tr>
                    <tr>
                        <td>2.</td>
                        <td>John</td>
                        <td>47</td>
                        <td>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</td>
                        <td><Link href="/todos/2">View</Link></td>
                    </tr>
                    <tr>
                        <td>3.</td>
                        <td>Wick</td>
                        <td>7</td>
                        <td>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iste repudiandae quas</td>
                        <td><Link href="/todos/3">View</Link></td>
                    </tr>
                    <tr>
                        <td>4.</td>
                        <td>John</td>
                        <td>47</td>
                        <td>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</td>
                        <td><Link href="/todos/4">View</Link></td>
                    </tr>
                    <tr>
                        <td>5.</td>
                        <td>Wick</td>
                        <td>7</td>
                        <td>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iste repudiandae quas</td>
                        <td><Link href="/todos/5">View</Link></td>
                    </tr>
                    <tr>
                        <td>6.</td>
                        <td>Shah</td>
                        <td>33</td>
                        <td>Lorem ipsum dolor sit amet.</td>
                        <td><Link href="/todos/6">View</Link></td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}