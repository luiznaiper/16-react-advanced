import React, {useContext} from 'react'
import { AppContext } from '../Context'

const NotRegisteredUser = () => {
  const { activateAuth } = useContext(AppContext)
  return (
    <>
        <form onSubmit={activateAuth}>
        <button>Log In</button>
        </form>
    </>
  )
}

export {NotRegisteredUser}