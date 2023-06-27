import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router'
import Dialogue from '../components/Dialogue';



const HomePage = () => {
  const { infos } = useSelector((store) => store.userData)

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
                <h1>Country: {info.country}</h1>
                <h1>Message: {info.msg}</h1>
                <h3>Hobbies:</h3>
                <div className='flex space-x-2'>
                  {info.hobby.map((h, i) => {
                    return <p key={i}>{h}</p>

                  })}
                </div>

                <div className='flex justify-end gap-5 px-2 py-1'>
                  <button onClick={() => nav(`/update/${info.id}`)}><i className="fa-solid fa-pen-to-square fa-lg"></i></button>
                  <Dialogue id={info.id}></Dialogue>
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
