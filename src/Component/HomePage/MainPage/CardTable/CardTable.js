import React from "react";
import ArticleCard from "./ArticleCard/ArticleCard";
import {connect} from "react-redux";
const CardTable = (props) => {


    const openRead =(e)=>{
        props.changeReadState(e)
        // setSelectedId(id)
        // console.log(id)

    }
    console.log(props.cardList)
    const CardModal = props.cardList.map(
        item => {
            return (
                <ArticleCard
                    key={item.id}
                    id={item.id}
                    list={item}
                    changeState={openRead}
                />
            )
        }
    )

    return (
        <div>
            {CardModal}
        </div>
    );
}

function mapStateToProps(state) {
    console.log(state)
    return {
        cardList: state.submitReducer
    }
}

export default connect(mapStateToProps)(CardTable)