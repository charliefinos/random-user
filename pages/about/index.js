import React from 'react'
import Link from 'next/link'
const About = () => {
  return (
    <div>
      This is the About page
      <nav>
        <Link href='/'>Go Home</Link>
      </nav>
      <style jsx>{`
        a {
          color:red;
        }
      `}</style>
    </div>
  )
}

export default About