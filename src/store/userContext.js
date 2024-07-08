import { createContext } from "react";


export const userContext = createContext({user: {
  nid: '',
  name: '',
  isUser: undefined,
  isAdmin: undefined,
  isReviewer: undefined,
},
SDR: {
  shift : '',
  domain : '',
  role : ''
},
updateSDR : () => {}});


export function updateSDR(data){
  userSample.SDR = data;
}

export const userSample =  {
    user: {
      nid: 'n1626202',
      name: 'Joel John',
      isUser: true,
      isAdmin: true,
      isReviewer: true,
    },
    SDR: {
      shift : '',
      domain : '',
      role : ''
    },
    updateSDR : updateSDR
    }
  