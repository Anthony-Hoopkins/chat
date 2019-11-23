import React from 'react';
import './ChatList.scss';
import {ChatListItem} from "./ChatListItem/ChatListItem";

const tempItemList = [
    22, 33, 44, 55, 66, 77, 88
];

class ChatList extends React.Component {

    constructor(props, value) {
        super(props);
        console.log(props);
    }

    renderItem(id) {
        return (
            <ChatListItem
                value={this.props.current}
                onClick={() => this.props.onClick(id)}
            />
        );
    }

     render() {
        return (
            <div className="ChatList">
                {
                    tempItemList.map((itemId) => {
                        return this.renderItem(itemId);
                    })
                }
            </div>
        );
    }
}
export default ChatList;
