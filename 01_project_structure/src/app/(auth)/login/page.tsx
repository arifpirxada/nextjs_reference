import styles from "./login.module.css"
import "@/styles/auth.css"

export default function LoginPage() {
  return (
    <div className="page py-2">
      <h1 className="heading text-center">Login</h1>
      <form action="" className="d-flex justify-center items-center flex-column py-2">
        <div className={`form-group ${styles["form-group"]}`}>
          <label htmlFor="name">Name: </label>
          <input type="text" name="name" />
        </div>
        <div className={`form-group ${styles["form-group"]}`}>
          <label htmlFor="phone">Email: </label>
          <input type="text" name="email" />
        </div>
        <div className={`form-group ${styles["form-group"]}`}>
          <label htmlFor="phone">Phone: </label>
          <input type="number" name="phone" />
        </div>
      </form>
    </div>
  )
}