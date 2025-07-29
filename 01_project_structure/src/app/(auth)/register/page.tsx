import "@/styles/auth.css"

export default function RegisterPage() {
    return (
        <div className="page py-2">
            <h1 className="heading text-center">Register</h1>
            <form action="" className="d-flex justify-center items-center flex-column py-2">
                <div className="form-group">
                    <label htmlFor="name">Name: </label>
                    <input type="text" name="name" />
                </div>
                <div className="form-group">
                    <label htmlFor="phone">Email: </label>
                    <input type="text" name="email" />
                </div>
                <div className="form-group">
                    <label htmlFor="phone">Phone: </label>
                    <input type="number" name="phone" />
                </div>
                <div className="form-group textarea">
                    <label htmlFor="address">Address: </label>
                    <textarea name="address" cols={30} />
                </div>

                <button type="submit">Register</button>
            </form>
        </div>
    )
}