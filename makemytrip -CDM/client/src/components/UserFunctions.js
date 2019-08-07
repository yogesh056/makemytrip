import axios from 'axios'

export const register = newUser => {
  console.log(newUser)
  const api = axios.create({
    baseURL: 'http://localhost:5000/'
  });
  return api
    .post('/users/register', {
      name: newUser.name,
      email: newUser.email,
      password: newUser.password,
      
    })
    .then(response => {
      console.log('Registered')
    })
}

export const login = user => {
  const api = axios.create({
    baseURL: 'http://localhost:5000/'
  });
  return api
    .post('users/login', {
      email: user.email,
      password: user.password
    })
    .then(response => {
      localStorage.setItem('usertoken', response.data)
      return response.data
    })
    .catch(err => {
      console.log(err)
    })
}
export const addHotel= events=> {
  const api = axios.create({
    baseURL: 'http://localhost:5000/'
  });
  return api
    .post('hotels/hotels', {
      hotel:events.name,
           city:events.city,
           landmark:events.landmark,
           prize:events.prize,
           offer:events.offer,
           direction:events.direction,
           sp:events.sp,
           bf:events.bf,
           parking:events.parking,
           housekeeping:events.housekeeping,
           imgurl:events.imgurl,
           star:events.star,
           hotelList:events.hotelList
    })
    .then(response => {
      console.log(response)
      
    })
}
export const getHotels =value => {
  const api = axios.create({
    baseURL: 'http://localhost:5000/'
  });
  return api

    .post('hotels/all', {
      city:value
    })
    .then(response => {
      console.log(typeof response.data)
      var arr =Object.entries(response.data)
      console.log(arr)
     
      //ocalStorage.setItem('alluser',JSON.stringify(response.data))

    return response.data
    })
    .catch(err => {
      console.log(err)
    })
}
export const getallHotels =() => {
  const api = axios.create({
    baseURL: 'http://localhost:5000/'
  });
  return api

    .get('hotels/allHotels', {
      
    })
    .then(response => {
      console.log(typeof response.data)
      var arr =Object.entries(response.data)
      console.log(arr)
     
      //ocalStorage.setItem('alluser',JSON.stringify(response.data))

    return response.data
    })
    .catch(err => {
      console.log(err)
    })
}
export const getHotelsSort =value => {
  console.log(value.search+value.order)
  const api = axios.create({
    baseURL: 'http://localhost:5000/'
  });
  return api

    .post('hotels/sort', {
      city:value.search,
      order:value.order
    })
    .then(response => {
      console.log(typeof response.data)
      var arr =Object.entries(response.data)
      console.log(arr)
     
      //ocalStorage.setItem('alluser',JSON.stringify(response.data))

    return response.data
    })
    .catch(err => {
      console.log(err)
    })
}
export const getHotelsFilter =value => {
  console.log(value)
  const api = axios.create({
    baseURL: 'http://localhost:5000/'
  });
  return api

    .post('hotels/filter', {
      Search:value.city,
      Swimmingpool:value.Swimmingpool,
        BreakFast:value.BreakFast,
        Parking:value.Parking,
        HouseKeeping:value.HouseKeeping
    })
    .then(response => {
      console.log(typeof response.data)
      var arr =Object.entries(response.data)
      console.log(arr)
     
      //ocalStorage.setItem('alluser',JSON.stringify(response.data))

    return response.data
    })
    .catch(err => {
      console.log(err)
    })
}
export const getHotelOne=value => {
  console.log(value)
  const api = axios.create({
    baseURL: 'http://localhost:5000/'
  });
  return api

    .post('hotels/one', {
      hotel:value,
    })
    .then(response => {
      console.log(typeof response.data)
      var arr =Object.entries(response.data)
      console.log(arr)
     
      //ocalStorage.setItem('alluser',JSON.stringify(response.data))

    return response.data
    })
    .catch(err => {
      console.log(err)
    })
}
export const reviewUpdate= event => {
 // console.log(value)
  const api = axios.create({
    baseURL: 'http://localhost:5000/'
  });
  return api
      .post('hotels/review', {
        reviews:event.rr,
        hotel:event.hotel_name
      })
      .then(response => {
        console.log(response)
        
      })
  }
// export const getProfile = user => {
//   return axios
//     .get('users/profile', {
//       //headers: { Authorization: ` ${this.getToken()}` }
//     })
//     .then(response => {
//       console.log(response)
//       return response.data
//     })
//     .catch(err => {
//       console.log(err)
//     })
// }
// export const events= event => {
//   console.log(event)
//   return axios
//     .post('users/events', {
//       id:event.id,
//       events:event.events
//     })
//     .then(response => {
//       console.log(response)
      
//     })
// }
// export const friendsUpdate= event => {
//   console.log(event)
//   return axios
//     .post('users/friends', {
//       id:event.id,
//       friends:event.friends
//     })
//     .then(response => {
//       console.log(response)
      
//     })
// }
// export const newField= event => {
//   console.log(event)
//   return axios
//     .post('users/friendsEvent', {
//       user_name:event.user_name,
//      mutualEvent:event.friendsEvent
//     })
//     .then(response => {
//       console.log(response)
      
//     })
// }
