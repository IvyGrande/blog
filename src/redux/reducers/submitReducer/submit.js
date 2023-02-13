import {DELETE, EDIT, SUBMIT_ARTICLE} from "../../constants/constant";
import Article_List from "../../../Data/Article_List";
import {StoreSelected} from "../pageReducer/articleReducer";


const articleData = {
    articleList: Article_List,
}
const submitReducer = (state = articleData, action) => {
    switch (action.type) {
        case SUBMIT_ARTICLE:
            return [
                ...state,
                action.newData]
        case DELETE:
            return state.filter((item) => item.id !== action.id);
        case EDIT :
            // setProduct(prevProduct => [...prevProduct.map(item => item.id == id ? newProduct : item)])
            return state.map(item => item.id === action.id ? StoreSelected : item);
        default:
            return state;
    }
}
export default submitReducer;