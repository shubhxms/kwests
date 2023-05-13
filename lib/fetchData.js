import { supabaseAuth } from "./supabaseClient";

const fetchData = async (session) => {
    // if (session) {
      const { user } = session;
      const { email } = user;
      const { data, error } = await supabaseAuth
        .from('users')
        .select()
        .eq('email', email)
      if (error) {
        console.error(error);
      } else {
        return data
    //     console.log(data[0].id)
    //     // console.log(uid)
    //     id = data[0].id
    //     setState({uid: id})
    //     const { data: dataQ, error } = await supabasePublic
    //       .from('quests')
    //       .select()
    //       .eq('user_id', id)
    //     if (error) {
    //       console.error(error)
    //     } else {
    //       console.log(dataQ)
    //       setState({quests: dataQ})
    //       // console.log(quests)
    //     }
    // //   }
  
    // }
  }
}

export default fetchData