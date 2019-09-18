import * as React from 'react';

export interface galleryImageProps {
  image: string
  comment: string
  likes: number
  date: string | number
}

export interface AppProviderProps { 
  images: any
}

export const AppContext = React.createContext({})

const AppProvider: React.FC<AppProviderProps> = (Props) => {

  const context = {
    galleryImages: Props.images.data
  }

  return (
    <AppContext.Provider value={context}>
      {Props.children}
    </AppContext.Provider>
  )
}

export default AppProvider;