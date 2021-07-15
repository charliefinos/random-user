export const getStaticProps = async () => {
  const res = await fetch('https://randomuser.me/api')
  const data = await res.json()

  return {
    props: { user: data }
  }
}

const Randomapi = ({ user }) => {
  return (
    <div>
      <h2>{user.results[0].gender}</h2>
      <a>RandomPage</a>
    </div>
  )
}

export default Randomapi
