export default function Footer() {

    const year = new Date().getFullYear()

    return (
      <footer className="bg-gray-200 text-center text-xs p-3 absolute bottom-0 w-full">
        <p>All right reserved 👻 &copy; { year }</p>
      </footer>
    )
}