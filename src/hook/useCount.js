import {useContext, useEffect} from "react";
import {CartContext} from "../store/store";
import moment from "moment/moment";

const useCount = () => {
    const [state, dispatch] = useContext(CartContext);

    const dates = [];
    const startDate = moment(state.lastSevenDay.format('YYYY.MM.DD'));
    const endDate = moment(state.firstDay.format('YYYY.MM.DD'));
    while (startDate.isSameOrBefore(endDate)) {
        dates.push(startDate.format('MM/DD'));
        startDate.add(1, 'days');
    }
    const countTomato = (whichDate) => {
        return state.doneTodo
            .filter((item) => {
                return item.date === parseInt(whichDate)
            })
            .reduce((accumulator, currentValue) => {
                if (currentValue.number === undefined) {
                    return accumulator + 0
                }
                return accumulator + currentValue.number
            }, 0)
    }
    useEffect(() => {
        const weekCount = dates
            .map((date) => countTomato(date.slice(3, 5)))
            .reduce((accumulator, currentValue) => {
                return accumulator + currentValue
            }, 0)
        dispatch({
            type: 'WEEK_COUNT', payload: weekCount
        })
    }, [dates[0]])

    return {dates,countTomato}
}
export default useCount;