import { supabaseAuth, supabasePublic } from "./supabaseClient";


const addQuests = async (quest, allQuests) => {
    // add new quest to public.quests
    // add to quests list in next_auth.users ---> SHOULD be done using trigger

    const {data, error} = await supabasePublic
        .from("quests")
        .insert(quest)
        .select()
    if(error){
        throw new Error(error)
    }
    
    syncTables()

    return data
};

const removeQuests = async (questId, allQuests) => {
    // removes record from public.quests
    // removes from next_auth.quests list and live list (if, also rolls 1 new quest for live) ----> SHOULD be done using trigger

    const { error } = await supabasePublic
        .from('quests')
        .delete()
        .eq('id', questId)
    if(error){
        throw new Error(error)
    }

    syncTables();

    return
};

const editQuests = async (questId, newQuest) => {
    // updates record in public.quests

    const { data, error } = await supabase
        .from('countries')
        .update(newQuest)
        .eq('id', questId)
        .select()
};

const getQuests = async (n) => {
    
    // fetch all quests
    // select 3/n (parameter?) unique quests at random

}

const syncTables = async () => {

    const { data: questIds, error: publicError } = await supabasePublic
        .from('quests')
        .select('quest_id')
    if(error){
        throw new Error(publicError)
    }

    let allQuestsArr = [];
    for (let quest in questIds){
        questArr.push(quest)
    }

    const { data: allQuests, error: authError } = await supabaseAuth
        .from('users')
        .update({ allQuests: allQuestsArr})
        .eq('id', 1)
        .select()
    if(authError){
        throw new Error(authError)
    }

    const { data: liveQuests, error: liveError } = await supabaseAuth
        .from('users')
        .select('live_quests')
    if(liveError){
        throw new Error(liveError)
    }

    let liveQuestsArr = [];
    for (let quest in questIds){
        questArr.push(quest)
    }

    if(!(liveQuestsArr.every(q => allQuestsArr.includes(q)))){
        // roll again
        let newQ = getQuests(1)
        // replace that particular quest
        // add one by one, check if quest in all quests, if not add new quest!
        // what if multiple quests are not there? not possible bc called after every update, there is no batching!
    }
}

export {addQuests, removeQuests, editQuests};