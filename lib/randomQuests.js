export default getQuests = (allQuests) => {
    // calls function in supabase
    let quests = []
    
    let i = 0
    while (i < 3) {
      let selQ = allQuests[Math.floor(Math.random() * allQuests.length)]
      for (let item of allQuests){
        // console.log(item)
        if (item["key"] = selQ["key"]){
          selQ = allQuests[Math.floor(Math.random() * allQuests.length)]
        }
      }
      quests.push(selQ)
      i++
    }
  
    return quests
  };