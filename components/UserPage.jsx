import React, { useState } from 'react'
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


const handleFormEnter = (items, setItems, newQ, setNewQ) => {
    console.log(newQ)
    let newItems = [...items]
    newItems.push({key: [Object.keys(items).length + 1], value: newQ})
    setItems(newItems)
    setNewQ('')
}





function UserPage(props) {

    const [items, setItems] = useState([
        {key: 1, value: "task one"},
        {key: 2, value: "task two"},
        {key: 3, value: "task three"}
    ])
    const [newQ, setNewQ] = useState('')

    return (
        <div>
            <List spacing={3}>

            {
                items.map(i =>
                    (
                        <ListItem key={i['key']}>
                            <ListIcon as={ArrowForwardIcon} color='green.500' />
                            <Editable defaultValue={i['value']}>
                                <EditablePreview />
                                <EditableTextarea />
                            </Editable>
                        </ListItem>
                    ))
            }

            </List>

            <div className="fixed bottom-10 w-2/5">
                <form onSubmit={e => {
                    e.preventDefault()
                    handleFormEnter(items, setItems, newQ, setNewQ)}}>
                    <FormControl>
                        <InputGroup>
                            <Input placeholder="Basic usage" variant='filled' onChange={e => setNewQ(e?.target?.value)} value={newQ} />
                            <InputRightElement onClick={() => handleFormEnter(items, setItems, newQ, setNewQ)}>
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