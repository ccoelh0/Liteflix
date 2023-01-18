import React, {createContext} from 'react'
import { ReactNode } from 'react';

interface IContext {
  movies: any[]
}

const Context = createContext<IContext | undefined>(undefined);

const Provider = ({children}: {children: ReactNode}) => {

  return <Context.Provider value={{movies: []}}>{children}</Context.Provider>
}

export default Provider