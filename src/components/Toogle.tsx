import React, {useState} from 'react'

const Toogle = () => {
  const [activeChild, setactiveChild] = useState<boolean>(false);

  const handleToogle = () => {
    setactiveChild((prev) => (
      prev = !prev
    ))
  }


  return (
    <div onClick={handleToogle} className=' cursor-pointer bg-blue-10  relative h-7 w-14  rounded-3xl '>
          <div className= {`styleToogle left-1 ${activeChild ? 'hidden' : ''}`}>
          </div>
          <div className={`styleToogle right-1 ${!activeChild ? 'hidden' : ''}`}>
          </div>
    </div>
  )
}

export default Toogle