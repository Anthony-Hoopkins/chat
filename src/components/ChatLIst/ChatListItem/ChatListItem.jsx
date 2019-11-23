import React from 'react';
import './ChatListItem.scss';
import style from './ChatLiistItem.module.css'

export class ChatListItem extends React.Component {
    constructor(props, value) {
        super(props, value);
    }
    render() {

        // if (this.props.current === 44) {
            console.log(this.props);
        //     console.log(this.state);
        // }
// export function ChatListItem(props) {
        return (
            <div className={style.itemWrapper} onClick={this.props.onClick}>
                <img className={style.avatar} src="http://www.apicius.es/wp-content/uploads/2012/07/IMG-20120714-009211.jpg" alt="avatar"/>

                <div className={style.textWrapper}>
                    <div className={style.topLine}>
                        <div className={style.nameField}> Alex </div>
                        <div className={style.timeDisplay}> Mon </div>
                    </div>

                    <div className={style.previewMessageField}> { 'Hello my friend!!!'.substr(0, 15) } </div>
                </div>
            </div>
        );
    }
}
