import classnames from 'classnames'
import React, { useState } from 'react'
import { ChevronDown } from 'react-feather'
import { List } from '../../styles/components'
import { ItemList, Label } from './styles'

const Item = ({ item }) => {
    const { id, name, children } = item
    const [showList, setShowList] = useState(false)

    return (
        <ItemList>
            <Label 
                className={classnames({ active : showList })}
                htmlFor={id}
            >
                <input id={id} type="checkbox" />
                <div>
                    <div>{name}</div>
                    {
                        !!children[0] && (
                            <button onClick={e => setShowList(!showList)}>
                                <ChevronDown />
                            </button>
                        )
                    }
                </div>
            </Label>
            {
                !!children[0] && (
                    <List className={classnames({ show : showList })}>
                        {
                            Object.keys(children).map(item => {
                                return (
                                    <Item key={children[item].id} item={children[item]} />
                                )
                            })
                        }
                    </List>
                )
            }
        </ItemList>
    )
}

export default Item