import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router'

const HomePage = () => {
  const { infos } = useSelector((store) => store.infos)

  const nav = useNavigate();


  return (
    <div className='grid grid-cols-2 gap-5 p-4' >
      {
        infos.map((info) => {

          return (
            <div key={info.id}>
              <img src={info.preview} alt="" />
              <div>
                <h1>Username: {info.username}</h1>
                <h1>Email: {info.email}</h1>
                <h1>gender: {info.gender}</h1>
                <h1>hobbies: {info.hobby}</h1>
                <h1>Country: {info.country}</h1>
                <h1>Message: {info.msg}</h1>
                <div className='flex justify-end px-2 py-1'>
                  <button onClick={() => nav(`/update/${info.id}`)}><i className="fa-solid fa-pen-to-square fa-lg"></i></button>
                </div>

              </div>
            </div>

          )
        })
      }
    </div>
  )
}

export default HomePage
