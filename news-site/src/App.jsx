import Navbar from './components/Navbar'
import CardItem from './components/CardItem'
import Tab from './components/Tab'
import A from './utils/index'


export default (props) => {
  return (
    <>
      <Navbar />
      <Tab />
      <div className="grid grid-cols-2 gap-x-12 gap-y-10 mx-44 mt-10 justify-center">
          <CardItem />
          <CardItem />
          <CardItem />
          <CardItem />
          <CardItem />
          <CardItem />
      </div>
      <button>load</button>
      <A  />
    </>
  )
}