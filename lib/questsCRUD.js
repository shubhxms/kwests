import { supabaseAuth, supabasePublic } from "./supabaseClient";

const createQuests = async (quest) => {
    // add new quest to public.quests
    const {data, error} = await supabasePublic
        .from("quests")
        .insert(quest)
        .select()
    if(error){
        throw new Error(error)
    }
    
    return data
};

const retrieveQuests = async (id) => {
    // retrieve quests from public.quests
    const { data, error } = await supabasePublic
        .from('quests')
        .select()
        .eq('user_id', id)
    if(error){
        throw new Error(error)
    }
    console.log("here");
    return data
}

const updateQuests = async (id, questId, newQuest) => {
    // updates record in public.quests
    const { data, error } = await supabasePublic
        .from('quests')
        .update(newQuest)
        .match({'quest_id': questId, 'user_id': id})
        .select()
    if(error){
        throw new Error(error)
    }

    return data
};



const deleteQuests = async (id, questId) => {
    // removes record from public.quests
    const { error } = await supabasePublic
        .from('quests')
        .delete()
        .match({'quest_id': questId, 'user_id': id})
    if(error){
        throw new Error(error)
    }

    return
};



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

export {createQuests, retrieveQuests, updateQuests, deleteQuests};