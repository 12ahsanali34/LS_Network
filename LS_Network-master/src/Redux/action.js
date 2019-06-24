export function UserAction (newUser) {
   return { 
    type: 'changeFirstUser',
    payload : {
      user: newUser
    }
   }
}
export function UserSecAction (newUser) {
  return { 
   type: 'changeSecUser',
   payload : {
     user: newUser
   }
  }
}

export function UserThirdAction (newUser) {
  return { 
   type: 'changeThirdUser',
   payload : {
     user: newUser
   }
  }
}
