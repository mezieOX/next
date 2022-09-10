
import Link from 'next/link';


function Button({children, link, className = ""}) {
  return (
      <div>
          <Link href={link}><a className={`${className}  capitalize bg-blue-600 rounded font-[600] hover:shadow-xl shadow-md active:scale-90 duration-200 ease-in-out`}>{children}</a></Link>
    </div>
  )
}

export default Button