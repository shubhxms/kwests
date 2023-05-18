import React, { useState, useEffect } from 'react'
import {
    List,
    ListItem,
    ListIcon,
    OrderedList,
    UnorderedList,
    InputGroup, Input, InputRightElement, FormControl, Editable,
    EditableInput,
    EditableTextarea,
    EditablePreview,
    useEditableControls,
    Flex,
    ButtonGroup,
    IconButton
} from '@chakra-ui/react'

import { CheckIcon, DeleteIcon, EditIcon, CloseIcon, ArrowForwardIcon } from '@chakra-ui/icons'

import { createQuests, updateQuests, deleteQuests } from '@/lib/questsCRUD'
import EditableQuest from './EditableQuest'


const handleFormEnter = (newText, setNewText, id, allQ, setAllQ) => {
    console.log(newText)
    let newQ ={user_id: id, quest_name: newText}
    try {
        createQuests(newQ)
    } catch (error) {
        console.log(error)
    }
    // let newAllQ = []
    // for (let item of allQ){
    //      newAllQ.push(item)
    // }
    // newAllQ.push(newText)
    setAllQ([...allQ, newQ])
    setNewText('')
}

const handleEditSubmit = (value, user_id, quest_id) => {
    updateQuests(user_id, quest_id, newQ);
}



function UserPage(props) {

    const [newText, setNewText] = useState('')
    const [allQ, setAllQ] = useState(props.allQuests)




    return (
        <div>
            <List spacing={3}>

            {
                
                allQ?.map(q =>
                    <>
                    <EditableQuest questId={q['quest_id']} questName={q["quest_name"]} userId={props.id} live={q["live"]} allQuests={allQ} retrieveQuests={props.retrieveQuests}/>
                    {/* <IconButton icon={<DeleteIcon />} variant='ghost' onDoubleClick={() => handleDelete(props.userId, props.questId, props.live, props.allQuests, toast)}/> */}
                    </>
                    
                    )
            }

            </List>

            <div className="fixed bottom-10 w-2/5">
                <form onSubmit={e => {
                    e.preventDefault()
                    handleFormEnter(newText, setNewText, props.id, allQ, setAllQ)}}>
                    <FormControl>
                        <InputGroup>
                            <Input placeholder="Basic usage" variant='filled' onChange={e => setNewText(e?.target?.value)} value={newText} />
                            <InputRightElement onClick={() => handleFormEnter( newText, setNewText, props.id, allQ, setAllQ)}>
                                <ArrowForwardIcon />
                            </InputRightElement>
                        </InputGroup>
                    </FormControl>
                </form>


            </div>
        </div>
    )
}

export default UserPage