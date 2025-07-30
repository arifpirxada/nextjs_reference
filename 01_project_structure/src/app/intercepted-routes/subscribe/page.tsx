export default function SubscribePage() {
    return (
        <div className="text-center py-2">
            <h3 className="py-2">Subscribe to our Newsletter</h3>
            <div>
                <label htmlFor="email">Email</label>
                <input className="mx-2" type="text" id="email" name="email" />
                <button className="d-block mx-auto my-2" type="submit">Subscribe</button>
            </div>
        </div>
    )
}