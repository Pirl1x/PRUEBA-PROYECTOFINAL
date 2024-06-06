import { Outlet } from "react-router-dom"

function Root() {
  return (
    <div>
        <h1>Header</h1>
        <Outlet></Outlet>
        <h3>asdasd</h3>
        <h1>Footer</h1>
    </div>
  )
}

export default Root