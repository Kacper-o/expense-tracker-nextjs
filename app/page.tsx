import AddTransaction from "@/components/AddTransaction"
import Guest from "@/components/Guest"
import { currentUser } from "@clerk/nextjs/server"
import Balance from "@/components/Balance"
import IncomeExpense from "@/components/IncomeExpense"
import TransactionList from "@/components/TransactionList"
import LineChart from "@/components/LineChart"
import BarChart from "@/components/BarChart"
import getUserBalance from "@/app/actions/getUserBalance"
import DoughnutChart from "@/components/DoughnutChart"
import TransactionModal from "@/components/TransactionModal"


const HomePage = async () => {
    const user = await currentUser()
    const balance = await getUserBalance()
  
  const outcomeDoughnutChartStyles = {
    color: ['rgba(52, 200, 90, 0.2)', 'rgba(255, 99, 132, 0.2)']/* ["rgba(179, 12, 0, 0.2)", "rgba(255, 41, 26, 0.2)", "rgba(255, 112, 102, 0.2)", "rgba(255, 136, 128, 0.2)"] */,
    borderColor: ['rgba(52, 200, 90, 1)', 'rgba(255, 99, 132, 1)']/* ["rgba(179, 12, 0, 0.6)", "rgba(255, 41, 26, 0.6)", "rgba(255, 112, 102, 0.6)", "rgba(255, 136, 128, 0.6)"] */
  }

    if(!user) {
        return <Guest />
    }

    return (
       <div className="wrapper">
        <div className="dashboard">
            <h2>Welcome, {user.firstName}</h2>
            {/* <LineChart /> */}
           
            <Balance />
            <IncomeExpense />
            <DoughnutChart />
            {/* <DoughnutChart {...incomeDoughnutChartStyles} /> */}
            
            <BarChart />
           {/*  <AddTransaction /> */}
            <TransactionModal />
            <TransactionList />
            </div>
       </div>
    )
}

export default HomePage
