import { connect } from 'react-redux'
import Portfolio from '../components/Portfolio'
import { setOrder } from '../actions/portfolio'
import { getDaysAgo } from '../helpers/dates'
import { groupByStock } from '../helpers/transactions'


const mapStateToProps = (state) => {
  const grouped = groupByStock(state.transactions.history, state.dates.current)
  return {
    currentDate: getDaysAgo(state.dates.current),
    allPrices: state.stocks.prices,
    dateKeys: state.stocks.dates || [],
    transactions: grouped,
    symbols: Object.keys(grouped),
    order: state.portfolio.order,
    balance: state.account.balance
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    sort: (e) => {
      e.preventDefault()
      dispatch(setOrder(e.target.getAttribute('data-sort-order')))
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps)(Portfolio)
