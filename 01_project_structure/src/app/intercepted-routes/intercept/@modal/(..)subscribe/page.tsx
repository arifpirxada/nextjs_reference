"use client"

import { useRouter } from "next/navigation"
import { useEffect, useRef } from "react"

export default function InterceptSubscribePage() {
    const router = useRouter()
    const diaRef = useRef<HTMLDialogElement>(null)

    useEffect(() => {
        diaRef.current?.showModal()
    }, [])

    return (
        <dialog ref={ diaRef } onClose={ () => router.back() } className="text-center py-2 px-2 m-auto rounded-sm">
            <h3>Subscribe</h3>
            <p className="py-2">Subscribe to our Newsletter <b className="text-pink">(Intercepted)</b></p>
            <div>
                <label htmlFor="email">Email</label>
                <input className="mx-2" type="text" id="email" name="email" />
                <button className="d-block mx-auto my-2" type="submit">Subscribe</button>
            </div>
            <button className="my-2" onClick={ () => diaRef.current?.close() }>Close</button>
        </dialog>
    )
}